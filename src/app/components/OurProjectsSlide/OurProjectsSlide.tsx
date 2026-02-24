import styles from './ourProjectsSlide.module.scss';

export default function OurProjectsSlide() {
    return (
        <article className={`${styles.slide} ${styles.projects}`}>
            <p className={styles.kicker}>Our Projects</p>
            <h1 className={styles.title}>Selected Work</h1>
            <p className={styles.text}>Projects showcase slide placeholder.</p>
        </article>
    );
}
