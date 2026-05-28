"use client";

export default function VisionCamPage() {
  return (
    <div style={{ fontFamily: "var(--font-body)", background: "#f8fafc", color: "#0f172a" }}>

      {/* ── NAVBAR ── */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        background: "rgba(15,23,42,0.97)", backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(56,189,248,0.15)",
      }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{
              width: 34, height: 34, borderRadius: 8,
              background: "linear-gradient(135deg,#38bdf8,#0ea5e9)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 16,
            }}>📹</div>
            <span style={{ fontFamily: "var(--font-display)", color: "#38bdf8", fontSize: 18, letterSpacing: 1 }}>VisionCam</span>
          </div>
          <div style={{ display: "flex", gap: 32, alignItems: "center" }}>
            {["Fonctionnalités", "Détection", "Alertes", "Tarifs"].map(l => (
              <a key={l} href="#" style={{ color: "#94a3b8", fontSize: 14, textDecoration: "none", transition: "color .2s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#38bdf8")}
                onMouseLeave={e => (e.currentTarget.style.color = "#94a3b8")}>{l}</a>
            ))}
            <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
              <button data-cal-link="wikolabs-team/30min" data-cal-namespace="wk30min" data-cal-config='{"layout":"month_view"}' type="button" target="_blank" rel="noopener noreferrer"
                style={{
                  background: "#38bdf8", color: "#0f172a", padding: "8px 20px",
                  borderRadius: 6, fontSize: 14, fontWeight: 700, textDecoration: "none",
                  fontFamily: "var(--font-display)", letterSpacing: .5,
                }}>📅 Réserver un créneau →</button>
              <a href="https://wa.me/261386626100?text=Bonjour%2C%20je%20souhaite%20discuter%20de%20VisionCam%20avec%20Wikolabs." target="_blank" rel="noopener noreferrer"
                style={{
                  background: "#25d366", borderColor: "#25d366", color: "#fff", padding: "8px 20px",
                  borderRadius: 6, fontSize: 14, fontWeight: 700, textDecoration: "none",
                  fontFamily: "var(--font-display)", letterSpacing: .5,
                }}>💬 WhatsApp →</a>
            </div>
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section style={{
        background: "linear-gradient(160deg,#0f172a 0%,#0c2340 60%,#0f172a 100%)",
        paddingTop: 120, paddingBottom: 80, minHeight: "100vh",
        display: "flex", alignItems: "center",
      }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", width: "100%" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>

            {/* Left copy */}
            <div>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "rgba(56,189,248,0.1)", border: "1px solid rgba(56,189,248,0.3)",
                borderRadius: 20, padding: "6px 16px", marginBottom: 24,
              }}>
                <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#38bdf8", display: "inline-block" }}></span>
                <span style={{ color: "#38bdf8", fontSize: 13, fontWeight: 600 }}>Analyse vidéo IA en temps réel</span>
              </div>
              <h1 style={{
                fontFamily: "var(--font-display)", color: "#f1f5f9",
                fontSize: "clamp(28px,4vw,52px)", lineHeight: 1.15, marginBottom: 20, margin: "0 0 20px",
              }}>
                Surveillance<br />
                <span style={{ color: "#38bdf8" }}>intelligente</span>
              </h1>
              <p style={{ color: "#94a3b8", fontSize: 18, lineHeight: 1.7, marginBottom: 32, maxWidth: 480 }}>
                99.7% de précision, zéro faux positif. Branchez l'IA sur vos caméras existantes
                et détectez intrusions, incendies, plaques d'immatriculation — en moins de 300ms.
              </p>
              <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
                  <button data-cal-link="wikolabs-team/30min" data-cal-namespace="wk30min" data-cal-config='{"layout":"month_view"}' type="button" target="_blank" rel="noopener noreferrer"
                    style={{
                      background: "#38bdf8", color: "#0f172a", padding: "14px 32px",
                      borderRadius: 8, fontSize: 16, fontWeight: 700, textDecoration: "none",
                      fontFamily: "var(--font-display)", letterSpacing: .5,
                      boxShadow: "0 0 32px rgba(56,189,248,0.35)",
                    }}>📅 Réserver un créneau →</button>
                  <a href="https://wa.me/261386626100?text=Bonjour%2C%20je%20souhaite%20discuter%20de%20VisionCam%20avec%20Wikolabs." target="_blank" rel="noopener noreferrer"
                    style={{
                      background: "#25d366", borderColor: "#25d366", color: "#fff", padding: "14px 32px",
                      borderRadius: 8, fontSize: 16, fontWeight: 700, textDecoration: "none",
                      fontFamily: "var(--font-display)", letterSpacing: .5,
                      boxShadow: "0 0 32px rgba(56,189,248,0.35)",
                    }}>💬 WhatsApp →</a>
                </div>
                <a href="#features" style={{
                  border: "1px solid rgba(56,189,248,0.4)", color: "#38bdf8",
                  padding: "14px 28px", borderRadius: 8, fontSize: 14, textDecoration: "none",
                }}>Voir les fonctionnalités →</a>
              </div>
              {/* Trust badges */}
              <div style={{ display: "flex", gap: 24, marginTop: 40, flexWrap: "wrap" }}>
                {[["99.7%", "Précision"], ["−94%", "Faux positifs"], ["0.3s", "Temps réponse"]].map(([v, l]) => (
                  <div key={l} style={{ textAlign: "center" }}>
                    <div style={{ fontFamily: "var(--font-display)", color: "#38bdf8", fontSize: 22, fontWeight: 700 }}>{v}</div>
                    <div style={{ color: "#64748b", fontSize: 12 }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — CCTV grid mockup */}
            <div style={{
              background: "#0a0f1a", borderRadius: 16, border: "1px solid rgba(56,189,248,0.2)",
              padding: 16, boxShadow: "0 0 60px rgba(56,189,248,0.08)",
            }}>
              {/* Header bar */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
                <span style={{ color: "#38bdf8", fontSize: 12, fontFamily: "var(--font-display)", letterSpacing: 1 }}>● LIVE MONITORING</span>
                <span style={{ color: "#64748b", fontSize: 11 }}>26 mai 2026 — 14:32:07</span>
              </div>

              {/* 2×2 camera grid */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 12 }}>
                {/* CAM-01: green bounding box */}
                <div style={{ background: "#0d1424", borderRadius: 8, aspectRatio: "16/9", position: "relative", overflow: "hidden", border: "1px solid #1e293b" }}>
                  <div style={{ position: "absolute", top: 6, left: 6, color: "#94a3b8", fontSize: 9, fontFamily: "var(--font-display)" }}>CAM-01 · Entrée principale</div>
                  {/* Fake scene elements */}
                  <div style={{ position: "absolute", bottom: "25%", left: "30%", width: "28%", height: "45%",
                    border: "2px solid #22c55e", borderRadius: 3 }}>
                    <div style={{ position: "absolute", top: -18, left: 0, background: "#22c55e", color: "#000", fontSize: 8,
                      padding: "1px 5px", borderRadius: 2, whiteSpace: "nowrap", fontWeight: 700 }}>Personne autorisée ✓</div>
                  </div>
                  <div style={{ position: "absolute", bottom: 6, right: 6, background: "rgba(34,197,94,0.15)",
                    border: "1px solid #22c55e", borderRadius: 3, padding: "2px 6px", color: "#22c55e", fontSize: 9 }}>NORMAL</div>
                </div>

                {/* CAM-02 */}
                <div style={{ background: "#0d1424", borderRadius: 8, aspectRatio: "16/9", position: "relative", overflow: "hidden", border: "1px solid #1e293b" }}>
                  <div style={{ position: "absolute", top: 6, left: 6, color: "#94a3b8", fontSize: 9, fontFamily: "var(--font-display)" }}>CAM-02 · Parking ouest</div>
                  {/* car-like shape */}
                  <div style={{ position: "absolute", bottom: "20%", left: "20%", width: "35%", height: "25%",
                    border: "1px solid #475569", borderRadius: 3, background: "rgba(71,85,105,0.3)" }}></div>
                  <div style={{ position: "absolute", bottom: 6, right: 6, background: "rgba(56,189,248,0.1)",
                    border: "1px solid #38bdf8", borderRadius: 3, padding: "2px 6px", color: "#38bdf8", fontSize: 9 }}>2 véhicules</div>
                </div>

                {/* CAM-03: red pulsing intrusion */}
                <div style={{
                  background: "#0d1424", borderRadius: 8, aspectRatio: "16/9", position: "relative", overflow: "hidden",
                  border: "2px solid #ef4444",
                  animation: "pulse-border 1.2s ease-in-out infinite",
                }}>
                  <style>{`@keyframes pulse-border{0%,100%{box-shadow:0 0 0 0 rgba(239,68,68,0.7)}50%{box-shadow:0 0 0 6px rgba(239,68,68,0)}}`}</style>
                  <div style={{ position: "absolute", top: 6, left: 6, color: "#fca5a5", fontSize: 9, fontFamily: "var(--font-display)" }}>CAM-03 · Zone restreinte</div>
                  <div style={{ position: "absolute", top: "20%", left: "15%", width: "32%", height: "55%",
                    border: "2px solid #ef4444", borderRadius: 3 }}>
                    <div style={{ position: "absolute", top: -18, left: 0, background: "#ef4444", color: "#fff", fontSize: 8,
                      padding: "1px 5px", borderRadius: 2, whiteSpace: "nowrap", fontWeight: 700 }}>⚠ Intrusion détectée</div>
                  </div>
                  <div style={{ position: "absolute", bottom: 6, right: 6, background: "rgba(239,68,68,0.2)",
                    border: "1px solid #ef4444", borderRadius: 3, padding: "2px 6px", color: "#fca5a5", fontSize: 9 }}>ALERTE</div>
                </div>

                {/* CAM-04 */}
                <div style={{ background: "#0d1424", borderRadius: 8, aspectRatio: "16/9", position: "relative", overflow: "hidden", border: "1px solid #1e293b" }}>
                  <div style={{ position: "absolute", top: 6, left: 6, color: "#94a3b8", fontSize: 9, fontFamily: "var(--font-display)" }}>CAM-04 · Hall accueil</div>
                  {/* crowd dots */}
                  {[{l:"20%",b:"30%"},{l:"35%",b:"35%"},{l:"50%",b:"28%"},{l:"42%",b:"40%"},{l:"28%",b:"42%"}].map((p,i)=>(
                    <div key={i} style={{ position:"absolute", bottom:p.b, left:p.l, width:8, height:14,
                      background:"rgba(148,163,184,0.4)", borderRadius:"50% 50% 40% 40%", border:"1px solid #475569" }}></div>
                  ))}
                  <div style={{ position: "absolute", bottom: 6, right: 6, background: "rgba(251,191,36,0.1)",
                    border: "1px solid #fbbf24", borderRadius: 3, padding: "2px 6px", color: "#fbbf24", fontSize: 9 }}>Densité: 5 pers.</div>
                </div>
              </div>

              {/* Sidebar stats + timeline */}
              <div style={{ background: "#060d18", borderRadius: 8, padding: 12, border: "1px solid #1e293b" }}>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 8, marginBottom: 10 }}>
                  {[
                    { label: "Alertes actives", value: "1", color: "#ef4444" },
                    { label: "Objets détectés", value: "7", color: "#38bdf8" },
                    { label: "Temps réponse", value: "0.3s", color: "#22c55e" },
                    { label: "Caméras actives", value: "4/4", color: "#a78bfa" },
                  ].map(({ label, value, color }) => (
                    <div key={label} style={{ textAlign: "center", background: "#0a1020", borderRadius: 6, padding: "6px 4px" }}>
                      <div style={{ color, fontFamily: "var(--font-display)", fontSize: 16, fontWeight: 700 }}>{value}</div>
                      <div style={{ color: "#475569", fontSize: 9, marginTop: 2 }}>{label}</div>
                    </div>
                  ))}
                </div>
                {/* Timeline */}
                <div style={{ fontSize: 10, color: "#64748b" }}>
                  {[
                    { t: "14:32:07", e: "⚠ Intrusion — CAM-03 Zone restreinte", c: "#fca5a5" },
                    { t: "14:31:44", e: "✓ Plaque LM-349-FR identifiée — CAM-02", c: "#86efac" },
                    { t: "14:30:12", e: "ℹ Densité élevée détectée — CAM-04", c: "#fde68a" },
                    { t: "14:28:55", e: "✓ Accès autorisé — CAM-01", c: "#86efac" },
                  ].map(({ t, e, c }) => (
                    <div key={t} style={{ display: "flex", gap: 8, padding: "3px 0", borderBottom: "1px solid #0f172a", alignItems: "center" }}>
                      <span style={{ color: "#475569", fontFamily: "var(--font-display)", minWidth: 52 }}>{t}</span>
                      <span style={{ color: c }}>{e}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section id="features" style={{ padding: "96px 24px", background: "#f8fafc" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <div style={{ color: "#38bdf8", fontSize: 13, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 12 }}>Fonctionnalités</div>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(24px,3vw,40px)", color: "#0f172a", margin: 0 }}>
              Une IA qui voit tout,<br />
              <span style={{ color: "#38bdf8" }}>en temps réel</span>
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 32 }}>
            {[
              {
                icon: "🔌",
                title: "Plug & play sur vos caméras",
                desc: "Compatible RTSP, ONVIF et toutes caméras IP. Aucun remplacement matériel. Connectez VisionCam à votre infrastructure existante en moins de 30 minutes.",
                bullets: ["Support RTSP / ONVIF / HLS", "NVR et DVR compatibles", "Installation sans interruption de service"],
              },
              {
                icon: "🎯",
                title: "Détection multi-scénarios",
                desc: "Un seul flux, des dizaines de cas d'usage. L'IA analyse chaque frame pour détecter simultanément plusieurs types d'événements, sans config supplémentaire.",
                bullets: ["Intrusion & périmètre", "Incendie & fumée", "Plaques d'immatriculation", "Oubli d'objet & foule"],
              },
              {
                icon: "🔔",
                title: "Alertes temps réel",
                desc: "Dès qu'un événement est détecté, votre équipe est notifiée en moins d'une seconde avec capture vidéo, horodatage et niveau de confiance.",
                bullets: ["Slack, Teams, SMS, email", "Webhook configurable", "Capture vidéo de l'incident", "Tableau de bord centralisé"],
              },
            ].map(({ icon, title, desc, bullets }) => (
              <div key={title} style={{
                background: "#fff", borderRadius: 16, padding: 32,
                border: "1px solid #e2e8f0",
                boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
                transition: "transform .2s, box-shadow .2s",
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 8px 30px rgba(56,189,248,0.12)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 1px 3px rgba(0,0,0,0.06)"; }}>
                <div style={{ fontSize: 36, marginBottom: 16 }}>{icon}</div>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: 17, color: "#0f172a", marginBottom: 12 }}>{title}</h3>
                <p style={{ color: "#64748b", lineHeight: 1.7, fontSize: 14, marginBottom: 16 }}>{desc}</p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {bullets.map(b => (
                    <li key={b} style={{ display: "flex", alignItems: "center", gap: 8, color: "#475569", fontSize: 13, marginBottom: 6 }}>
                      <span style={{ color: "#38bdf8", fontWeight: 700 }}>→</span> {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DETECTION SCENARIOS ── */}
      <section style={{ padding: "80px 24px", background: "#0f172a" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div style={{ color: "#38bdf8", fontSize: 13, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 12 }}>Scénarios de détection</div>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(22px,3vw,36px)", color: "#f1f5f9", margin: 0 }}>
              Entraîné pour les <span style={{ color: "#38bdf8" }}>situations critiques</span>
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
            {[
              { emoji: "🚨", label: "Intrusion périmétrique", conf: "99.4%", color: "#ef4444" },
              { emoji: "🔥", label: "Incendie & fumée", conf: "99.1%", color: "#f97316" },
              { emoji: "🚗", label: "Lecture de plaques (LPR)", conf: "99.8%", color: "#38bdf8" },
              { emoji: "👥", label: "Densité de foule", conf: "98.7%", color: "#a78bfa" },
              { emoji: "📦", label: "Objet abandonné", conf: "97.9%", color: "#fbbf24" },
              { emoji: "🏃", label: "Comportement anormal", conf: "97.2%", color: "#22c55e" },
            ].map(({ emoji, label, conf, color }) => (
              <div key={label} style={{
                background: "#0c1a2e", borderRadius: 12, padding: "24px 20px",
                border: `1px solid ${color}30`, display: "flex", alignItems: "center", gap: 16,
              }}>
                <div style={{ fontSize: 28, flexShrink: 0 }}>{emoji}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ color: "#e2e8f0", fontSize: 14, fontWeight: 600, marginBottom: 4 }}>{label}</div>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <div style={{ height: 4, flex: 1, background: "#1e293b", borderRadius: 2, overflow: "hidden" }}>
                      <div style={{ height: "100%", background: color, width: conf, borderRadius: 2 }}></div>
                    </div>
                    <span style={{ color, fontSize: 12, fontFamily: "var(--font-display)", minWidth: 36 }}>{conf}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS / ROI ── */}
      <section style={{ padding: "96px 24px", background: "#f0f9ff" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <div style={{ color: "#38bdf8", fontSize: 13, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 12 }}>Résultats mesurés</div>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(22px,3vw,38px)", color: "#0f172a", marginBottom: 64 }}>
            Des chiffres qui parlent d'eux-mêmes
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 32, marginBottom: 48 }}>
            {[
              { value: "99.7%", label: "de précision de détection", sub: "sur 10 millions d'événements analysés" },
              { value: "−94%", label: "de faux positifs", sub: "vs systèmes de détection de mouvement classiques" },
              { value: "0", label: "hardware supplémentaire requis", sub: "fonctionne sur vos caméras IP existantes" },
            ].map(({ value, label, sub }) => (
              <div key={value} style={{
                background: "#fff", borderRadius: 16, padding: "40px 24px",
                border: "1px solid #bae6fd", boxShadow: "0 2px 12px rgba(56,189,248,0.08)",
              }}>
                <div style={{ fontFamily: "var(--font-display)", color: "#38bdf8", fontSize: "clamp(32px,4vw,52px)", fontWeight: 700, lineHeight: 1 }}>{value}</div>
                <div style={{ color: "#0f172a", fontWeight: 700, fontSize: 15, marginTop: 12, marginBottom: 8 }}>{label}</div>
                <div style={{ color: "#64748b", fontSize: 13, lineHeight: 1.5 }}>{sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section style={{ padding: "80px 24px", background: "#fff" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div style={{ color: "#38bdf8", fontSize: 13, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 12 }}>Mise en service</div>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(22px,3vw,36px)", color: "#0f172a", margin: 0 }}>
              Opérationnel en <span style={{ color: "#38bdf8" }}>30 minutes</span>
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 24 }}>
            {[
              { n: "01", t: "Connexion flux", d: "Entrez l'URL RTSP ou activez la découverte ONVIF" },
              { n: "02", t: "Configuration des zones", d: "Dessinez vos zones de détection sur l'image" },
              { n: "03", t: "Choix des scénarios", d: "Sélectionnez les types d'alertes souhaités" },
              { n: "04", t: "Go live", d: "L'IA analyse vos flux et envoie les alertes en temps réel" },
            ].map(({ n, t, d }) => (
              <div key={n} style={{ textAlign: "center" }}>
                <div style={{
                  width: 56, height: 56, borderRadius: "50%",
                  background: "linear-gradient(135deg,#38bdf8,#0ea5e9)", color: "#0f172a",
                  fontFamily: "var(--font-display)", fontSize: 18, fontWeight: 700,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  margin: "0 auto 16px",
                }}>{n}</div>
                <div style={{ fontWeight: 700, color: "#0f172a", marginBottom: 8, fontSize: 14 }}>{t}</div>
                <div style={{ color: "#64748b", fontSize: 13, lineHeight: 1.6 }}>{d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA SECTION ── */}
      <section style={{
        padding: "100px 24px",
        background: "linear-gradient(135deg,#0f172a 0%,#0c2340 100%)",
        textAlign: "center",
      }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <div style={{ fontSize: 48, marginBottom: 20 }}>📹</div>
          <h2 style={{ fontFamily: "var(--font-display)", color: "#f1f5f9", fontSize: "clamp(24px,3vw,42px)", marginBottom: 16 }}>
            Vos caméras méritent mieux<br />
            <span style={{ color: "#38bdf8" }}>qu'une simple image</span>
          </h2>
          <p style={{ color: "#94a3b8", fontSize: 18, lineHeight: 1.7, marginBottom: 40, maxWidth: 500, margin: "0 auto 40px" }}>
            Transformez votre infrastructure de surveillance existante en système d'intelligence artificielle opérationnel dès aujourd'hui.
          </p>
          <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
            <button data-cal-link="wikolabs-team/30min" data-cal-namespace="wk30min" data-cal-config='{"layout":"month_view"}' type="button" target="_blank" rel="noopener noreferrer"
              style={{
                display: "inline-block", background: "#38bdf8", color: "#0f172a",
                padding: "18px 48px", borderRadius: 10, fontSize: 17, fontWeight: 700,
                textDecoration: "none", fontFamily: "var(--font-display)", letterSpacing: .5,
                boxShadow: "0 0 48px rgba(56,189,248,0.4)",
              }}>📅 Réserver un créneau →</button>
            <a href="https://wa.me/261386626100?text=Bonjour%2C%20je%20souhaite%20discuter%20de%20VisionCam%20avec%20Wikolabs." target="_blank" rel="noopener noreferrer"
              style={{
                display: "inline-block", background: "#25d366", borderColor: "#25d366", color: "#fff",
                padding: "18px 48px", borderRadius: 10, fontSize: 17, fontWeight: 700,
                textDecoration: "none", fontFamily: "var(--font-display)", letterSpacing: .5,
                boxShadow: "0 0 48px rgba(56,189,248,0.4)",
              }}>💬 WhatsApp →</a>
          </div>
          <div style={{ color: "#475569", fontSize: 13, marginTop: 20 }}>
            Réponse sous 24h · Démo sur vos propres flux vidéo · Sans engagement
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ background: "#060d18", padding: "32px 24px", borderTop: "1px solid #1e293b" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ fontFamily: "var(--font-display)", color: "#38bdf8", fontSize: 16, letterSpacing: 1 }}>VisionCam</span>
            <span style={{ color: "#334155", fontSize: 13 }}>— Un produit Wikolabs</span>
          </div>
          <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
            {["Fonctionnalités", "Documentation", "Confidentialité", "CGU"].map(l => (
              <a key={l} href="#" style={{ color: "#475569", fontSize: 13, textDecoration: "none" }}>{l}</a>
            ))}
          </div>
          <div style={{ color: "#334155", fontSize: 13 }}>© 2025 VisionCam — Un produit Wikolabs</div>
        </div>
        <div style={{ color: "#475569", fontSize: 13, textAlign: "center", marginTop: 16, display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <a href="mailto:team@wikolabs.com" style={{ color: "#475569", textDecoration: "none" }}>team@wikolabs.com</a>
          <span>·</span>
          <a href="tel:+261386626100" style={{ color: "#475569", textDecoration: "none" }}>+261 38 66 261 00</a>
          <span>·</span>
          <button data-cal-link="wikolabs-team/30min" data-cal-namespace="wk30min" data-cal-config='{"layout":"month_view"}' type="button" target="_blank" rel="noopener noreferrer" style={{ color: "#475569", textDecoration: "none" }} style={{cursor:"pointer",background:"none",border:"none",padding:0,font:"inherit",color:"inherit",textDecoration:"none"}}>Prendre RDV</button>
        </div>
      </footer>
    </div>
  );
}
