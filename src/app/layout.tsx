import type { Metadata } from "next";
import "./globals.css";

// Temporary development-environment metadata — see docs/PROJECT_STATUS.md.
// Must be replaced with real SEO metadata once information architecture is approved.
//
// robots below is temporary site-wide development/staging protection, not a
// production indexing decision. It must be replaced by route-appropriate
// indexing rules only after content, legal review and production approval.
// Legal placeholder routes (KVKK, gizlilik, çerez) must not become indexable
// merely because this global development setting is later removed — they
// require their own explicit, deliberate indexing decision at that time.
export const metadata: Metadata = {
  title: "Dr. Merve Zeybek | Geliştirme Ortamı",
  description: "Dr. Merve Zeybek yeni web sitesi geliştirme ortamı.",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="tr" className="h-full">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
