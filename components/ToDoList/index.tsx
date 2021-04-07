import React, { useState, useEffect } from 'react'

import Task from '../Task'

import { getTasks } from '../../services/tasks'

interface ToDoListProps {
  tasks: any
  setTasks: any
  loadingTasks: any
  setLoadingTasks: any
}

const ToDoList = ({
  tasks,
  setTasks,
  loadingTasks,
  setLoadingTasks,
}: ToDoListProps) => {
  useEffect(() => {
    setLoadingTasks(true)
    getTasks().then((res) => {
      console.log(res.data.tasks)
      setTasks([...res.data.tasks] as any)
      setLoadingTasks(false)
    })
  }, [])

  if (loadingTasks) {
    return <div>Loading...</div>
  }

  return (
    <section>
      {tasks.length > 0 &&
        tasks
          .map(({ _id, description, status }: TTask) => {
            return (
              <Task
                key={_id}
                information={{ _id, description, status }}
                tasks={tasks}
                setTasks={setTasks}
              />
            )
          })
          .reverse()}
    </section>
  )
}

export default ToDoList
