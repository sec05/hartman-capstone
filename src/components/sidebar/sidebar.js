import React from 'react'
import { NavLink, } from 'react-router-dom';
export default function Sidebar() {
    function openBar() 
    {
        document.getElementById("bar").style.left = "0%"
    }

    function closeBar() 
    {
        document.getElementById("bar").style.left = "-20%"
    }
    return (
        <div className="sidebar">
            <i onClick={openBar} className="fa fa-bars fa-2x opener" aria-hidden="true"></i>
            <div className="bar" id="bar">
                <div style={{ borderBottom: "1px solid white" }}><h1 style={{ fontSize: "1.25vw" }}><i className="fa fa-times " style={{ color: "white", padding: "5px", cursor: "pointer", }} onClick={closeBar} aria-hidden="true"></i>&nbsp;&nbsp;Capstone App</h1></div>
                <table style={{ width: "100%", tableLayout: "auto" }}>
                    <tbody>
                        <tr>
                            <td><NavLink to="/"onClick={closeBar}><h1>Home</h1></NavLink></td>
                        </tr>
                        <tr>
                            <td ><NavLink to="/intro" onClick={closeBar}><h1 >Introduction</h1></NavLink></td>
                        </tr>
                        <tr>
                            <td ><NavLink to="/claim1"onClick={closeBar}><h1 >Claim 1</h1></NavLink></td>
                        </tr>
                        <tr>
                            <td ><NavLink to="/claim2"onClick={closeBar}><h1 >Claim 2</h1></NavLink></td>
                        </tr>
                        <tr>
                            <td ><NavLink to="/claim3"onClick={closeBar}><h1 >Claim 3</h1></NavLink></td>
                        </tr>
                        <tr>
                            <td ><NavLink to="/end"onClick={closeBar}><h1>Conclusion </h1></NavLink></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

