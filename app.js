import express from 'express'
import { PORT } from './config/env.js'

const app = express()

app.get('/', (req, res) => {
    res.send('Servers running')
})

app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`)
}
);

export default app;