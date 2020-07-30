import React from 'react'
import { NavLink } from "react-router-dom";
export default function information() {
    return (
        <div>
            <main role="main">
                <div className="container marketing">
                    <NavLink exact to="/" className="home"><i className="fa fa-home fa-2x" ></i></NavLink>
                    <h1 className="title">Information</h1>

                    <hr></hr>
                    <h2 className="title">Development</h2>
                    <ul className="list">
                        <li><a href="https://fontawesome.com/" target="noopener">Font Awesome 5.13.1</a></li>
                        <li><a href="https://reactjs.org/" target="noopener">React 16.13.1</a></li>
                        <li><a href="https://reactrouter.com/" target="noopener">React Router 5.2</a></li>
                        

                    </ul>
                    
                </div>
            </main>
        </div>
    )
}
