import React from 'react'
import {useLocation, NavLink, } from 'react-router-dom';
//import $ from "jquery";
export default function Sidebar () {
    function openBar()
    {
        document.getElementById("bar").style.width="12%"
      
    }

    function closeBar()
    {
        document.getElementById("bar").style.width="0%"
    }
/*    function pastBar()
    {
        console.log("updatebar")
        if(pastLocation!==undefined)
        {
            document.getElementById(pastLocation).style.color="white";
            console.log("resetting colors")
        }
    }
    React.useEffect(() => {
        console.log('Location changed');
      }, [currentLocation]);
    
    function updateBar()
    {
       
        if(currentLocation.pathname==="/")
    {
        pastLocation = "home";
    
        document.getElementById("home").style.color = "yellow";
        document.getElementById("home-carret").style.color = "yellow";
    }
    }
    */
  /*function dropdown()
  {
      const degree = -90;
    $("1carret").animate({
        '-webkit-transform': 'rotate(' + degree + 'deg)',
        '-moz-transform': 'rotate(' + degree + 'deg)',
        '-ms-transform': 'rotate(' + degree + 'deg)',
        '-o-transform': 'rotate(' + degree + 'deg)',
        'transform': 'rotate(' + degree + 'deg)',
}, 3000); 
console.log('dropdown function');
  }
  const car1 = "#1carret"*/
    return (
        <div className="sidebar">
         <i onClick={openBar} className="fa fa-bars fa-2x opener" aria-hidden="true"></i>
          <div className="bar"id="bar">
              <div style={{borderBottom:"1px solid white"}}><h1 style={{fontSize:"1.25vw"}}><i className="fa fa-times " style={{color:"white", padding:"5px", cursor:"pointer",}} onClick={closeBar} aria-hidden="true"></i>&nbsp;&nbsp;Capstone App</h1></div>
              <table style={{width:"100%", tableLayout:"auto"}}>

                  <tbody>
                        <tr>
                        <td><NavLink to="/"><h1 id="/">Home</h1></NavLink></td>
                        <td><td></td></td>
                        
                       
                        </tr>
                        <tr><td ><NavLink to="/page2"><h1 id="/page2">page 2</h1></NavLink></td><td></td></tr>
                  </tbody>
              
              </table>
            
            
          </div>
        </div>
    )
}

