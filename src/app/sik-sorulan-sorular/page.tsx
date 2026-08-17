import type { Metadata } from "next";
import RoutePlaceholder from "@/components/development/RoutePlaceholder";

// Temporary development-environment metadata — see docs/PROJECT_STATUS.md.
export const metadata: Metadata = {
  title: "Sık Sorulan Sorular | Geliştirme Ortamı",
  description: "Sık sorulan sorular sayfası geliştirme ortamı.",
};

export default function Page() {
  return (
    <RoutePlaceholder title="Sık Sorulan Sorular" routeType="Bilgi Sayfası" />
  );
}
