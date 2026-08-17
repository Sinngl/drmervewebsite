import type { Metadata } from "next";
import RoutePlaceholder from "@/components/development/RoutePlaceholder";

// Temporary development-environment metadata — see docs/PROJECT_STATUS.md.
export const metadata: Metadata = {
  title: "Bilgi Merkezi | Geliştirme Ortamı",
  description: "Bilgi merkezi sayfası geliştirme ortamı.",
};

export default function Page() {
  return <RoutePlaceholder title="Bilgi Merkezi" routeType="İçerik Dizini" />;
}
