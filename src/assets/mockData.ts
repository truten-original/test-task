export type Status = 'pause' | 'working' | 'completed'
export type Item = {
  date: string
  taskId: string
  projectId: string
  task: string
  status: Status
  responsible: string
  anotherPeformer: string
  priority: number
  comment: string
  planTime: string
  factTime: string
  startTime: string
  endTime: string
  id: number
}

 const data: Item[] = [
  {
    date: '01.01.0001',
    taskId: 'Шифр задачи',
    projectId: '48/21',
    task: 'Прозвонить Копьева',
    status: 'working',
    anotherPeformer: 'Свердлова А. И.',
    comment: 'Комментарий',
    endTime: '01/01/0001 00:00:00',
    factTime: '00:00:14',
    id: 1,
    planTime: '00:15:00',
    priority: 2,
    responsible: 'Иванов В.А.',
    startTime: '01/01/0001 00:00:00',
  },
  {
    date: '01.01.0001',
    taskId: 'Шифр задачи',
    projectId: '48/21',
    task: 'Прозвонить Копьева',
    status: 'working',
    anotherPeformer: 'Свердлова А. И.',
    comment: 'Комментарий',
    endTime: '01/01/0001 00:00:00',
    factTime: '00:00:14',
    id: 2,
    planTime: '00:15:00',
    priority: 2,
    responsible: 'Иванов В.А.',
    startTime: '01/01/0001 00:00:00',
  },
  {
    date: '01.01.0001',
    taskId: 'Шифр задачи',
    projectId: '48/21',
    task: 'Прозвонить Копьева',
    status: 'completed',
    anotherPeformer: 'Свердлова А. И.',
    comment: 'Комментарий',
    endTime: '01/01/0001 00:00:00',
    factTime: '00:00:14',
    id: 3,
    planTime: '00:15:00',
    priority: 2,
    responsible: 'Иванов В.А.',
    startTime: '01/01/0001 00:00:00',
  },
  {
    date: '01.01.0001',
    taskId: 'Шифр задачи',
    projectId: '48/21',
    task: 'Прозвонить Копьева',
    status: 'completed',
    anotherPeformer: 'Свердлова А. И.',
    comment: 'Комментарий',
    endTime: '01/01/0001 00:00:00',
    factTime: '00:00:14',
    id: 4,
    planTime: '00:15:00',
    priority: 2,
    responsible: 'Иванов В.А.',
    startTime: '01/01/0001 00:00:00',
  },
  {
    date: '01.01.0001',
    taskId: 'Шифр задачи',
    projectId: '48/21',
    task: 'Прозвонить Копьева',
    status: 'completed',
    anotherPeformer: 'Свердлова А. И.',
    comment: 'Комментарий',
    endTime: '01/01/0001 00:00:00',
    factTime: '00:00:14',
    id: 6,
    planTime: '00:15:00',
    priority: 2,
    responsible: 'Иванов В.А.',
    startTime: '01/01/0001 00:00:00',
  },
  {
    date: '01.01.0001',
    taskId: 'Шифр задачи',
    projectId: '48/21',
    task: 'Прозвонить Копьева',
    status: 'completed',
    anotherPeformer: 'Свердлова А. И.',
    comment: 'Комментарий',
    endTime: '01/01/0001 00:00:00',
    factTime: '00:00:14',
    id: 5,
    planTime: '00:15:00',
    priority: 2,
    responsible: 'Иванов В.А.',
    startTime: '01/01/0001 00:00:00',
  },
  {
    date: '01.01.0001',
    taskId: 'Шифр задачи',
    projectId: '48/21',
    task: 'Прозвонить Копьева',
    status: 'completed',
    anotherPeformer: 'Свердлова А. И.',
    comment: 'Комментарий',
    endTime: '01/01/0001 00:00:00',
    factTime: '00:00:14',
    id: 7,
    planTime: '00:15:00',
    priority: 2,
    responsible: 'Иванов В.А.',
    startTime: '01/01/0001 00:00:00',
  },
  {
    date: '01.01.0001',
    taskId: 'Шифр задачи',
    projectId: '48/21',
    task: 'Прозвонить Копьева',
    status: 'working',
    anotherPeformer: 'Свердлова А. И.',
    comment: 'Комментарий',
    endTime: '01/01/0001 00:00:00',
    factTime: '00:00:14',
    id: 8,
    planTime: '00:15:00',
    priority: 2,
    responsible: 'Иванов В.А.',
    startTime: '01/01/0001 00:00:00',
  },
  {
    date: '01.01.0001',
    taskId: 'Шифр задачи',
    projectId: '48/21',
    task: 'Прозвонить Копьева',
    status: 'working',
    anotherPeformer: 'Свердлова А. И.',
    comment: 'Комментарий',
    endTime: '01/01/0001 00:00:00',
    factTime: '00:00:14',
    id: 9,
    planTime: '00:15:00',
    priority: 2,
    responsible: 'Иванов В.А.',
    startTime: '01/01/0001 00:00:00',
  },
  {
    date: '01.01.0001',
    taskId: 'Шифр задачи',
    projectId: '48/21',
    task: 'Прозвонить Копьева',
    status: 'pause',
    anotherPeformer: 'Свердлова А. И.',
    comment: 'Комментарий',
    endTime: '01/01/0001 00:00:00',
    factTime: '00:00:14',
    id: 10,
    planTime: '00:15:00',
    priority: 2,
    responsible: 'Иванов В.А.',
    startTime: '01/01/0001 00:00:00',
  },
  {
    date: '01.01.0001',
    taskId: 'Шифр задачи',
    projectId: '48/21',
    task: 'Прозвонить Копьева',
    status: 'working',
    anotherPeformer: 'Свердлова А. И.',
    comment: 'Комментарий',
    endTime: '01/01/0001 00:00:00',
    factTime: '00:00:14',
    id: 11,
    planTime: '00:15:00',
    priority: 2,
    responsible: 'Иванов В.А.',
    startTime: '01/01/0001 00:00:00',
  },
  {
    date: '01.01.0001',
    taskId: 'Шифр задачи',
    projectId: '48/21',
    task: 'Прозвонить Копьева',
    status: 'pause',
    anotherPeformer: 'Свердлова А. И.',
    comment: 'Комментарий',
    endTime: '01/01/0001 00:00:00',
    factTime: '00:00:14',
    id: 12,
    planTime: '00:15:00',
    priority: 2,
    responsible: 'Иванов В.А.',
    startTime: '01/01/0001 00:00:00',
  },
  {
    date: '01.01.0001',
    taskId: 'Шифр задачи',
    projectId: '48/21',
    task: 'Прозвонить Копьева',
    status: 'pause',
    anotherPeformer: 'Свердлова А. И.',
    comment: 'Комментарий',
    endTime: '01/01/0001 00:00:00',
    factTime: '00:00:14',
    id: 13,
    planTime: '00:15:00',
    priority: 2,
    responsible: 'Иванов В.А.',
    startTime: '01/01/0001 00:00:00',
  },
  {
    date: '01.01.0001',
    taskId: 'Шифр задачи',
    projectId: '48/21',
    task: 'Прозвонить Копьева',
    status: 'pause',
    anotherPeformer: 'Свердлова А. И.',
    comment: 'Комментарий',
    endTime: '01/01/0001 00:00:00',
    factTime: '00:00:14',
    id: 14,
    planTime: '00:15:00',
    priority: 2,
    responsible: 'Иванов В.А.',
    startTime: '01/01/0001 00:00:00',
  },
  {
    date: '01.01.0001',
    taskId: 'Шифр задачи',
    projectId: '48/21',
    task: 'Прозвонить Копьева',
    status: 'pause',
    anotherPeformer: 'Свердлова А. И.',
    comment: 'Комментарий',
    endTime: '01/01/0001 00:00:00',
    factTime: '00:00:14',
    id: 15,
    planTime: '00:15:00',
    priority: 2,
    responsible: 'Иванов В.А.',
    startTime: '01/01/0001 00:00:00',
  },
]

export const getData = () => data