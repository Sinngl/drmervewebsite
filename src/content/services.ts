export type ServiceAudience = "child" | "adult" | "shared";

export type ServiceCategory =
  | "child-language-speech"
  | "adult-language-speech"
  | "assessment-family-support";

export type ServiceContentStatus = "pending-professional-content";

export interface Service {
  readonly slug: string;
  readonly title: string;
  readonly audience: ServiceAudience;
  readonly category: ServiceCategory;
  readonly contentStatus: ServiceContentStatus;
}

const servicesData = [
  {
    slug: "gelisimsel-dil-bozukluklari",
    title: "Gelişimsel Dil Bozuklukları",
    audience: "child",
    category: "child-language-speech",
    contentStatus: "pending-professional-content",
  },
  {
    slug: "gecikmis-dil-ve-konusma",
    title: "Gecikmiş Dil ve Konuşma",
    audience: "child",
    category: "child-language-speech",
    contentStatus: "pending-professional-content",
  },
  {
    slug: "artikulasyon-bozuklugu",
    title: "Artikülasyon Bozukluğu",
    audience: "child",
    category: "child-language-speech",
    contentStatus: "pending-professional-content",
  },
  {
    slug: "fonolojik-bozukluk",
    title: "Fonolojik Bozukluk",
    audience: "child",
    category: "child-language-speech",
    contentStatus: "pending-professional-content",
  },
  {
    slug: "cocukluk-cagi-apraksisi",
    title: "Çocukluk Çağı Apraksisi",
    audience: "child",
    category: "child-language-speech",
    contentStatus: "pending-professional-content",
  },
  {
    slug: "kekemelik",
    title: "Kekemelik",
    audience: "child",
    category: "child-language-speech",
    contentStatus: "pending-professional-content",
  },
  {
    slug: "hizli-bozuk-konusma",
    title: "Hızlı Bozuk Konuşma",
    audience: "child",
    category: "child-language-speech",
    contentStatus: "pending-professional-content",
  },
  {
    slug: "erken-okuryazarlik-becerileri",
    title: "Erken Okuryazarlık Becerileri",
    audience: "child",
    category: "child-language-speech",
    contentStatus: "pending-professional-content",
  },
  {
    slug: "cift-dilli-cocuklarda-dil-gelisimi",
    title: "Çift Dilli Çocuklarda Dil Gelişimi",
    audience: "child",
    category: "child-language-speech",
    contentStatus: "pending-professional-content",
  },
  {
    slug: "afazi",
    title: "Afazi",
    audience: "adult",
    category: "adult-language-speech",
    contentStatus: "pending-professional-content",
  },
  {
    slug: "yetiskinlerde-akici-konusma-guclukleri",
    title: "Yetişkinlerde Akıcı Konuşma Güçlükleri",
    audience: "adult",
    category: "adult-language-speech",
    contentStatus: "pending-professional-content",
  },
  {
    slug: "gelisimsel-degerlendirme",
    title: "Gelişimsel Değerlendirme",
    audience: "shared",
    category: "assessment-family-support",
    contentStatus: "pending-professional-content",
  },
  {
    slug: "degerlendirme-sureci",
    title: "Değerlendirme Süreci",
    audience: "shared",
    category: "assessment-family-support",
    contentStatus: "pending-professional-content",
  },
  {
    slug: "testler-ve-online-testler",
    title: "Testler ve Online Testler",
    audience: "shared",
    category: "assessment-family-support",
    contentStatus: "pending-professional-content",
  },
  {
    slug: "aile-egitimleri",
    title: "Aile Eğitimleri",
    audience: "shared",
    category: "assessment-family-support",
    contentStatus: "pending-professional-content",
  },
] as const satisfies readonly Service[];

const SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

function validateServiceSlugs(data: readonly Service[]): void {
  const seenSlugs = new Set<string>();

  for (const service of data) {
    if (!SLUG_PATTERN.test(service.slug)) {
      throw new Error(
        `Invalid service slug "${service.slug}": slugs must contain only ` +
          "lowercase ASCII letters, digits and single hyphens, and must " +
          "start and end with a letter or digit.",
      );
    }

    if (seenSlugs.has(service.slug)) {
      throw new Error(`Duplicate service slug "${service.slug}".`);
    }

    seenSlugs.add(service.slug);
  }
}

validateServiceSlugs(servicesData);

export const services: readonly Service[] = Object.freeze(
  servicesData.map((service) => Object.freeze(service)),
);

export type ServiceSlug = (typeof servicesData)[number]["slug"];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}
