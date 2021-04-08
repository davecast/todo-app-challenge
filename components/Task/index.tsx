import React, { useState } from 'react'

import TaskEdit from '@components/TaskEdit'
import TaskItem from '@components/TaskItem'

interface TaskProps {
  information: TTask
  tasks: Array<TTask>
  setTasks: any
}

const Task = ({ information, tasks, setTasks }: TaskProps) => {
  const [edit, setEdit] = useState<boolean>(false)

  const handleEdit = () => {
    setEdit(!edit)
  }

  return (
    <>
      {!edit ? (
        <TaskItem
          information={information}
          tasks={tasks}
          setTasks={setTasks}
          handleEdit={handleEdit}
        />
      ) : (
        <TaskEdit
          _id={information._id || ''}
          description={information.description || ''}
          tasks={tasks}
          setTasks={setTasks}
          handleEdit={handleEdit}
        />
      )}
    </>
  )
}

export default Task
