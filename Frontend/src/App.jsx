import React from 'react'
import Home from './pages/Home/Home'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login/Login'
import SignUp from './pages/SignUp/SignUp'


 
const App = () => {
  
  return (
    <div>
    
  <Routes>
  <Route path='/dashboard' element= {<Home/>}/>
  <Route path='/login' element= {<Login/>}/>
  <Route path='/signup' element= {<SignUp/>}/>
  
  </Routes>

    </div>
  )
}

export default App
