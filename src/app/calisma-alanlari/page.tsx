import type { Metadata } from "next";
import RoutePlaceholder from "@/components/development/RoutePlaceholder";

// Temporary development-environment metadata — see docs/PROJECT_STATUS.md.
export const metadata: Metadata = {
  title: "Çalışma Alanları | Geliştirme Ortamı",
  description: "Çalışma alanları sayfası geliştirme ortamı.",
};

export default function Page() {
  return (
    <RoutePlaceholder title="Çalışma Alanları" routeType="Hizmet Dizini" />
  );
}
