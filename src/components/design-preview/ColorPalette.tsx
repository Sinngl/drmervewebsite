import styles from "@/app/tasarim-onizleme/page.module.css";

interface ColorToken {
  readonly name: string;
  readonly hex: string;
  readonly use: string;
}

const colorTokens: readonly ColorToken[] = [
  { name: "Pine", hex: "#245C55", use: "Birincil eylemler ve bağlantılar" },
  { name: "Deep Pine", hex: "#193F3A", use: "Pine üzerinde hover durumu" },
  { name: "Ink", hex: "#18322F", use: "Başlıklar ve gövde metni" },
  { name: "Terracotta", hex: "#A9543F", use: "Sınırlı vurgu" },
  { name: "Sage", hex: "#A9C1B6", use: "Destekleyici bölüm zeminleri" },
  { name: "Mist", hex: "#E8F0EC", use: "Destekleyici bölüm zeminleri" },
  { name: "Sand", hex: "#F5F1E9", use: "Sayfa yüzeyleri" },
  { name: "Paper", hex: "#FFFCF7", use: "Ana sayfa zemini" },
  { name: "Muted Text", hex: "#5F6F69", use: "İkincil metin (Paper/Sand/White üzerinde)" },
  { name: "Border", hex: "#D6DDD7", use: "İnce çizgiler ve ayraçlar" },
  { name: "White", hex: "#FFFFFF", use: "Yüzeyler; Pine/Ink/Terracotta üzerinde metin" },
];

export default function ColorPalette() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <span className={styles.sectionKicker}>Renk Paleti</span>
        <h2 className={styles.sectionHeading}>Renk Paleti</h2>
        <p className={styles.sectionIntro}>
          Her renk çifti WCAG AA kontrast oranına göre doğrulanmıştır. Ayrıntılar
          için bkz. docs/VISUAL_DIRECTION.md.
        </p>
        <div className={styles.swatchGrid}>
          {colorTokens.map((token) => (
            <div className={styles.swatchCard} key={token.hex}>
              <div
                className={styles.swatchColor}
                style={{ backgroundColor: token.hex }}
              />
              <div className={styles.swatchBody}>
                <p className={styles.swatchName}>{token.name}</p>
                <p className={styles.swatchHex}>{token.hex}</p>
                <p className={styles.swatchUse}>{token.use}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
