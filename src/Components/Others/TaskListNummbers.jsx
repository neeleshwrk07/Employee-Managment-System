import React from 'react'

const TaskListNummbers = () => {
  return (
    <div>
      <div className='p-10 flex justify-between gap-2'>
        <div className='bg-blue-400 h-30 w-1/4 rounded-xl p-5 text-4xl font-bold text-white '>New Task
        <div>0</div>
        </div>

        <div className='bg-green-500 h-30 w-1/4 rounded-xl p-5 text-4xl font-bold text-white'>Completed
        <div>0</div>
        </div>

        <div className='bg-yellow-300 h-30 w-1/4 rounded-xl p-5 text-4xl font-bold text-white'>Accepted
        <div>0</div>
        </div>

        <div className='bg-red-500 h-30 w-1/4 rounded-xl p-5 text-4xl font-bold text-white'>Failed
        <div>0</div>
        </div>

        </div>
    </div>
  )
}

export default TaskListNummbers
