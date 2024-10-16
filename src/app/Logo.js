import styles from './Home.module.css';

const Logo = () => {
    return(
        <div className={styles.logo}>
            <div className={styles.logoText}>
                <h1 className={styles.gc}>Gettysburg College</h1>
            </div>
            <div className={styles.logoText}>
                <h2 className={styles.rmc}>Rate My Classes</h2>
            </div>
        </div>
    )
}

export default Logo