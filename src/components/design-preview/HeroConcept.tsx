import styles from "@/app/tasarim-onizleme/page.module.css";

const indicators = [
  "Yenimahalle'de yüz yüze",
  "Online görüşme seçeneği",
  "Yurt dışındaki aileler",
];

export default function HeroConcept() {
  return (
    <section className={`${styles.section} ${styles.sectionAlt}`}>
      <div className={styles.container}>
        <span className={styles.sectionKicker}>Ana Sayfa Açılış Alanı Konsepti</span>
        <h2 className={styles.sectionHeading} style={{ marginBottom: 24 }}>
          Ana Sayfa Açılış Alanı Konsepti
        </h2>

        <div className={styles.hero}>
          <div>
            <span className={styles.draftTag}>
              Taslak metin — profesyonel onay bekliyor
            </span>
            <span className={styles.heroEyebrow}>Ebeveynler için</span>
            <h3 className={styles.heroHeadline}>
              Çocuğunuzun dil ve konuşma gelişimi için sakin bir başlangıç
            </h3>
            <p className={styles.heroSupport}>
              Yüz yüze ve online görüşme seçenekleriyle, ailenizle birlikte
              uygun yolu değerlendiriyoruz.
            </p>
            <div className={styles.heroCtas}>
              <button type="button" className={styles.btnAppointment}>
                Randevu Oluştur
              </button>
              <button type="button" className={styles.btnSecondary}>
                Çalışma Alanlarını İncele
              </button>
            </div>
            <ul className={styles.heroIndicators}>
              {indicators.map((indicator) => (
                <li key={indicator} className={styles.heroIndicator}>
                  {indicator}
                </li>
              ))}
            </ul>
          </div>

          <div
            className={styles.heroPhotoPlaceholder}
            role="img"
            aria-label="Editoryal fotoğraf yönü için soyut yer tutucu — gerçek fotoğraf değildir"
          >
            <span className={styles.heroPhotoShapeA} aria-hidden="true" />
            <span className={styles.heroPhotoShapeB} aria-hidden="true" />
            <span className={styles.heroPhotoLabel}>
              Fotoğraf yönü: doğal ışık, sıcak ve gerçekçi ortam, samimi
              etkileşim — yer tutucu, gerçek fotoğraf değildir.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
