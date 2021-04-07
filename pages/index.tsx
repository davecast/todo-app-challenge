import { useState } from 'react'

import ToDoForm from '../components/ToDoForm'
import ToDoList from '../components/ToDoList'

const Home = () => {
  const [tasks, setTasks] = useState([])
  const [task, setTask] = useState<string>('')
  const [loadingTasks, setLoadingTasks] = useState(false)

  return (
    <div>
      <h1>To do system</h1>
      <ToDoForm
        task={task}
        setTask={setTask}
        tasks={tasks}
        setTasks={setTasks}
      />
      <ToDoList
        tasks={tasks}
        setTasks={setTasks}
        loadingTasks={loadingTasks}
        setLoadingTasks={setLoadingTasks}
      />
    </div>
  )
}

export default Home
