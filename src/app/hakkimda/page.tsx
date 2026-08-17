import type { Metadata } from "next";
import RoutePlaceholder from "@/components/development/RoutePlaceholder";

// Temporary development-environment metadata — see docs/PROJECT_STATUS.md.
export const metadata: Metadata = {
  title: "Hakkımda | Geliştirme Ortamı",
  description: "Hakkımda sayfası geliştirme ortamı.",
};

export default function Page() {
  return <RoutePlaceholder title="Hakkımda" routeType="Bilgi Sayfası" />;
}
