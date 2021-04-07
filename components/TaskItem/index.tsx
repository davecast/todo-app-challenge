import { updateTask, deleteTask } from '../../services/tasks'

interface TaskEditProps {
  information: TTask
  tasks: Array<TTask>
  setTasks: any
  handleEdit: any
}

const TaskEdit = ({
  information,
  tasks,
  setTasks,
  handleEdit,
}: TaskEditProps) => {
  const handleCompleted = async () => {
    await updateTask(information._id as TTaskId, {
      status:
        information.status === 'not-completed' ? 'completed' : 'not-completed',
    })
    setTasks(
      tasks.map((item) => {
        if (item._id === information._id) {
          return {
            ...item,
            status:
              item.status === 'not-completed' ? 'completed' : 'not-completed',
          }
        } else {
          return item
        }
      })
    )
  }

  const handleDelete = async () => {
    await deleteTask(information._id as TTaskId)
    setTasks(tasks.filter((item) => item._id !== information._id))
  }

  return (
    <div className="Task">
      <div className="Task__content">
        <label>
          <input
            type="checkbox"
            defaultChecked={
              information.status === 'not-completed' ? false : true
            }
            onChange={handleCompleted}
          />
        </label>
        <h3
          className={`Task__name ${
            information.status === 'not-completed' ? '' : 'Task__completed'
          }`}
        >
          {information.description}
        </h3>
      </div>
      <div className="Task__actions">
        <button className="Task__button" onClick={handleEdit}>
          <i className="fas fa-edit"></i>
        </button>
        <button className="Task__button" onClick={handleDelete}>
          <i className="fas fa-trash-alt"></i>
        </button>
      </div>
    </div>
  )
}

export default TaskEdit
