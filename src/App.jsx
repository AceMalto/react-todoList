import { useState } from 'react'
import { BiDotsHorizontalRounded } from "react-icons/bi";
function App() {
  
  return (
    <div className='flex flex-col font-prompt text-white bg-black h-screen py-10'>
        <div className='mx-auto w-full max-w-2xl border border-orange-400 space-y-5'>
            <h1 className='text-2xl font-bold md:text-3xl'>TO-DO LIST</h1>
            <div className="flex flex-col h-52 relative">
              <textarea
                className="pl-5 pt-3 border rounded-lg bg-transparent h-full resize-none"
              ></textarea>
              <div className="absolute bottom-2 right-2">
                <button className="bg-orange-400 w-20 py-1 rounded-md">Save</button>
              </div>
            </div>

            <div className='border rounded-lg'>
              <div className='flex justify-between px-3 py-3'>
                <p>
                  1232
                </p>
                <button className=''>
                  <BiDotsHorizontalRounded className='text-2xl cursor-pointer'/>
                </button>
              </div>
              <div className='px-5 py-2'>
                <p>asdsadsa</p>
              </div>
            </div>
        </div>
    </div>
  )
}

export default App
