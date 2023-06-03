import styles from './Header.module.scss'
import {ReactComponent as Bell} from '../../assets/svg/bell.svg'
const Header = () => {
  return (
    <header className={styles.container}>
      <div className={styles.homeContainer}>
        <div className={styles.homeLogo}>

        </div>
        <a className={styles.homelink} href="#">
          Проект
        </a>
      </div>
      <div className={styles.profileContainer}>
        <Bell className={styles.bell}/>
        <div className={styles.profileImg}></div>
        <div className={styles.profileContent}>
          <div className={styles.name}>Иванов В. А.</div>
          <div className={styles.job}>Должность</div>
          <div></div>
        </div>
      </div>
    </header>
  )
}

export default Header
