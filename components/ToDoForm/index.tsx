import React, { useState, useRef } from 'react'

import { addTask } from '../../services/tasks'

interface ToDoFormProps {
  task: string
  setTask: any
  tasks: Array<object>
  setTasks: any
}

const ToDoForm = ({ task, setTask, tasks, setTasks }: ToDoFormProps) => {
  const $toDoInput = useRef<HTMLInputElement>(null)

  const handleOnChange = () => {
    setTask($toDoInput?.current?.value || '')
  }

  const handleAddToTask = async () => {
    if (task !== '') {
      await addTask({
        description: task,
        status: 'not-completed',
      }).then((res) => {
        setTasks([...tasks, res.data])
      })

      setTask('')
    }
  }

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleAddToTask()
    }
  }

  return (
    <div>
      <input
        ref={$toDoInput}
        onKeyDown={handleEnter}
        onChange={handleOnChange}
        type="text"
        name="task"
        value={task}
      />
      <button type="button" onClick={handleAddToTask}>
        Agregar
      </button>
    </div>
  )
}

export default ToDoForm
