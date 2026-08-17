import { services, type ServiceCategory } from "@/content/services";

export interface NavigationItem {
  readonly label: string;
  readonly href: string;
}

export interface ServiceNavigationGroup {
  readonly category: ServiceCategory;
  readonly label: string;
  readonly items: readonly NavigationItem[];
}

function freezeNavigationItem(item: NavigationItem): NavigationItem {
  return Object.freeze(item);
}

const primaryNavigationData = [
  { label: "Ana Sayfa", href: "/" },
  { label: "Çalışma Alanları", href: "/calisma-alanlari" },
  { label: "Online Terapi", href: "/online-terapi" },
  { label: "Yurt Dışındaki Aileler", href: "/yurt-disindaki-aileler" },
  { label: "Hakkımda", href: "/hakkimda" },
  { label: "Bilgi Merkezi", href: "/bilgi-merkezi" },
  { label: "İletişim", href: "/iletisim" },
] as const satisfies readonly NavigationItem[];

export const primaryNavigation: readonly NavigationItem[] = Object.freeze(
  primaryNavigationData.map(freezeNavigationItem),
);

const serviceNavigationGroupLabels = {
  "child-language-speech": "Çocuk Dil ve Konuşma Alanları",
  "adult-language-speech": "Yetişkin Dil ve Konuşma Alanları",
  "assessment-family-support": "Değerlendirme ve Aile Desteği",
} as const satisfies Record<ServiceCategory, string>;

const serviceNavigationCategoryOrder = [
  "child-language-speech",
  "adult-language-speech",
  "assessment-family-support",
] as const satisfies readonly ServiceCategory[];

const serviceNavigationData: readonly ServiceNavigationGroup[] =
  serviceNavigationCategoryOrder.map((category) => {
    const items: readonly NavigationItem[] = Object.freeze(
      services
        .filter((service) => service.category === category)
        .map((service) =>
          freezeNavigationItem({
            label: service.title,
            href: `/calisma-alanlari/${service.slug}`,
          }),
        ),
    );

    return Object.freeze({
      category,
      label: serviceNavigationGroupLabels[category],
      items,
    });
  });

export const serviceNavigation: readonly ServiceNavigationGroup[] =
  Object.freeze(serviceNavigationData);

/**
 * Reserved for the future "Randevu Oluştur" primary action.
 * Not rendered anywhere yet — routing target only, per docs/INFORMATION_ARCHITECTURE.md.
 */
export const appointmentAction: NavigationItem = freezeNavigationItem({
  label: "Randevu Oluştur",
  href: "/randevu",
});
