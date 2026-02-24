import styles from './contactUsSlide.module.scss';

export default function ContactUsSlide() {
    return (
        <article className={`${styles.slide} ${styles.contact}`}>
            <p className={styles.kicker}>Contact Us</p>
            <h1 className={styles.title}>Let's Talk</h1>
            <p className={styles.text}>Contact information slide placeholder.</p>
        </article>
    );
}
