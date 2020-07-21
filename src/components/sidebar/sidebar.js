import React from 'react'
import {NavLink, } from 'react-router-dom';
export default function Sidebar () {
    function openBar()
    {
        document.getElementById("bar").style.width="12%"
      
    }

    function closeBar()
    {
        document.getElementById("bar").style.width="0%"
    }
    return (
        <div className="sidebar">
         <i onClick={openBar} className="fa fa-bars fa-2x opener" aria-hidden="true"></i>
          <div className="bar"id="bar">
              <div style={{borderBottom:"1px solid white"}}><h1 style={{fontSize:"1.25vw"}}><i className="fa fa-times " style={{color:"white", padding:"5px", cursor:"pointer",}} onClick={closeBar} aria-hidden="true"></i>&nbsp;&nbsp;Capstone App</h1></div>
              <table style={{width:"100%", tableLayout:"auto"}}>

                  <tbody>
                        <tr>
                        <td><NavLink to="/"><h1 id="/">Home</h1></NavLink></td>
                        
                        </tr>
                        <tr><td ><NavLink  to="/page2"><h1 id="/page2">page 2</h1></NavLink></td></tr>
                  </tbody>
              
              </table>
            
            
          </div>
        </div>
    )
}

