import styles from "@/app/tasarim-onizleme/page.module.css";

export default function Typography() {
  return (
    <section className={`${styles.section} ${styles.sectionAlt}`}>
      <div className={styles.container}>
        <span className={styles.sectionKicker}>Tipografi</span>
        <h2 className={styles.sectionHeading}>Tipografi</h2>
        <p className={styles.sectionIntro}>
          Başlıklar için Lora, gövde ve arayüz için Manrope kullanılmıştır. İkisi
          de bu sayfaya özeldir, genel tasarıma henüz uygulanmamıştır.
        </p>
        <div className={styles.typeGrid}>
          <div className={styles.typeRow}>
            <span className={styles.typeLabel}>Display</span>
            <p className={styles.display}>Sakin ve güvenilir bir ilk izlenim</p>
          </div>
          <div className={styles.typeRow}>
            <span className={styles.typeLabel}>H1</span>
            <p className={styles.h1}>Konuşma ve dil gelişimi için destek</p>
          </div>
          <div className={styles.typeRow}>
            <span className={styles.typeLabel}>H2</span>
            <p className={styles.h2}>Bölüm başlığı örneği</p>
          </div>
          <div className={styles.typeRow}>
            <span className={styles.typeLabel}>H3</span>
            <p className={styles.h3}>Alt başlık örneği</p>
          </div>
          <div className={styles.typeRow}>
            <span className={styles.typeLabel}>Lead</span>
            <p className={styles.lead}>
              Bilgiyi taranabilir hale getiren, sakin bir giriş paragrafı örneği.
            </p>
          </div>
          <div className={styles.typeRow}>
            <span className={styles.typeLabel}>Body</span>
            <p className={styles.bodyText}>
              Gövde metni için tasarlanan örnek paragraf; okunabilirlik ve ferahlık
              önceliklidir.
            </p>
          </div>
          <div className={styles.typeRow}>
            <span className={styles.typeLabel}>Küçük Metin</span>
            <p className={styles.smallText}>Destekleyici küçük metin örneği.</p>
          </div>
          <div className={styles.typeRow}>
            <span className={styles.typeLabel}>Buton Etiketi</span>
            <p className={styles.buttonLabelSample}>RANDEVU OLUŞTUR</p>
          </div>
          <div className={styles.typeRow}>
            <span className={styles.typeLabel}>Türkçe Karakterler</span>
            <p className={styles.bodyText}>Ç ç Ğ ğ İ ı Ö ö Ş ş Ü ü</p>
          </div>
        </div>
      </div>
    </section>
  );
}
