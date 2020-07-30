import React from 'react';
import BottomArrow from './arrows/bottom-arrow';

export default function title() {
  return (
    <div>
    <video autoPlay={true} width="100%"src={process.env.PUBLIC_URL + '/titlebackground.mp4'} className="title-background" loop={true}></video>
    <div className="Title">
      <div className="titleContainer">

        <h1 className="rwd-line">How does anti-Judaism manifest today?
         <br /> <h5><br />By, Spencer Evans-Cole</h5></h1>
      </div>
      <BottomArrow link="/intro"></BottomArrow>
    </div>
    </div>
  )
}
