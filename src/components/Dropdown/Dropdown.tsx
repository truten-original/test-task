import { FC, useState } from 'react'
import styles from './Dropdown.module.scss'
import DropArrow from '../DropArrow/DropArrow'
import { Status } from '../../assets/mockData'

type DropdownProps = {
  title: string
  variant: string
  id: number
  changeTaskStatus: (id: number, status: Status) => void
}

const Dropdown: FC<DropdownProps> = ({ title, variant, id, changeTaskStatus }) => {
  const [open, setOpen] = useState(false)
  const handleDrop = () => {
    setOpen((prev) => !prev)
  }
  return (
    <div onClick={handleDrop} className={styles.dropContainer + ' ' + styles[variant]}>
      <div className={styles.container}>
        <div className={styles.dropdown + ' ' + styles[variant]}>{title}</div>
        <DropArrow open={open}/>
      </div>

      {open && (
        <ul className={styles.menu}>
          <li onClick={() => changeTaskStatus(id, 'completed')} className={styles.menuItem}>Выполнена</li>
          <li onClick={() => changeTaskStatus(id, 'pause')} className={styles.menuItem}>На паузе</li>
          <li onClick={() => changeTaskStatus(id, 'working')} className={styles.menuItem}>В работе</li>
        </ul>
      )}
    </div>
  )
}

export default Dropdown
