import styles from "@/app/tasarim-onizleme/page.module.css";

const preferred = [
  "Doğal ışık",
  "Sıcak ama gerçekçi ortamlar",
  "Samimi ve gerçek etkileşim",
  "Sade, dağınık olmayan kadraj",
  "Kapsayıcı yaş aralığı",
  "Metin için yer bırakan kompozisyon",
  "Mevcut olduğunda gerçek profesyonel fotoğraflar",
];

const avoid = [
  "Pozlanmış beyaz önlüklü fotoğraflar",
  "Sıkıntılı çocuk görselleri",
  "Abartılı duygu ifadeleri",
  "Karikatür ağız / konuşma balonu klişeleri",
  "Yanıltıcı öncesi/sonrası görselleri",
  "Garantili sonuç ima eden görseller",
  "Gerçek profesyonel gibi sunulan yapay zekâ görselleri",
];

export default function ImageDirection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <span className={styles.sectionKicker}>Görsel Yönü</span>
        <h2 className={styles.sectionHeading}>Görsel Yönü — Kullan / Kaçın</h2>
        <div className={styles.imageCompare}>
          <div className={styles.imageColumnPrefer}>
            <h3 className={styles.imageColumnTitle}>Tercih Edilen</h3>
            <ul className={styles.imageList}>
              {preferred.map((item) => (
                <li key={item} className={styles.imageListItem}>
                  <span className={styles.imageMarkerPrefer} aria-hidden="true">
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.imageColumnAvoid}>
            <h3 className={styles.imageColumnTitle}>Kaçınılması Gereken</h3>
            <ul className={styles.imageList}>
              {avoid.map((item) => (
                <li key={item} className={styles.imageListItem}>
                  <span className={styles.imageMarkerAvoid} aria-hidden="true">
                    ✕
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
