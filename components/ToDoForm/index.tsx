import React, { useState, useRef } from 'react'

const ToDoForm = () => {
  const [task, setTask] = useState<string>('')

  const toDoInput = useRef<HTMLInputElement>(null)

  const handleOnChange = () => {
    setTask(toDoInput?.current?.value || '')
  }

  const handleAddToTask = async () => {
    if (task !== '') {
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
        ref={toDoInput}
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
