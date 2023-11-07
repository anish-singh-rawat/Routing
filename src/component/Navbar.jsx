import React, { useState } from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'

export default function Navbar() {
    const [topLinks, setTopLinks] = useState("Home")
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <div className="nav-parent">

                            <div className="top-links">
                                <Link to="/" onClick={()=>setTopLinks("Home")} 
                                className={`navbar-btn ${topLinks == "Home" ? "active" : ""}` }>  Home </Link>
                            </div>

                            <div className="top-links">
                            <Link to="/About" onClick={()=>setTopLinks("About")}
                             className={ `${topLinks == "About" ? "active" : ""} navbar-btn`}>  about </Link>

                            </div>
                            <div className="top-links">
                            <Link to="/Message" onClick={()=>setTopLinks("Message")}
                             className={`${topLinks == "Message" ? "active" : ""}  navbar-btn `}>  Message </Link>

                            </div>
                            <div className="top-links">
                            <Link to="/Contact" onClick={()=>setTopLinks("Contact")} 
                            className={  `${topLinks == "Contact" ? "active" : ""}  navbar-btn`}>  Contact </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
