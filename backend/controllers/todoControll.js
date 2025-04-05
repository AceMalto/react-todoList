import * as todoModel from '../models/todoModel.js'

export const getTodo = async (req, res) => {
    try {
        const todos = await todoModel.getTodo()
        res.status(200).json(todos)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

export const createTodo = async (req, res) => {
    try {
        const data = await todoModel.createTodo(req.body)
        res.status(201).json(data)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

export const updateTodo = async (req, res) => {
    try {
        const data = await todoModel.updateTodo(req.params.id, req.body)
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

export const deleteTodo = async (req, res) => {
    try {
        const data = await todoModel.deleteTodo(req.params.id)
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}