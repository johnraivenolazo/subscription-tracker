import express from 'express'
import { PORT } from './config/env.js'
import { userRouter, authRouter, subscriptionRouter } from './routes/index.js'
import connectToDatabase from './database/mongodb.js'
import errorMiddleware from './middlewares/error.middleware.js'
import cookieParser from 'cookie-parser'

const app = express()

app.get('/', (req, res) => {
    res.send('Servers running')
})

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/auth', authRouter)
app.use('/users', userRouter)
app.use('/subscriptions', subscriptionRouter)

app.use(errorMiddleware);

app.listen(PORT, async () => {
    console.log(`Server running on port http://localhost:${PORT}`)
    await connectToDatabase();
});




export default app;