import styles from './DropArrow.module.scss'
import { ReactComponent as Arrow } from '../../assets/svg/dropdownArrow.svg'
const DropArrow = ({open}: {open: boolean}) => {
  return <Arrow className={open ?  styles.rotate : ''}/>
}

export default DropArrow
