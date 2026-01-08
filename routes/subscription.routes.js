import { Router } from 'express'

const subscriptionRouter = Router()

subscriptionRouter.get('/', (req, res) => {
    res.send({ title: "Get All Subscriptions" })
})

subscriptionRouter.get('/:id', (req, res) => {
    res.send({ title: "GET Subscription by ID" })
})

subscriptionRouter.post('/', (req, res) => {
    res.send({ title: "POST Create Subscription" })
})

subscriptionRouter.put('/:id', (req, res) => {
    res.send({ title: "PUT Update Subscription by ID" })
})

subscriptionRouter.delete('/:id', (req, res) => {
    res.send({ title: "DELETE Subscription by ID" })
})

subscriptionRouter.get('/user/:id', (req, res) => {
    res.send({ title: "GET all user subscriptions" })
})

subscriptionRouter.get('/:id/cancel', (req, res) => {
    res.send({ title: "CANCEL subscription by ID" })
})

subscriptionRouter.get('/upcoming-renewals', (req, res) => {
    res.send({ title: "GET upcoming renewals" })
})

export default subscriptionRouter