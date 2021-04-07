import { NextApiRequest, NextApiResponse } from 'next'
import { ObjectId } from 'mongodb'

import { connectToDatabase } from '../../../middleware/database'

const getOneTask = async (
  request: NextApiRequest,
  response: NextApiResponse,
  id: ObjectId
) => {
  const { db } = await connectToDatabase()
  const task = await db.collection('tasks').findOne({ _id: id })

  response.statusCode = 200 //ok
  response.setHeader('Content-type', 'application/json')
  response.end(JSON.stringify({ ...task }))
}

const deleteOneTask = async (
  request: NextApiRequest,
  response: NextApiResponse,
  id: ObjectId
) => {
  const { db } = await connectToDatabase()
  const deleteTask = await db.collection('tasks').deleteOne({ _id: id })

  response.statusCode = 200 //ok
  response.setHeader('Content-type', 'application/json')
  response.end(JSON.stringify({ deletedCount: deleteTask.deletedCount }))
}

const updateOneTask = async (
  request: NextApiRequest,
  response: NextApiResponse,
  id: ObjectId
) => {
  const { db } = await connectToDatabase()
  const task = await db
    .collection('tasks')
    .updateOne(
      { _id: id },
      { $set: request.body }
    )

  response.statusCode = 200 //ok
  response.setHeader('Content-type', 'application/json')
  response.end(JSON.stringify({  modifiedCount: task.modifiedCount}))
}

export default async (request: NextApiRequest, response: NextApiResponse) => {
  const id = new ObjectId(`${request.query.id}`)

  switch (request.method) {
    case 'GET':
      await getOneTask(request, response, id)
      break
    case 'PUT':
      await updateOneTask(request, response, id)
      break
    case 'DELETE':
      await deleteOneTask(request, response, id)
      break
    default:
      response.statusCode = 404
      response.setHeader('Content-type', 'application/json')
      response.end(JSON.stringify({ message: "Metodo no es permitido" }))
  }
}
