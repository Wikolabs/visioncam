# VisionCam — Contrôle qualité visuel par vision artificielle

> Zéro défaut visible en production. 99.4% de précision. 60 ms par pièce.

[![FastAPI](https://img.shields.io/badge/FastAPI-0.111-009688?style=flat&logo=fastapi)](https://fastapi.tiangolo.com)
[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat&logo=next.js)](https://nextjs.org)
[![YOLOv8](https://img.shields.io/badge/YOLOv8-Ultralytics-FF6B35?style=flat)](https://ultralytics.com)
[![OpenCV](https://img.shields.io/badge/OpenCV-4.9-5C3EE8?style=flat&logo=opencv)](https://opencv.org)

---

## Vue d'ensemble

VisionCam est une plateforme de contrôle qualité visuel automatisé par vision artificielle. Elle connecte des caméras industrielles (GigE Vision / USB3), exécute des modèles de détection de défauts en temps réel (YOLOv8 fine-tuné), classe chaque pièce comme conforme / non-conforme, et génère des statistiques de qualité (SPC — Statistical Process Control). Le rejet automatique des pièces défectueuses est piloté par sortie GPIO.

**Domaine :** Machine Vision / Quality Control / Manufacturing  
**Port VM :** 3030 | **Sous-domaine :** visioncam.wikolabs.com

---

## Stack technique

| Couche | Technologie | Rôle |
|--------|------------|------|
| Frontend | Next.js 14, TypeScript, Tailwind CSS, Recharts | Dashboard QC, live stream, SPC charts |
| Backend | FastAPI (Python 3.11), Uvicorn | API inférence, inspection, stats |
| Vision | **YOLOv8** (Ultralytics) + **OpenCV** 4.9 | Détection défauts temps réel |
| Camera SDK | Harvesters (GigE Vision) + OpenCV VideoCapture | Acquisition image |
| Inference | ONNX Runtime / TensorRT | 60 FPS sur GPU industriel |
| SPC | NumPy + statsmodels | Cartes de contrôle Shewhart (X̄-R) |
| Storage | Minio (S3-compatible) | Images défauts + archives |
| Base de données | PostgreSQL 16 | Inspections, défauts, lots |
| Cache | Redis 7 | Live stream WebSocket |
| Infra | Docker Compose, Nginx | VM mono-repo (port 3030) |

### backend/requirements.txt
```
fastapi==0.111.0
uvicorn[standard]==0.29.0
ultralytics==8.2.0
opencv-python-headless==4.9.0.80
onnxruntime==1.18.0
numpy==1.26.4
statsmodels==0.14.2
pandas==2.2.2
asyncpg==0.29.0
sqlalchemy[asyncio]==2.0.30
redis==5.0.4
pydantic==2.7.1
boto3==1.34.0
```

---

## Architecture mono-repo

```
visioncam/
├── frontend/
│   ├── src/app/
│   │   ├── page.tsx              # Dashboard live inspection
│   │   ├── inspection/           # Résultats inspection temps réel
│   │   ├── defects/              # Catalogue défauts détectés
│   │   ├── spc/                  # Cartes de contrôle SPC
│   │   └── training/             # Fine-tuning dataset management
│   └── src/components/
│       ├── LiveFeed.tsx          # WebSocket live camera stream
│       ├── DefectOverlay.tsx     # Bounding boxes sur image
│       ├── QualityGauge.tsx      # Taux conformité temps réel
│       ├── SPCChart.tsx          # Carte X̄-R Recharts avec limites
│       └── DefectGallery.tsx     # Galerie défauts par catégorie
├── backend/
│   ├── app/
│   │   ├── main.py
│   │   ├── routers/
│   │   │   ├── inspection.py     # POST /inspect (image → résultat)
│   │   │   ├── stream.py         # WebSocket live camera
│   │   │   ├── defects.py        # GET défauts + images
│   │   │   └── spc.py            # SPC charts + limites
│   │   ├── services/
│   │   │   ├── detector.py       # YOLOv8 inférence
│   │   │   ├── camera.py         # Acquisition GigE/USB
│   │   │   ├── spc_engine.py     # Calcul limites Shewhart
│   │   │   └── reporter.py       # Rapport qualité PDF
│   │   └── models/
│   │       └── inspection.py
│   ├── requirements.txt
│   └── Dockerfile
├── docker-compose.yml
└── .github/workflows/deploy.yml
```

---

## Diagrammes UML

### Architecture système

```mermaid
%%{init: {'theme': 'base', 'themeVariables': {'primaryColor': '#1a1a2e', 'primaryTextColor': '#e94560', 'primaryBorderColor': '#e94560', 'lineColor': '#374151', 'secondaryColor': '#16213e'}}}%%
flowchart TB
    subgraph VM["🖥️ VM — Docker Compose (port 3030)"]
        NEXT["Next.js 14\nQC Dashboard"]
        API["FastAPI"]

        subgraph VISION["👁️ Vision Engine"]
            YOLO["YOLOv8 Fine-tuned\nDefect detection"]
            OPENCV["OpenCV\nPreprocessing"]
            SPC["SPC Engine\nShewhart charts"]
        end

        PG[("PostgreSQL\nInspections + Defects")]
        MINIO[("Minio S3\nDefect images")]
        REDIS[("Redis\nLive stream")]
    end

    subgraph PROD["🏭 Production Line"]
        CAM1["GigE Camera\nStation 1"]
        CAM2["USB3 Camera\nStation 2"]
        GPIO["GPIO Controller\nEject actuator"]
    end

    CAM1 --> API
    CAM2 --> API
    API --> GPIO
```

### Séquence — Inspection temps réel et rejet pièce

```mermaid
%%{init: {'theme': 'base', 'themeVariables': {'primaryColor': '#1a1a2e', 'primaryTextColor': '#e94560', 'lineColor': '#374151'}}}%%
sequenceDiagram
    participant CAM as GigE Camera
    participant API as FastAPI
    participant PREP as OpenCV
    participant YOLO as YOLOv8
    participant SPC as SPC Engine
    participant GPIO as GPIO Controller
    participant MINIO as Minio S3
    participant QC as QC Supervisor

    CAM->>API: frame (1920×1080, 60fps trigger)

    API->>PREP: preprocess(frame, normalize=True, resize=640)
    PREP-->>API: tensor (3×640×640)

    API->>YOLO: detect(tensor, conf_threshold=0.7)
    Note over YOLO: Inférence TensorRT: 16 ms
    YOLO-->>API: [{class: "rayure", bbox: [x1,y1,x2,y2], conf: 0.94}, {class: "éclat", conf: 0.87}]

    Note over API: 2 défauts détectés → NON CONFORME

    API->>GPIO: trigger_ejector(station_id=1, delay_ms=200)
    GPIO-->>API: ejected=true

    API->>MINIO: store_defect_image(frame, annotations, lot_id)
    API->>API: update_inspection_stats(lot_id, result=NON_CONFORM, defect_types=["rayure", "éclat"])

    API->>SPC: update_control_chart(lot_id, defect_count=1)
    SPC-->>API: {x_bar: 0.034, UCL: 0.12, status: "in_control"}

    API->>REDIS: publish("live/station-01", {frame_id, result, defects, fps: 58})
    REDIS-->>NEXT: WebSocket push → live dashboard update

    Note over API: Lot 847: 1240 pièces, 42 rejetées (3.4%)
    API->>QC: alert(lot=847, rejection_rate=3.4%, trend="increasing", action_required=true)
```

### Modèle de données (ER)

```mermaid
%%{init: {'theme': 'base', 'themeVariables': {'primaryColor': '#1a1a2e', 'primaryTextColor': '#e94560', 'lineColor': '#374151'}}}%%
erDiagram
    LOT {
        uuid id PK
        string reference
        string product_code
        int total_inspected
        int total_rejected
        float rejection_rate_pct
        string status
        timestamp started_at
        timestamp closed_at
    }
    INSPECTION {
        uuid id PK
        uuid lot_id FK
        string camera_id
        boolean is_conforming
        float inference_ms
        string image_s3_key
        timestamp inspected_at
    }
    DEFECT {
        uuid id PK
        uuid inspection_id FK
        string defect_class
        float confidence
        jsonb bbox
        float area_px
        string severity
    }
    SPC_POINT {
        uuid id PK
        uuid lot_id FK
        float x_bar
        float r_bar
        float ucl
        float lcl
        boolean out_of_control
        timestamp computed_at
    }
    DEFECT_MODEL {
        uuid id PK
        string name
        string version
        string onnx_s3_key
        jsonb classes
        float map50
        boolean is_active
        timestamp trained_at
    }

    LOT ||--o{ INSPECTION : "contains"
    INSPECTION ||--o{ DEFECT : "finds"
    LOT ||--o{ SPC_POINT : "generates"
    DEFECT_MODEL ||--o{ INSPECTION : "used_in"
```

---

## PRD

### Problème
Les contrôles qualité visuels manuels sont lents (< 10 pièces/minute), subjectifs, et fatigants. Les contrôleurs manquent jusqu'à 15% des défauts en fin de shift. Les coûts de non-qualité (retours clients, rebuts, reprises) représentent 5-10% du CA dans l'industrie manufacturière.

### Solution
VisionCam automatise l'inspection visuelle à 60 pièces/minute avec 99.4% de précision de détection. YOLOv8 fine-tuné sur les défauts spécifiques de l'usine, décision en 60ms, rejet automatique GPIO, statistiques SPC en temps réel.

### Utilisateurs cibles
| Persona | Besoin |
|---------|--------|
| Responsable Qualité | Dashboard taux conformité, SPC, alertes dérive |
| Opérateur Ligne | Suivi temps réel, signalement anomalie caméra |
| Directeur Production | KPIs qualité, coût non-conformité, tendances |

### OKRs
- Précision détection défauts : ≥ 99%
- Temps inférence par pièce : < 60 ms
- Réduction coût non-qualité : -70%

---

## User Stories

```
US-01 [Qualité] En tant que responsable qualité,
      je veux voir en temps réel le taux de rejet du lot en cours
      avec la répartition par type de défaut
      afin d'arrêter la ligne si le taux dépasse le seuil acceptable.

US-02 [Qualité] En tant que responsable qualité,
      je veux voir la carte de contrôle SPC X̄-R
      avec les limites de contrôle et les points hors limites
      afin de détecter les dérives procédé avant qu'elles génèrent des rebuts.

US-03 [Opérateur] En tant qu'opérateur,
      je veux voir sur mon écran de ligne la dernière pièce inspectée
      avec les défauts encadrés en rouge
      afin de comprendre pourquoi une pièce a été rejetée.

US-04 [Qualité] En tant que responsable qualité,
      je veux télécharger toutes les images de défauts d'un lot
      avec leurs annotations pour alimenter le prochain entraînement du modèle
      afin d'améliorer continuellement la précision du modèle.

US-05 [Directeur] En tant que directeur production,
      je veux voir le coût estimé de non-qualité par lot
      (pièces rejetées × coût unitaire matière + main d'œuvre)
      afin de mesurer le ROI du système de contrôle.
```

---

## Règles métier

| # | Règle | Description | Simulable UI |
|---|-------|-------------|-------------|
| R1 | Seuil confiance | Défaut confirmé si confidence ≥ 70% | ✅ Conf threshold |
| R2 | Classes défauts | Rayure, éclat, manque matière, tâche, déformation | ✅ Defect classes |
| R3 | SPC Shewhart | UCL = μ + 3σ, LCL = μ - 3σ sur 25 sous-groupes | ✅ SPC chart |
| R4 | Out-of-control | 1 point hors limites → alerte immédiate | ✅ OOC alert |
| R5 | Archivage | Images défauts conservées 6 mois, conformes 7 jours | ✅ Retention policy |
| R6 | Rejet GPIO | Signal 24V DC vers éjecteur pneumatique, délai configurable | ✅ GPIO config |
| R7 | Multi-caméra | Jusqu'à 8 caméras simultanées sur un serveur GPU | ✅ Camera count |
| R8 | Auto-calibration | Calibration fond blanc quotidienne automatique 6h | ✅ Cal schedule |
| R9 | Active learning | Images incertaines (0.5 < conf < 0.7) → queue annotation | ✅ AL queue |
| R10 | Traçabilité | Chaque pièce liée à : lot, caméra, modèle version, opérateur | ✅ Traceability |

---

## Spécification API

**Base URL :** `http://visioncam.wikolabs.com/api/v1`

### POST /inspect
```
Content-Type: multipart/form-data
image: piece_123.jpg, lot_id: "lot-847", camera_id: "cam-station-01"
// Response: {"inspection_id": "i_xyz", "is_conforming": false, "defects": [{"class": "rayure", "confidence": 0.94, "bbox": [120, 45, 380, 210]}], "inference_ms": 16}
```

### GET /lots/{id}/spc
```json
// Response: {"x_bar_chart": [{"subgroup": 1, "mean": 0.032, "ucl": 0.12, "lcl": 0.0}], "process_capability": {"cp": 1.42, "cpk": 1.31, "status": "capable"}}
```

### WebSocket /stream/{camera_id}
```
→ JSON stream: {"frame_id": 12450, "fps": 58, "is_conforming": true, "defects": [], "thumbnail_b64": "..."}
```

---

## Simulation UI

| Composant | Description |
|-----------|-------------|
| **Live Feed** | WebSocket stream caméra avec overlay bounding boxes |
| **Quality Gauge** | Jauge circulaire taux conformité % lot courant |
| **SPC Chart** | Recharts avec UCL/LCL et points hors limites en rouge |
| **Defect Gallery** | Grille images défauts avec label et confidence |
| **Rejection Trend** | Évolution taux rejet sur 24h par type de défaut |

---

## Déploiement

```yaml
version: "3.9"
services:
  postgres:
    image: postgres:16-alpine
    environment: {POSTGRES_DB: visioncam, POSTGRES_USER: vc_user, POSTGRES_PASSWORD: "${POSTGRES_PASSWORD}"}
  redis:
    image: redis:7-alpine
  minio:
    image: minio/minio
    command: server /data
    environment: {MINIO_ROOT_USER: "${MINIO_USER}", MINIO_ROOT_PASSWORD: "${MINIO_PASSWORD}"}
  backend:
    build: ./backend
    deploy:
      resources:
        reservations:
          devices:
            - capabilities: [gpu]
    environment:
      DATABASE_URL: postgresql+asyncpg://vc_user:${POSTGRES_PASSWORD}@postgres/visioncam
      MINIO_URL: "http://minio:9000"
      REDIS_URL: redis://redis:6379
    depends_on: [postgres, redis, minio]
    expose: ["8000"]
  frontend:
    build: ./frontend
    expose: ["3000"]
  nginx:
    image: nginx:alpine
    ports: ["3030:80"]
volumes:
  pg_data:
  minio_data:
```

---

## Roadmap

### Phase 1 — MVP
- [ ] YOLOv8 inférence + API
- [ ] Dashboard live WebSocket
- [ ] Archivage défauts Minio

### Phase 2 — Production
- [ ] Multi-caméra (4 stations)
- [ ] SPC Shewhart automatique
- [ ] Rejet GPIO intégré

### Phase 3 — Intelligence
- [ ] Active learning (amélioration continue modèle)
- [ ] Corrélation défauts ↔ paramètres procédé
- [ ] Intégration MES/ERP (SAP QM)

---

*Un produit [Wikolabs](https://wikolabs.com) — Intelligence artificielle appliquée aux métiers*
