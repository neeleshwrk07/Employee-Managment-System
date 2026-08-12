import React, { useContext, useEffect, useState } from 'react'
import Login from './Components/Auth/Login'
import EmployeeDashboard from './Components/Dashboard/EmployeeDashboard'
import AdminDashboard from './Components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './Utils/LocalStorgae'
import { AuthContext } from './Context/AuthProvider'

const App = () => {

  useEffect(() => {
    setLocalStorage()
    getLocalStorage()
  },)
  const [user, setUser] = useState(null)
  const AuthData = useContext(AuthContext)

  useEffect(() => {
    if(AuthData){
      const loggedInUser = localStorage.getItem("loggedInUser")  
      if(loggedInUser){
        setUser(loggedInUser.role)
      }    
    }
  
   
  }, [AuthData])
  

  const handleLogin = (email, password) => {  
    if(email == 'admin@gmail.com' && password == 123) {
      setUser('admin');
      localStorage.setItem("loggedInUser", JSON.stringify({role : 'admin'}))
    }

      else if(AuthData && AuthData.employees.find((e) => email == e.email && password == e.password)){
        setUser('employee')
      localStorage.setItem("loggedInUser", JSON.stringify({role: 'employees'}))}
        else{
           alert("invalid credentials")
        }
      

    }
  
  
  



  return (
    <>
      { !user ? (<Login handleLogin={handleLogin} />) : (
      user == 'admin' ? <AdminDashboard/> : <EmployeeDashboard/>)}
  
    </>
  )
}

export default App
