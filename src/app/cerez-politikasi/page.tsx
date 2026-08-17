import type { Metadata } from "next";
import RoutePlaceholder from "@/components/development/RoutePlaceholder";

// Temporary development-environment metadata — see docs/PROJECT_STATUS.md.
export const metadata: Metadata = {
  title: "Çerez Politikası | Geliştirme Ortamı",
  description: "Çerez politikası sayfası geliştirme ortamı.",
};

export default function Page() {
  return (
    <RoutePlaceholder
      title="Çerez Politikası"
      routeType="Yasal Sayfa — taslak, henüz yayımlanmadı"
    />
  );
}
