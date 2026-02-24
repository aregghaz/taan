import styles from './page.module.scss';
import HeroHeader from "@/app/components/HeroHeader/HeroHeader";
import HeroFullscreenSlide from "@/app/components/HeroFullscreenSlide/HeroFullscreenSlide";

export default function Home() {
  return (
    <main className={styles.heroWrapper}>
        <div className={styles.heroHeaderWrapper}>
            <HeroHeader />
        </div>
      <div className={styles.heroRing} />
      <div className={styles.heroGlow} />

      <div className={styles.heroContent}>
        <p className={styles.kicker}>Tomorrow’s Answers, Available Now</p>
        <h1 className={styles.title}>TAAN <br/> TECHNOLOGIES</h1>
        <button className={styles.heroButton}>Buttonik</button>
      </div>

      <HeroFullscreenSlide />
    </main>
  );
}
