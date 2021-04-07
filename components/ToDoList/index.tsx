import React, { useState, useEffect } from 'react'

import Task from '@components/Task'

import { getTasks } from '@services/tasks'

interface TodoListProps {
  tasks: any
  setTasks: any
  loadingTasks: any
  setLoadingTasks: any
}

const TodoList = ({
  tasks,
  setTasks,
  loadingTasks,
  setLoadingTasks,
}: TodoListProps) => {
  useEffect(() => {
    setLoadingTasks(true)
    getTasks().then((res) => {
      setTasks([...res.data.tasks] as any)
      setLoadingTasks(false)
    })
  }, [])

  if (loadingTasks) {
    return <div>Loading...</div>
  }

  return (
    <section className="TaskList">
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

export default TodoList
