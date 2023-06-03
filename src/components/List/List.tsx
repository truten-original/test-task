import { FC } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ListItem } from '../../assets/listData'
import { Item, Status } from '../../assets/mockData'
import Dropdown from '../Dropdown/Dropdown'

import styles from './List.module.scss'
import ListArrow from '../ListArrow/ListArrow'

type ListProps = ListItem & {
  data: Item[]
  changeActiveList: (id: number) => void
  changeTaskStatus: (id: number, status: Status) => void
}

const List: FC<ListProps> = ({
  data,
  visible,
  title,
  type,
  changeActiveList,
  changeTaskStatus,
  id,
}) => {
  const list: Item[] = data.filter((item: Item) => item.status === type)
  const gedivropdownProps = (status: Status) => {
    switch (status) {
      case 'completed':
        return { variant: 'white', title: 'Выполнена' }

      case 'pause':
        return { variant: 'red', title: 'На паузе' }

      case 'working':
        return { variant: 'green', title: 'В работе' }

      default:
        return { variant: 'green', title: 'В работе' }
    }
  }
  return (
    <>
      <div onClick={() => changeActiveList(id)} className={styles.control}>
        <div className={styles.controlContent}>
          <div>{title}</div>
          <ListArrow closed={visible} />
        </div>
      </div>

      <AnimatePresence initial={false}>
        {visible && (
            list.map((item) => (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                key={item.id}
              >
                <div className={styles.tableRow}>
                  <div className={styles.tableRowItem}>{item.date}</div>
                  <div className={styles.tableRowItem}>{item.taskId}</div>
                  <div className={styles.tableRowItem}>{item.projectId}</div>
                  <div className={styles.tableRowItem}>{item.task}</div>
                  <Dropdown
                    {...gedivropdownProps(item.status)}
                    changeTaskStatus={changeTaskStatus}
                    id={item.id}
                  />
                  <div className={styles.tableRowItem}>{item.responsible}</div>
                  <div className={styles.tableRowItem}>
                    {item.anotherPeformer}
                  </div>
                  <div className={styles.tableRowItem}>{item.priority}</div>
                  <div className={styles.tableRowItem}>{item.comment}</div>
                  <div className={styles.tableRowItem}>{item.planTime}</div>
                  <div className={styles.tableRowItem}>{item.factTime}</div>
                  <div className={styles.tableRowItem}>{item.startTime}</div>
                  <div className={styles.tableRowItem}>{item.endTime}</div>
                </div>
              </motion.div>
            ))
        )}
      </AnimatePresence>
    </>
  )
}

export default List
