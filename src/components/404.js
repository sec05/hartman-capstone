import React from 'react'
import { NavLink } from 'react-router-dom'

export default function unknown() {
    return (
        <div style={{textAlign:"center"}}>
            <img src="https://wallpapercave.com/wp/wp1833702.jpg" className="backgroundIMG" alt="background"></img>
            <div className="error">
            <h1 style={{color:"white"}}>Page Not Found</h1>
            <NavLink to="/" ><h1 style={{color:"white"}}>Home</h1></NavLink>
            </div>
        </div>
    )
}
