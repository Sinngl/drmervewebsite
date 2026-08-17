import styles from "@/app/tasarim-onizleme/page.module.css";

/**
 * Non-functional visual samples only — no form action, no data collection.
 * No diagnosis, child-name, symptom or medical-document fields, per
 * docs/APPOINTMENT_SYSTEM.md minimum/prohibited data rules.
 */
export default function FormControls() {
  return (
    <section className={`${styles.section} ${styles.sectionAlt}`}>
      <div className={styles.container}>
        <span className={styles.sectionKicker}>Form Kontrolleri</span>
        <h2 className={styles.sectionHeading}>Form Kontrolleri</h2>
        <p className={styles.sectionIntro}>
          Görsel örnektir; gerçek bir form eylemi yoktur, veri toplanmaz veya
          saklanmaz.
        </p>

        <div className={styles.formGrid}>
          <div className={styles.formField}>
            <label className={styles.formLabel} htmlFor="dp-name">
              Ad Soyad
            </label>
            <input
              id="dp-name"
              type="text"
              className={styles.formInput}
              placeholder="Örn. Ayşe Yılmaz"
              disabled
            />
          </div>
          <div className={styles.formField}>
            <label className={styles.formLabel} htmlFor="dp-email">
              E-posta
            </label>
            <input
              id="dp-email"
              type="email"
              className={styles.formInput}
              placeholder="ornek@eposta.com"
              disabled
            />
          </div>
          <div className={styles.formField}>
            <label className={styles.formLabel} htmlFor="dp-phone">
              Telefon
            </label>
            <input
              id="dp-phone"
              type="tel"
              className={styles.formInput}
              placeholder="05xx xxx xx xx"
              disabled
            />
          </div>
          <div className={styles.formField}>
            <label className={styles.formLabel} htmlFor="dp-type">
              Görüşme Türü
            </label>
            <select id="dp-type" className={styles.formSelect} disabled>
              <option>Yüz yüze ilk görüşme</option>
              <option>Online ilk görüşme</option>
              <option>Telefonla ön bilgilendirme</option>
            </select>
          </div>
          <div className={styles.formField} style={{ gridColumn: "1 / -1" }}>
            <label className={styles.formLabel} htmlFor="dp-note">
              Not (isteğe bağlı)
            </label>
            <textarea
              id="dp-note"
              className={styles.formTextarea}
              placeholder="Kısa bir not bırakabilirsiniz."
              disabled
            />
            <span className={styles.formPrivacyNote}>
              Bu yalnızca görsel bir metin alanı örneğidir. Gerçek randevu
              akışı veri minimizasyonu ilkesini izleyecektir; tanı, semptom,
              tıbbi rapor veya çocuğun adı talep edilmeyecektir. Gerçek
              randevu sisteminde herhangi bir serbest metin alanının
              bulunup bulunmayacağı gizlilik/hukuki inceleme onayına
              tabidir.
            </span>
          </div>
          <div
            className={styles.formCheckboxRow}
            style={{ gridColumn: "1 / -1" }}
          >
            <input
              id="dp-kvkk"
              type="checkbox"
              className={styles.formCheckbox}
              disabled
            />
            <label htmlFor="dp-kvkk">
              KVKK aydınlatma metnini okudum (örnek onay kutusu)
            </label>
          </div>
          <div className={styles.formMessageError} style={{ gridColumn: "1 / -1" }}>
            Örnek doğrulama mesajı: bu alan zorunludur.
          </div>
          <div
            className={styles.formMessageSuccess}
            style={{ gridColumn: "1 / -1" }}
          >
            Örnek başarı mesajı: talebiniz alındı.
          </div>
        </div>
      </div>
    </section>
  );
}
