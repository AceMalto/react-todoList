import supabase from '../config/supabase.js'

export const createTodo = async (todoData) => {
    const { data, error } = await supabase.from('todolist').insert([todoData])
    if(error) throw error
    return data
}