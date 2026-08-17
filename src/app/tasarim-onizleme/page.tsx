import type { Metadata } from "next";
import { Lora, Manrope } from "next/font/google";
import styles from "./page.module.css";
import IntroBanner from "@/components/design-preview/IntroBanner";
import ColorPalette from "@/components/design-preview/ColorPalette";
import Typography from "@/components/design-preview/Typography";
import ButtonsAndLinks from "@/components/design-preview/ButtonsAndLinks";
import HeaderConcept from "@/components/design-preview/HeaderConcept";
import HeroConcept from "@/components/design-preview/HeroConcept";
import ServiceCards from "@/components/design-preview/ServiceCards";
import InternationalBand from "@/components/design-preview/InternationalBand";
import ProcessPreview from "@/components/design-preview/ProcessPreview";
import FormControls from "@/components/design-preview/FormControls";
import ImageDirection from "@/components/design-preview/ImageDirection";
import SpacingSamples from "@/components/design-preview/SpacingSamples";

// Route-scoped only — not applied to the root layout or any other route.
// subsets include latin-ext for Turkish character support (Ç ç Ğ ğ İ ı Ö ö Ş ş Ü ü).
const lora = Lora({
  subsets: ["latin", "latin-ext"],
  variable: "--font-lora",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin", "latin-ext"],
  variable: "--font-manrope",
  display: "swap",
});

/**
 * Temporary internal design-review route. Not part of the approved public
 * information architecture — see docs/INFORMATION_ARCHITECTURE.md and
 * docs/VISUAL_DIRECTION.md. Explicit route-level noindex/nofollow in
 * addition to the existing global temporary noindex in the root layout,
 * so this route stays non-indexable even if the global setting is later
 * removed for approved public routes.
 */
export const metadata: Metadata = {
  title: "Tasarım Önizlemesi — Sıcak Klinik Editoryal | Geliştirme Ortamı",
  description:
    "Dahili tasarım incelemesi — henüz onaylanmamış görsel yön önizlemesi.",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function Page() {
  return (
    <div className={`${styles.root} ${lora.variable} ${manrope.variable}`}>
      <IntroBanner />
      <ColorPalette />
      <Typography />
      <ButtonsAndLinks />
      <HeaderConcept />
      <HeroConcept />
      <ServiceCards />
      <InternationalBand />
      <ProcessPreview />
      <FormControls />
      <ImageDirection />
      <SpacingSamples />
    </div>
  );
}
