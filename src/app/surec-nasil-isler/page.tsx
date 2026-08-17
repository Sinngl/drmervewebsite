import type { Metadata } from "next";
import RoutePlaceholder from "@/components/development/RoutePlaceholder";

// Temporary development-environment metadata — see docs/PROJECT_STATUS.md.
export const metadata: Metadata = {
  title: "Süreç Nasıl İşler | Geliştirme Ortamı",
  description: "Süreç nasıl işler sayfası geliştirme ortamı.",
};

export default function Page() {
  return (
    <RoutePlaceholder title="Süreç Nasıl İşler" routeType="Bilgi Sayfası" />
  );
}
