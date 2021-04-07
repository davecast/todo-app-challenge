import { useState, useRef } from 'react'
import { updateTask } from '../../services/tasks'

interface TaskEditProps {
  _id: TTaskId
  description: string
  tasks: Array<TTask>
  setTasks: any
  handleEdit: any
}

const TaskEdit = ({
  _id,
  description,
  tasks,
  setTasks,
  handleEdit,
}: TaskEditProps) => {
  const $editTask = useRef<HTMLInputElement>(null)

  const [editTask, setEditTask] = useState<string>(description)

  const handleChange = () => {
    setEditTask($editTask?.current?.value || '')
  }

  const handleSave = async () => {
    await updateTask(_id as TTaskId, { description: editTask })
    setTasks(
      tasks.map((item) => {
        if (item._id === _id) {
          return {
            ...item,
            description: editTask,
          }
        } else {
          return item
        }
      })
    )
    handleEdit()
  }
  const handleCancel = () => {
    handleEdit()
  }

  return (
    <div>
      <input
        ref={$editTask}
        type="text"
        value={editTask}
        onChange={handleChange}
      />
      <div>
        <button onClick={handleSave} disabled={description === editTask} >save</button>
        <button onClick={handleCancel}>cancel</button>
      </div>
    </div>
  )
}

export default TaskEdit
