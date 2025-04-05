import { useEffect, useState } from 'react';
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { createTodo, updateTodo, deleteTodo } from './api/todoApi.js'; // Ensure you handle todoApi functions
import supabase from './api/supabaseclient.js'; // Importing supabase client
import { formatDistanceToNow } from 'date-fns';

function App() {  
  const [showOptions, setShowOptions] = useState(null);
  const [editingId, setEditingId] = useState(null);
  const [task, setTask] = useState('');
  const [todo, setTodo] = useState([]); // List of todos

  // Fetch todos from the backend
  const fetchTodo = async () => {
    try {
      const { data, error } = await supabase
        .from('todolist')  // Replace 'todos' with your actual table name in Supabase
        .select('*');

      if (error) throw error;

      setTodo(data);
    } catch (error) {
      console.error('Error fetching todos:', error.message);
    }
  }
  

  useEffect(() => {
    fetchTodo();
  }, []);

  const toggleOptions = (id) => {
    setShowOptions(prev => prev === id ? null : id);
  };

  const handleEdit = (todo) => {
    setTask(todo.description);
    setEditingId(todo.id);
    setShowOptions(null);
  };

  const handleAddTodo = async () => {
    if (task.trim()) {
      const newTodo = { description: task };

      if (editingId) {
        await updateTodo(editingId, newTodo);
        setEditingId(null);
      } else {
        await createTodo(newTodo);
      }

      setTask('');
      fetchTodo();
    }
  };

  const handleDelete = async (id) => {
    await deleteTodo(id);
    fetchTodo();
    setShowOptions(null);
  };

  return (
    <div className='flex flex-col font-prompt text-white bg-black h-screen py-10'>
        <div className='mx-auto w-full max-w-2xl space-y-5'>
            <h1 className='text-2xl font-bold md:text-3xl'>TO-DO LIST</h1>
            <div className="flex flex-col h-52 relative">
              <textarea 
                value={task} 
                onChange={(e) => setTask(e.target.value)}
                className="pl-5 pt-3 border rounded-lg bg-transparent h-full resize-none"
              ></textarea>
              <div className="absolute bottom-2 right-2">
                <button onClick={handleAddTodo} className="bg-orange-400 w-20 py-1 rounded-md">{editingId ? 'Update': 'Save'}</button>
              </div>
            </div>

            {
              todo.map((todos) => (
                <div key={todos.id} className='border rounded-lg relative'>
                  <div className='flex justify-between px-3 py-3'>
                    <p className='text-xs'>{todos.created_at ? formatDistanceToNow(new Date(todos.created_at)) + ' ago' : 'Just now'}</p>
                    <button onClick={() => toggleOptions(todos.id)}>
                      <BiDotsHorizontalRounded className='text-2xl cursor-pointer'/>
                    </button>

                    {showOptions === todos.id && (
                      <div className="absolute right-0 mt-8 bg-white text-black rounded shadow-md z-10">
                        <button onClick={() => handleEdit(todos)} className="px-4 py-1 hover:bg-gray-200 w-32 text-left">✏️ Edit</button>
                        <button onClick={() => handleDelete(todos.id)} className="px-4 py-1 hover:bg-red-100 w-32 text-left">🗑️ Delete</button>
                      </div>
                    )}
                  </div>
                  <div className='px-5 py-2'>
                    <p>{todos.description}</p>
                  </div>
                </div>
              ))
            }
        </div>
    </div>
  );
}

export default App;
