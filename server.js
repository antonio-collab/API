import express from 'express'
import { PrismaClient } from '@prisma/client'


const app = express()
app.use(express.json())

const prisma = new PrismaClient()
//Lista todos os usuários 
app.get("/User", async (req, res) => {
  const clients = await prisma.user.findMany()
  return res.json(clients)
})
// Adciona um novo usuário ao banco dedados
app.post("/User", async (req, res) => {
  const {name, email} = req.body
  const client = await prisma.user.create({
    data:{
      name,
      email
    }
  })
  return res.json(client)
})
//Atualiza nome ou email
app.put("/User/:id", async (req, res) => {
  const {name, email} = req.body
  const client = await prisma.user.update({
    data:{
      name,
      email
    },
    where: {
      id: Number(req.params.id)
    }
  })
  return res.json(client)
})
//Apaga usuário 
app.delete("/User/:id", async (req, res) => {
  await prisma.user.delete({
    where:{
      id: Number(req.params.id)
    }
  })
  return res.status(204).send()
  
})


app.listen(3333, ()=> console.log("Server Runnig"))