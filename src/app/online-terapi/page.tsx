import type { Metadata } from "next";
import RoutePlaceholder from "@/components/development/RoutePlaceholder";

// Temporary development-environment metadata — see docs/PROJECT_STATUS.md.
export const metadata: Metadata = {
  title: "Online Terapi | Geliştirme Ortamı",
  description: "Online terapi sayfası geliştirme ortamı.",
};

export default function Page() {
  return <RoutePlaceholder title="Online Terapi" routeType="Bilgi Sayfası" />;
}
