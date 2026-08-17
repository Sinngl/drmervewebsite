import type { Metadata } from "next";
import RoutePlaceholder from "@/components/development/RoutePlaceholder";

// Temporary development-environment metadata — see docs/PROJECT_STATUS.md.
export const metadata: Metadata = {
  title: "Yurt Dışındaki Aileler | Geliştirme Ortamı",
  description: "Yurt dışındaki aileler sayfası geliştirme ortamı.",
};

export default function Page() {
  return (
    <RoutePlaceholder
      title="Yurt Dışındaki Aileler"
      routeType="Bilgi Sayfası"
    />
  );
}
