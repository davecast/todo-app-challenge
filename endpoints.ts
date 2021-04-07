/**
 * Url api
 */

const API_V1 = process.env.NEXT_PUBLIC_API;

export const TASK = `${API_V1}/task`
export const TASK_DETAIL = (id: string) => `${API_V1}/task/${id}`;