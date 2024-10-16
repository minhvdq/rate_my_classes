import styles from './Home.module.css'
import Logo from './Logo'
import "bootstrap/dist/css/bootstrap.min.css"

export default function Home() {
  return (
    <div className={styles.mainPage}>
      <Logo />

      <div className={styles.authBtn}>
        <button className='btn btn-light'><b>Sign in</b></button>
        <button><b>Sign up</b></button>
      </div>

      <forn>
        <div className={styles.search}>
          <input className='form-control' placeholder='Type in a class (i.e: CS 216 )' />
        </div>
      </forn>
    </div>
  )
}
