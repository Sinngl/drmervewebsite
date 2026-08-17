import type { Metadata } from "next";
import RoutePlaceholder from "@/components/development/RoutePlaceholder";

// Temporary development-environment metadata — see docs/PROJECT_STATUS.md.
export const metadata: Metadata = {
  title: "Randevu Oluştur | Geliştirme Ortamı",
  description: "Randevu oluştur sayfası geliştirme ortamı.",
};

export default function Page() {
  return (
    <RoutePlaceholder title="Randevu Oluştur" routeType="Randevu (yakında)" />
  );
}
