import React from 'react';
//import Link from 'react-router-dom';
import { NavLink } from "react-router-dom";
import BottomArrow from './arrows/bottom-arrow';

export default function title() {
  return (
    <div className="Title">
      <NavLink exact to="/info" className="Sources"><i className="fa fa-info-circle fa-2x" ></i></NavLink>
      <a className="github" href="https://github.com/sec05/hartman-capstone"> <i className="fa fa-github fa-2x" ></i></a>
      <div className="titleContainer">
        <pre>
          <h1><span className="rwd-line"> Capstone App </span></h1>
          <h5>By, Spencer Evans-Cole</h5>
        </pre>
      </div>
      <BottomArrow link="/page2"></BottomArrow>
    </div>
  )
}
