import type { Metadata } from "next";
import { notFound } from "next/navigation";
import RoutePlaceholder from "@/components/development/RoutePlaceholder";
import { getServiceBySlug, services } from "@/content/services";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

// Temporary development-environment metadata — see docs/PROJECT_STATUS.md.
export async function generateMetadata(
  props: PageProps<"/calisma-alanlari/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Çalışma Alanı Bulunamadı | Geliştirme Ortamı",
      description: "Çalışma alanı sayfası geliştirme ortamı.",
    };
  }

  return {
    title: `${service.title} | Geliştirme Ortamı`,
    description: `${service.title} sayfası geliştirme ortamı.`,
  };
}

export default async function Page(
  props: PageProps<"/calisma-alanlari/[slug]">,
) {
  const { slug } = await props.params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return <RoutePlaceholder title={service.title} routeType="Hizmet Sayfası" />;
}
