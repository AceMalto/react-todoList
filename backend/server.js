import 'dotenv/config';
import express from 'express';
import todoRoutes from './routes/todoRoute.js'
import cors from 'cors'
import './controllers/deleteSchedule.js';  // Import the cron job setup file

const app = express()

app.use(cors())

app.use(express.json())

app.use('/api/tasks', todoRoutes)


app.listen(process.env.PORT, () =>{
    console.log("connected ", process.env.PORT)
})