import 'dotenv/config';
import express from 'express';
import todoRoutes from './routes/todoRoute.js'

const app = express()

app.use(express.json())

app.use('/api/tasks', todoRoutes)

app.listen(process.env.PORT, () =>{
    console.log("connected")
})