import React from 'react'
import BottomArrow from './arrows/bottom-arrow';
import TopArrow from "./arrows/top-arrow";
import Chart from "chart.js"
import ChartDataLabels from "chartjs-plugin-labels";
export default function claim1() {
    Chart.defaults.global.defaultFontColor = 'black';
    Chart.defaults.global.defaultFontSize = window.screen.height/65;
    
 
    let ctx = 'pie-chart';
    var options = {
        plugins: [ChartDataLabels],
  options: {
    plugins: {
      datalabels: {
        color: '#000000',
        formatter: (value) => {
          return value + '%'
        }
      }
    }
  },
        title: {
            display: true,
            text: 'Hate Crimes per Religon in 2018',
            position: 'top',
            color: 'black',
        },
        
        tooltips: {
            enabled: false,
        },

    };
    // eslint-disable-next-line
    const pieChart = new Chart(ctx, {
        type: 'pie',
        data: {
        labels: ["Jewish", "Muslim", "Sikh","Other"],
        
        datasets: [{
            fill: true,
            backgroundColor: [
                '#1b6ca8',
                 '#f3c623',
                '#84a9ac',
                '#bbf1c8',
               
            ],
            data: [57.8,14.5,4.1,23.6],

            borderColor: ['black', 'black', 'black',"black"],
            borderWidth: [2, 2, 2]
        }]
    },
      
        options: options
    });
    return (
        <div className="claim">
            <TopArrow link="/claim2"></TopArrow>
            <div className="claim-content">
           
                <h1>Modern Anti-Judaism </h1> <div className="chart-container"><canvas className="chart" id="pie-chart"></canvas></div>
<h2>Recently anti-semitism has been at its highest point in the United States. The New York Police Department reported its largest increase in antisemitic hate crimes in the past year since 1992. In August 2017, the United States saw a manifestation of anti-semitism at the “Unite the Right” rally in Charlottesville, Virginia. Where marchers waved swastika flags and yelled chants such as “Jews will not replace us.” Recently the swastika has become a symbol of the alt-right and images of swastikas on masks amid the COVID-19 pandemic have not been uncommon. The swastika is being used as a way to manifest Hitlers ideas of racial superiority further continuing the criticisms and beliefs of Jews from the Gospels. Since the swastika among several objects is a symbol of the anti-semitic movement Hitler’s ideas that stemmed from the Gospels and Kant are part of modern anti-semitism which makes anti-semitism inherently anti-Judaism. </h2>            
</div>
        
        <BottomArrow link="/end"></BottomArrow>
    </div>
    )
}
