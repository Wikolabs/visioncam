import type { Metadata } from "next";
import { Audiowide, Noto_Sans } from "next/font/google";
import "./globals.css";

const audiowide = Audiowide({ subsets: ["latin"], weight: ["400"], variable: "--font-display", display: "swap" });
const notoSans = Noto_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-body", display: "swap" });

export const metadata: Metadata = {
  title: "VisionCam — Vos caméras IP deviennent intelligentes",
  description: "Analyse vidéo IA sur flux RTSP — détection intrusion, comptage personnes, anomalie comportementale en temps réel.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${audiowide.variable} ${notoSans.variable}`}>
      <body style={{ fontFamily: "var(--font-body)", background: "#f8fafc" }}>{children}</body>
    </html>
  );
}
