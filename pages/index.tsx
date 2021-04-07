import { useState } from 'react'

import NewTodo from '../components/NewTodo'
import TodoList from '../components/TodoList'

const Home = () => {
  const [tasks, setTasks] = useState([])
  const [task, setTask] = useState<string>('')
  const [loadingTasks, setLoadingTasks] = useState(false)

  return (
    <div>
      <h1>To do system</h1>
      <NewTodo
        task={task}
        setTask={setTask}
        tasks={tasks}
        setTasks={setTasks}
      />
      <TodoList
        tasks={tasks}
        setTasks={setTasks}
        loadingTasks={loadingTasks}
        setLoadingTasks={setLoadingTasks}
      />
    </div>
  )
}

export default Home
