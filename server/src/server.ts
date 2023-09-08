import fastify from 'fastify'
import { PrismaClient } from '@prisma/client'

const app = fastify()
const prisma = new PrismaClient()

app.get('/users', async () => {
  const users = await prisma.user.findMany()

  return users
})

app
  .listen({
    host: 'localhost',
    port: 3333,
  })
  .then((address) => {
    console.log(`🔥 Server listening at ${address}`)
  })
