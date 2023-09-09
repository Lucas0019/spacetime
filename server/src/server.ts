import fastify from 'fastify'
import cors from '@fastify/cors'
import { memoriesRoutes } from './routes/memories'

const app = fastify()

app.register(cors, {
  origin: true, // reflect the request origin
})
app.register(memoriesRoutes)

app
  .listen({
    host: 'localhost',
    port: 3333,
  })
  .then((address) => {
    console.log(`🔥 Server listening at ${address}`)
  })
