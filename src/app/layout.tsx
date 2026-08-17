import type { Metadata } from "next";
import "./globals.css";

// Temporary development-environment metadata — see docs/PROJECT_STATUS.md.
// Must be replaced with real SEO metadata once information architecture is approved.
export const metadata: Metadata = {
  title: "Dr. Merve Zeybek | Geliştirme Ortamı",
  description: "Dr. Merve Zeybek yeni web sitesi geliştirme ortamı.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="tr" className="h-full">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
