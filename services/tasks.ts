import request from '@utils/request'
import { TASK, TASK_DETAIL } from '@endpoints'

/**
 * Get all tasks from collection
 * @returns Promise
 */
export function getTasks() {
  return request(TASK)
}

/**
 * Add new task to collection
 * @returns Promise
 */
 export function addTask(body: TTask) {
  return request(TASK, {
    body,
    method: 'POST',
  })
}

/**
 * Update task from collection by id
 * @returns Promise
 */
 export function updateTask(id: string, body:TTask) {
  return request(TASK_DETAIL(id), {
    body,
    method: 'PUT'
  })
}

/**
 * Delete task from collection by id
 * @returns Promise
 */
 export function deleteTask(id: string) {
  return request(TASK_DETAIL(id), {
    method: 'DELETE'
  })
}