import { Router } from 'express'

const userRouter = Router()

userRouter.post('/sign-up', (req, res) => {
    res.send({ title: "Sign up" })
})

userRouter.post('/sign-in', (req, res) => {
    res.send({ title: "Sign in" })
})

userRouter.post('/sign-out', (req, res) => {
    res.send({ title: "Sign out" })
})

export default userRouter