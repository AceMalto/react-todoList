import express from 'express'
import { getTodo, createTodo, updateTodo, deleteTodo } from '../controllers/todoControll.js'


const router = express.Router()

router.get('/list', getTodo)
router.post('/add', createTodo)
router.put('/update/:id', updateTodo)
router.delete('/delete/:id', deleteTodo)

export default router
