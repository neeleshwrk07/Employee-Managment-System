import React from 'react'
import 'lucide-react'
import CreateTask from '../Others/CreateTask'
import Header from '../Others/Header'
import AllTask from '../Others/AllTask'


const AdminDashboard = () => {
  return (
    
    
    <div className='h-screen w-full p-5'>
        <Header />
        <CreateTask />
        <AllTask />
    </div>
    
  )
}

export default AdminDashboard
