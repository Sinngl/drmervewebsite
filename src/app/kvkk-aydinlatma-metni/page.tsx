import type { Metadata } from "next";
import RoutePlaceholder from "@/components/development/RoutePlaceholder";

// Temporary development-environment metadata — see docs/PROJECT_STATUS.md.
export const metadata: Metadata = {
  title: "KVKK Aydınlatma Metni | Geliştirme Ortamı",
  description: "KVKK aydınlatma metni sayfası geliştirme ortamı.",
};

export default function Page() {
  return (
    <RoutePlaceholder
      title="KVKK Aydınlatma Metni"
      routeType="Yasal Sayfa — taslak, henüz yayımlanmadı"
    />
  );
}
