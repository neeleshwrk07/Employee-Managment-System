import React, { useState } from 'react'
import 'lucide-react'

const Login = ({handleLogin}) => {

    const submitHandler = (e) => {
        e.preventDefault()
        handleLogin(email, password)
        setemail('')
        setpassword('')
        
          
    }
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')






  return (
    
    <div id='login1stDiv' className='text-black grid place-items-center flex-col  h-screen w-screen'>
          <div className=' border-4 p-10 rounded-3xl'>
            <svg className='flex justify-center items-center' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-log-in-icon lucide-log-in"><path d="m10 17 5-5-5-5"/><path d="M15 12H3"/><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/></svg>
            <p className=''>Login with Email</p>
            <br />
            <form className= 'flex flex-col' onSubmit={(e) => {submitHandler(e)}}>
            <input 
            value={email}
            onChange={(e) => {setemail(e.target.value)}}
            className='bg-gray-200 border-2 rounded-xl px-2 py-2 active:scale-105' type="email" placeholder='Enter your Email' />
            <br />
            <input 
            value={password}
            onChange={(e) => {setpassword(e.target.value)}}
            className='bg-gray-200 border-2 rounded-xl px-2 py-2 active:scale-105' type="password" placeholder='Enter your Password' />
            <br />
            <button className='border-2 rounded-xl px-2 py-2 active:scale-125 duration-75 hover:bg-gray-400 bg-gray-300 flex items-center justify-center'>Log In</button></form>
          </div>
      
    </div>


  )
}

export default Login
