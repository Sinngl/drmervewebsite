import styles from "@/app/tasarim-onizleme/page.module.css";

const facts = [
  "Yurt dışında yaşayan aileler önemli bir hedef kitledir.",
  "Çift dilli dil gelişimi için ayrı bir içerik alanı bulunur.",
  "Online uygunluk, ilk görüşmenin ardından birlikte değerlendirilir.",
];

export default function InternationalBand() {
  return (
    <section className={`${styles.section} ${styles.sectionAlt}`}>
      <div className={styles.container}>
        <span className={styles.sectionKicker}>Yurt Dışındaki Aileler</span>
        <h2 className={styles.sectionHeading}>Yurt Dışındaki Aileler</h2>
        <div className={styles.intlBand}>
          <div>
            <h3 className={styles.h3}>Uzakta olmak, ilgisiz kalmak anlamına gelmez</h3>
            <ul className={styles.intlList}>
              {facts.map((fact) => (
                <li key={fact} className={styles.intlListItem}>
                  <span className={styles.intlMarker} aria-hidden="true">
                    •
                  </span>
                  <span>{fact}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <span className={styles.draftTag}>
              Taslak metin — profesyonel onay bekliyor
            </span>
            <p className={styles.bodyText}>
              Bu bandın ayrıntılı metni henüz yazılmamıştır; yalnızca onaylı
              iş kararlarına dayanan üç madde gösterilmektedir. Ücretli
              reklam burada ele alınmamıştır.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
