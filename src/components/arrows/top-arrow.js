import React from 'react'
import { NavLink } from "react-router-dom";

export default function TopArrow(props) {
    return (
        <NavLink exact to={props.link} className="top-arrow"><i className="fa fa-arrow-up fa-3x"></i></NavLink>
    )
}
