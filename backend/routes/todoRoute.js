import express from 'express'
import { addTodos } from '../controllers/todoControll.js'

const router = express.Router()

router.post('/add', addTodos) // POST route

export default router
