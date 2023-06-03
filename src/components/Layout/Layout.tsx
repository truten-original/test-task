import { ReactNode } from 'react'
import Header from '../Header/Header'
import { ReactComponent as Docs } from '../../assets/svg/docs.svg'
import styles from './Layout.module.scss'
const Layout = ({ children }: { children?: ReactNode }) => {
  return (
    <>
      <Header />
      <div className={styles.mainLayout}>
        <div className={styles.sideBar}>
          <div className={styles.imgContainer}>
            <Docs className={styles.icon} />
          </div>
        </div>
        <div className={styles.layout}>
          <h1 className={styles.title}>Задачи</h1>
          {children}
        </div>
      </div>
    </>
  )
}

export default Layout
