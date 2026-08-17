import styles from "@/app/tasarim-onizleme/page.module.css";

export default function ButtonsAndLinks() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <span className={styles.sectionKicker}>Butonlar ve Bağlantılar</span>
        <h2 className={styles.sectionHeading}>Butonlar ve Bağlantılar</h2>
        <p className={styles.sectionIntro}>
          Hiçbir buton gerçek bir formu göndermez veya randevu oluşturmaz. Odak
          durumları klavye ile gezinme için görünür şekilde tasarlanmıştır.
        </p>
        <div className={styles.buttonRow}>
          <div>
            <button type="button" className={styles.btnPrimary}>
              Birincil Buton
            </button>
            <span className={styles.stateLabel}>hover / focus-visible aktif</span>
          </div>
          <div>
            <button type="button" className={styles.btnSecondary}>
              İkincil Buton
            </button>
            <span className={styles.stateLabel}>hover / focus-visible aktif</span>
          </div>
          <div>
            <a href="#tasarim-onizleme" className={styles.textLink}>
              Metin Bağlantısı
            </a>
            <span className={styles.stateLabel}>hover / focus-visible aktif</span>
          </div>
          <div>
            <button type="button" className={styles.btnAppointment}>
              Randevu Oluştur
            </button>
            <span className={styles.stateLabel}>kompakt randevu eylemi örneği</span>
          </div>
          <div>
            <button type="button" className={styles.btnDisabled} disabled>
              Devre Dışı Buton
            </button>
            <span className={styles.stateLabel}>disabled — düşük kontrast + etiket</span>
          </div>
        </div>
      </div>
    </section>
  );
}
