import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Message from '../Pages/Message'
import Contact from '../Pages/Contact'
import Navbar from '../component/Navbar'
import AllMessages from '../Pages/AllMessages'

export default function Routers() {
  return (
    <>
    <Navbar/>
     <Routes>
     <Route path="/" element={<Home/>} />
     <Route path="/About" element={<About/>} />
     <Route path="/Contact" element={<Contact/>} />
     <Route path="/Message" element={<Message/>} />
     <Route path="/Message/:MessageId" element={<AllMessages/>}/>
     </Routes> 
    </>
  )
}
