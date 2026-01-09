import express from 'express'
import { PORT } from './config/env.js'
import { userRouter, authRouter, subscriptionRouter } from './routes/index.js'
import connectToDatabase from './database/mongodb.js'

const app = express()

app.get('/', (req, res) => {
    res.send('Servers running')
})

app.use('/auth', authRouter)
app.use('/users', userRouter)
app.use('/subscriptions', subscriptionRouter)

app.listen(PORT, async () => {
    console.log(`Server running on port http://localhost:${PORT}`)
    await connectToDatabase();
});




export default app;