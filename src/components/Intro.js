import React from 'react'
import BottomArrow from './arrows/bottom-arrow';
import TopArrow from "./arrows/top-arrow";
export default function Page2() {
    return (
     <div style={{textAlign:"center"}}>
           <TopArrow link="/"></TopArrow>
           <br/>
           <br/>
           <br/>
            <h1 className="claim-content">Anti-Semitic hate crimes have been on a rise in the United States recently. In 2018, the FBI reported that 57.8% of all hate crimes committed were targeting Jewish people. Modern anti-semitism is anti-Judaism because of its roots in the Gospels, its use in Mein Kampf, and modern alt-right rallying. </h1>
           <BottomArrow link="/claim1"></BottomArrow>
          </div>  

            
       
    )
}
