import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Jobdetails from './pages/Jobdetails'
import Jobs from './pages/Jobs'
import Login from './pages/Login'
import Profile from './pages/Profile'
import Register from './pages/Register'
import Joblocation from './pages/Joblocation'
import Resume from './pages/Resume'
import Contactus from './pages/Contactus'

const App = () => {


  return <>

  <BrowserRouter>
  <Navbar/>

  <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/d' element={<Dashboard/>}></Route>
    <Route path='/j' element={<Jobdetails msg="this is fullstack developer page"/>}></Route>
    <Route path='/job' element={<Jobs/>}></Route>
    <Route path='/l' element={<Login/>}></Route>
    <Route path='/p' element={<Profile/>}></Route>
    <Route path='/r' element={<Register/>}></Route>
    <Route path='/location' element={<Joblocation/>}></Route>
    <Route path='/resume' element={<Resume/>}></Route>
    <Route path='/contact' element={<Contactus  phn="6289619338" email="raj@gmail.com"/>}></Route>

  </Routes>

  <Footer/>
  </BrowserRouter>
  
  
  
  </>
}

export default App