import supabase from '../config/supabase.js'

export const getTodo = async () => {
    const { data, error } = await supabase.from('todolist').select('*')
    if (error) throw error
    return data
}

export const createTodo = async (todoData) => {
    const { data, error } = await supabase.from('todolist').insert([todoData])
    if( error ) throw error
    return data
}

export const updateTodo = async (id, todoData) => {
    const { data, error} = await supabase.from('todolist').update(todoData).eq('id', id)
    if( error ) throw error
    return data
}

export const deleteTodo = async (id) => {
    const { data, error } = await supabase.from('todolist').delete().eq('id', id)
    if( error ) throw error
    return data
}