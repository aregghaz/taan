import styles from './CVslide.module.scss';

export default function CVslide() {
    return (
        <article className={`${styles.slide} ${styles.cv}`}>
            <p className={styles.kicker}>CV</p>
            <h1 className={styles.title}>Professional Profile</h1>
            <p className={styles.text}>Resume slide placeholder.</p>
        </article>
    );
}
