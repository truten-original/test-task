import { Status } from "./mockData"

export type ListItem = {
  id: number
  title: 'Выполненные задачи' | 'Задачи на сегодня' | 'Предстоящие задачи',
  visible: boolean,
  type: Status
}

const listData: ListItem[] = [
    {id: 111, title: "Выполненные задачи", visible: false, type: 'completed'},
    {id: 222, title: "Задачи на сегодня", visible: true, type: "working"},
    {id: 333, title: "Предстоящие задачи", visible: false, type: "pause"},
]

export const getListData = () => listData