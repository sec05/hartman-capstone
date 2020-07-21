import React from 'react'
import { NavLink } from "react-router-dom";

export default function BottomArrow(props) {
    return (
        <NavLink exact to={props.link} className="bottom-arrow"><i className="fa fa-arrow-down fa-3x"></i></NavLink>
    )
}
