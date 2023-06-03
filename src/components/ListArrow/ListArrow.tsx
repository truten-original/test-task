import styles from './ListArrow.module.scss'
import { ReactComponent as Arrow } from '../../assets/svg/listArrow.svg'
const ListArrow = ({ closed }: { closed: boolean }) => {
  const classes = styles.icon + (closed ? ` ${styles.rotated}` : '')
  return (
    <Arrow className={classes} />
  )
}
export default ListArrow
