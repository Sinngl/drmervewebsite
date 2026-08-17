import type { Metadata } from "next";
import RoutePlaceholder from "@/components/development/RoutePlaceholder";

// Temporary development-environment metadata — see docs/PROJECT_STATUS.md.
export const metadata: Metadata = {
  title: "Gizlilik Politikası | Geliştirme Ortamı",
  description: "Gizlilik politikası sayfası geliştirme ortamı.",
};

export default function Page() {
  return (
    <RoutePlaceholder
      title="Gizlilik Politikası"
      routeType="Yasal Sayfa — taslak, henüz yayımlanmadı"
    />
  );
}
