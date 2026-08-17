import styles from "@/app/tasarim-onizleme/page.module.css";

const steps = [
  "İletişim",
  "İlk görüşme",
  "Uygunluğun birlikte değerlendirilmesi",
  "Planlama",
];

export default function ProcessPreview() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <span className={styles.sectionKicker}>Süreç Önizlemesi</span>
        <h2 className={styles.sectionHeading}>Süreç Önizlemesi</h2>
        <p className={styles.sectionIntro}>
          Bu bir arayüz/düzen önizlemesidir, nihai klinik süreç içeriği
          değildir. Taslak — profesyonel onay bekliyor.
        </p>
        <div className={styles.processWrap}>
          <span className={styles.processLineHorizontal} aria-hidden="true" />
          <span className={styles.processLineVertical} aria-hidden="true" />
          <ol className={styles.processList}>
            {steps.map((step, index) => (
              <li className={styles.processStep} key={step}>
                <span className={styles.processNumber}>{index + 1}</span>
                <p className={styles.processLabel}>{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
