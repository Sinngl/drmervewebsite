import type { Metadata } from "next";
import RoutePlaceholder from "@/components/development/RoutePlaceholder";

// Temporary development-environment metadata — see docs/PROJECT_STATUS.md.
export const metadata: Metadata = {
  title: "Ankara Yenimahalle | Geliştirme Ortamı",
  description: "Ankara Yenimahalle sayfası geliştirme ortamı.",
};

export default function Page() {
  return (
    <RoutePlaceholder title="Ankara Yenimahalle" routeType="Konum Sayfası" />
  );
}
