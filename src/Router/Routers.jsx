import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Message from '../Pages/Message'
import Contact from '../Pages/Contact'
import Navbar from '../component/Navbar'
import MessageOne from '../Pages/subMessages/MessageOne'
import MessageTwo from '../Pages/subMessages/MessageTwo'
import MessageThree from '../Pages/subMessages/MessageThree'

export default function Routers() {
  return (
    <>
    <Navbar/>
     <Routes>
     <Route path="/" element={<Home/>} />
     <Route path="/About" element={<About/>} />
     <Route path="/Contact" element={<Contact/>} />
     <Route path="/Message" element={<Message/>} />
     <Route path="/MessageOne" element={<MessageOne/>} />
     <Route path="/MessageTwo" element={<MessageTwo/>} />
     <Route path="/MessageThree" element={<MessageThree/>} />
     </Routes>
    </>
  )
}
