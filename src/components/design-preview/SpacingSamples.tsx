import styles from "@/app/tasarim-onizleme/page.module.css";

const spacingSteps = [8, 16, 24, 40, 64];

export default function SpacingSamples() {
  return (
    <section className={`${styles.section} ${styles.sectionAlt}`}>
      <div className={styles.container}>
        <span className={styles.sectionKicker}>Boşluk, Köşe ve Gölge</span>
        <h2 className={styles.sectionHeading}>Boşluk, Köşe Yarıçapı ve Gölge</h2>
        <p className={styles.sectionIntro}>
          Bol beyaz alan, ölçülü köşe yarıçapı, ince kenarlıklar ve çok sınırlı
          gölge kullanımı. Aşırı yuvarlatılmış &ldquo;oyuncak&rdquo; kartlardan kaçınılır.
        </p>

        <p className={styles.smallText} style={{ marginBottom: 8 }}>
          Boşluk ölçeği (px)
        </p>
        <div className={styles.sampleRow} style={{ marginBottom: 32 }}>
          {spacingSteps.map((step) => (
            <div
              key={step}
              className={styles.spacingBox}
              style={{ width: step, height: step }}
              title={`${step}px`}
            />
          ))}
        </div>

        <p className={styles.smallText} style={{ marginBottom: 8 }}>
          Köşe yarıçapı
        </p>
        <div className={styles.sampleRow} style={{ marginBottom: 32 }}>
          <div className={styles.radiusBox} style={{ borderRadius: 8 }}>
            8px
          </div>
          <div className={styles.radiusBox} style={{ borderRadius: 14 }}>
            14px
          </div>
        </div>

        <p className={styles.smallText} style={{ marginBottom: 8 }}>
          Gölge
        </p>
        <div className={styles.sampleRow}>
          <div className={`${styles.shadowBox} ${styles.shadowNone}`}>Yok</div>
          <div className={`${styles.shadowBox} ${styles.shadowSubtle}`}>Hafif</div>
          <div className={`${styles.shadowBox} ${styles.shadowMedium}`}>Orta</div>
        </div>
      </div>
    </section>
  );
}
