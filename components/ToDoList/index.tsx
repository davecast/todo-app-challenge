import React from 'react'
import useGetTasks from "../../hooks/useGetTask"

const ToDoList = () => {
  const [tasks, loading] = useGetTasks()

  console.log(tasks.length)

  return (
    <div>
      {
        loading ? <p>Loading...</p> : <>
          {
            tasks.length > 0 ? <>Lista</> : <p>No ha agregado ninguna tarea</p>
          }
        </>
      }
    </div>
  )
}

export default ToDoList
