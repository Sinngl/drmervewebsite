import styles from "@/app/tasarim-onizleme/page.module.css";

export default function IntroBanner() {
  return (
    <>
      <div className={styles.banner}>
        <div className={styles.container}>
          <div className={styles.bannerRow}>
            <div className={styles.bannerTitleGroup}>
              <span className={styles.bannerEyebrow}>Tasarım Önizlemesi</span>
              <span className={styles.bannerTitle}>Sıcak Klinik Editoryal</span>
            </div>
            <p className={styles.bannerNotice}>
              Bu sayfa dahili bir tasarım incelemesidir. İçerik ve görsel kimlik
              henüz yayınlanmak üzere onaylanmamıştır.
            </p>
          </div>
        </div>
      </div>

      <section className={styles.section}>
        <div className={styles.container}>
          <span className={styles.sectionKicker}>Tasarım Yönü</span>
          <h2 className={styles.sectionHeading}>Neden bu yön?</h2>
          <p className={styles.sectionIntro}>
            Sıcak Klinik Editoryal; önce ebeveyni önceleyen, sakin ve profesyonel
            bir izlenim bırakmayı hedefler. Çocuk dostu ama çocuksu olmayan bir
            karaktere sahiptir; yetişkin ziyaretçileri de dışlamaz. Amaç, bilgiyi
            taranabilir hale getirerek karar verme yorgunluğunu azaltmaktır. Bu
            bölüm bir tasarım gerekçesidir, tıbbi bir içerik değildir.
          </p>
        </div>
      </section>
    </>
  );
}
