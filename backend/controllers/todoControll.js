import { createTodo } from '../models/todoModel.js'

export const addTodos = async (req, res) => {
    try{
        const task = await createTodo(req.body)
        res.status(201).json({success: true, task})
    }catch(err){
        res.status(400).json({success: false, message: err.message })
    }
}