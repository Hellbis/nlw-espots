import cors from '@fastify/cors'
import { PrismaClient } from '@prisma/client'
import Fastfy from 'fastify'
// import { PrismaClient } from '@prisma/client'


const app = Fastfy()
const prisma = new PrismaClient()

app.register(cors)

app.get('/', () => {
    return 'Hello World'
})

app.listen({
    port: 3333
})