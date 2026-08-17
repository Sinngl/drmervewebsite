import styles from "@/app/tasarim-onizleme/page.module.css";
import { primaryNavigation, appointmentAction } from "@/config/navigation";

/**
 * Static design sample only — labels are derived from the canonical
 * navigation configuration, but nothing here is wired into the real
 * site-wide header or navigation yet.
 */
export default function HeaderConcept() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <span className={styles.sectionKicker}>Üst Menü Konsepti</span>
        <h2 className={styles.sectionHeading}>Üst Menü Konsepti</h2>
        <p className={styles.sectionIntro}>
          Bu bir tasarım örneğidir; gerçek site genelindeki gezinmeye
          bağlanmamıştır. Etiketler src/config/navigation.ts dosyasından
          türetilmiştir.
        </p>

        <div className={styles.headerConcept}>
          <div className={styles.headerBar}>
            <span className={styles.headerBrand}>Dr. Merve Zeybek</span>
            <ul className={styles.headerNav}>
              {primaryNavigation.map((item) => (
                <li key={item.href}>
                  <span className={styles.headerNavLink}>{item.label}</span>
                </li>
              ))}
            </ul>
            <div className={styles.headerActions}>
              <span className={styles.headerAppointmentBtn}>
                {appointmentAction.label}
              </span>
              <div
                className={styles.hamburger}
                aria-hidden="true"
                title="Mobil menü simgesi örneği"
              >
                <span className={styles.hamburgerBar} />
                <span className={styles.hamburgerBar} />
                <span className={styles.hamburgerBar} />
              </div>
            </div>
          </div>
        </div>

        <p className={styles.smallText} style={{ marginTop: 16 }}>
          Mobil menü açık durum örneği (gerçek genişlikten bağımsız gösterim):
        </p>
        <div className={styles.mobileMenuFrame}>
          <div className={styles.mobileMenuFrameBar}>
            <span className={styles.mobileMenuFrameLabel}>Menü</span>
            <span className={styles.mobileMenuFrameClose} aria-hidden="true" />
          </div>
          <ul className={styles.mobileMenuFrameList}>
            {primaryNavigation.map((item) => (
              <li key={item.href}>
                <span className={styles.headerNavLink}>{item.label}</span>
              </li>
            ))}
            <li>
              <span className={styles.btnAppointment}>
                {appointmentAction.label}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
