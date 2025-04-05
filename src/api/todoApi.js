import axios from 'axios'

const API_URL = 'http://localhost:3001/api/tasks' // same port for the backend

export const getTodo = async () =>{
    try {
        const response = await axios.get(`${API_URL}/list`)
        return response.data
    } catch(error) {
        console.error('Error fetching todos:', error?.response?.data || error.message || error)
        return []
    }
}

export const createTodo = async (description) => {
    try {
        const response = await axios.post(`${API_URL}/add`, description )
        console.log('Todo added:', response.data)
        return response.data
    }catch(error){
        console.error('Error adding todo:', error?.response?.data || error.message)
    }
}

export const deleteTodo = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/delete/${id}`)
        return response.data
    } catch (error) {
        console.error('Error Delete todo', error.response?.data || error.message)
    }
}

export const updateTodo = async (id, updatedData) => {
    try {
        const response = await axios.put(`${API_URL}/update/${id}`, updatedData)
        return response.data
    } catch (error) {
        console.error('Error updating todo:', error.response?.data || error.message)
    }
}
