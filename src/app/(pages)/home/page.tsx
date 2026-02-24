import styles from './page.module.scss';

export default function Home() {
  return (
    <main className={styles.heroWrapper}>
      <div className={styles.heroRing} />
      <div className={styles.heroGlow} />

      <div className={styles.heroContent}>
        <p className={styles.kicker}>Tomorrow’s Answers, Available Now</p>
        <h1 className={styles.title}>TAAN <br/> TECHNOLOGIES</h1>
        <button className={styles.heroButton}>Button bla bla</button>
      </div>
    </main>
  );
}
