import React from 'react'
import 'lucide-react'

const CreateTask = () => {
  return (
    <>
    
    <div className=''>
       
       <form className=' h-screen w-full flex flex-row justify-center items-center gap-5' >
         <div>
        <div className='flex flex-col justify-center items-center'>
        <h3 className='font-bold text-2xl'>Task Title</h3>
        <input type="text" placeholder='Make UI design' className='bg-gray-400 rounded-xl border-2 p-2' />
        </div>

        

        <div className='flex flex-col justify-center items-center'>
        <h3 className='font-bold text-2xl'>Date</h3>
        <input type="date" name="" id="" className='bg-gray-400 rounded-xl border-2 p-2' /> 
        </div>

        <div className='flex flex-col justify-center items-center'>
        <h3 className='font-bold text-2xl'>Assign To</h3>
        <input type="text" name="" id="" placeholder=''  className='bg-gray-400 rounded-xl border-2 p-2'/>
        </div>

        <div className='flex flex-col justify-center items-center'>
        <h3 className='font-bold text-2xl'>Category</h3>
        <input type="text" name="" id="" placeholder='Design, Development, etc' className='bg-gray-400 rounded-xl border-2 p-2'/>
        </div>
      </div>

      <div>
        <div className='flex flex-col justify-center items-center'>
        <h3 className='font-bold text-2xl'>Description</h3>
        <textarea name="" id="" className='bg-gray-400 rounded-xl border-2 p-2'></textarea>
        </div>
      </div>



        <button className='bg-sky-500 p-5 rounded-4xl active:scale-110'>Create task</button>
       </form>
    </div>
    </>
  )
}

export default CreateTask
