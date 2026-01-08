import { Router } from 'express'

const authRouter = Router()

authRouter.get('/', (req, res) => {
    res.send({ title: "Get All Users" })
})

authRouter.get('/:id', (req, res) => {
    res.send({ title: "Get User by ID" })
})

authRouter.post('/', (req, res) => {
    res.send({ title: "CREATE User" })
})

authRouter.put('/:id', (req, res) => {
    res.send({ title: "UPDATE User" })
})

authRouter.delete('/:id', (req, res) => {
    res.send({ title: "DELETE User" })
})


export default authRouter