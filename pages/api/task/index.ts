import { NextApiRequest, NextApiResponse } from 'next'

import { connectToDatabase } from '@database'

const setTask = async (request: NextApiRequest, response: NextApiResponse) => {
  const {db} = await connectToDatabase();

  const { ops: [ result ] } = await db.collection("tasks").insertOne(request.body);

  response.statusCode = 200
  response.setHeader('Content-type', 'application/json')
  response.end(JSON.stringify({ ...result } ))
}

const getTasks = async (request: NextApiRequest, response: NextApiResponse) => {
  const { db } = await connectToDatabase()

  const tasks = await db.collection('tasks').find({}).limit(20).toArray()

  response.statusCode = 200 //ok
  response.setHeader('Content-type', 'application/json')
  response.end(JSON.stringify({ tasks }))
}

export default async (request: NextApiRequest, response: NextApiResponse) => {
  switch (request.method) {
    case 'GET':
      await getTasks(request, response)
      break
    case 'POST':
      await setTask(request, response);
      break
    default:
      response.statusCode = 404
      response.setHeader('Content-type', 'application/json')
      response.end(JSON.stringify({ message: 'Metodo no es permitido' }))
  }
}
