import styles from './aboutUsSlide.module.scss';

export default function AboutUsSlide() {
    return (
        <article className={`${styles.slide} ${styles.about}`}>
            <p className={styles.kicker}>About Us</p>
            <h1 className={styles.title}>Who We Are</h1>
            <p className={styles.text}>Team introduction slide placeholder.</p>
        </article>
    );
}
