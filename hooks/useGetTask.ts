import { useState, useEffect } from 'react'

import { GET_TASK } from 'endpoints'

const useGetTasks = () => {
  const [tasks, setTasks] = useState<any>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        setLoading(true)
        const data = await fetch(GET_TASK)
        const tasks = await data.json()

        setTasks(tasks)
      } catch (e) {
        setTasks([])
      }
      setLoading(false)
    }
    fetchTasks()
  }, [])

  return [tasks, loading]
}

export default useGetTasks
