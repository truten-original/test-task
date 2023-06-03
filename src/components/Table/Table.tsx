import { useState } from 'react'
import { headers } from '../../assets/headers'
import styles from './Table.module.scss'
import { ListItem, getListData } from '../../assets/listData'
import { Item, Status, getData } from '../../assets/mockData'
import List from '../List/List'
const Table = () => {
  const [lists, setLists] = useState<ListItem[]>(() => getListData())
  const [data, setData] = useState<Item[]>(() => getData())
  const changeActiveList = (id: number) => {
    setLists((prev) =>
      prev.map((list) => {
        list.id === id ? (list.visible = true) : (list.visible = false)
        return list
      })
    )
  }
  const changeTaskStatus = (id: number, status: Status) => {
    setData((prev) =>
      prev.map((t) => {
        if (t.id === id) {
          t.status = status
          return t
        } else {
          return t
        }
      })
    )
  }
  return (
    <div className={styles.table}>
      <div className={styles.header}>
        {headers.map((h) => (
          <div className={styles.headerItem} key={h}>
            <span>{h}</span>
          </div>
        ))}
      </div>
      <div>
        {lists.map((list) => (
          <List
            data={data}
            key={list.id}
            {...list}
            changeActiveList={changeActiveList}
            changeTaskStatus={changeTaskStatus}
          />
        ))}
      </div>
    </div>
  )
}

export default Table
