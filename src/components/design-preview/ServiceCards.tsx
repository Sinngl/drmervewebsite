import styles from "@/app/tasarim-onizleme/page.module.css";
import { getServiceBySlug } from "@/content/services";

const childService = getServiceBySlug("kekemelik");
const adultService = getServiceBySlug("afazi");
const assessmentService = getServiceBySlug("degerlendirme-sureci");

interface CardData {
  readonly category: string;
  readonly title: string;
}

const cards: readonly CardData[] = [
  { category: "Çocuk Odaklı", title: childService?.title ?? "" },
  { category: "Yetişkin Odaklı", title: adultService?.title ?? "" },
  { category: "Değerlendirme / Süreç", title: assessmentService?.title ?? "" },
  { category: "Yurt Dışındaki Aileler", title: "Yurt Dışındaki Aileler" },
].filter((card) => card.title.length > 0);

export default function ServiceCards() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <span className={styles.sectionKicker}>Hizmet Kartı Sistemi</span>
        <h2 className={styles.sectionHeading}>Hizmet Kartı Sistemi</h2>
        <p className={styles.sectionIntro}>
          Başlıklar onaylı hizmet kayıt defterinden alınmıştır. Belirti,
          tanı veya tedavi açıklaması içermez.
        </p>
        <div className={styles.cardGrid}>
          {cards.map((card) => (
            <div className={styles.card} key={card.title} tabIndex={0}>
              <span className={styles.cardCategory}>{card.category}</span>
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <p className={styles.cardSupport}>
                İçerik hazırlanıyor — profesyonel onay bekliyor.
              </p>
              <span className={styles.cardLink}>
                Devamını gör
                <span className={styles.cardLinkArrow} aria-hidden="true">
                  →
                </span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
