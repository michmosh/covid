import React,{useRef, useEffect, useState } from 'react';
import {useSelector } from 'react-redux';
import './chart.component.scss'
import Axios from 'axios';
import {renderLine , renderBar} from '../../utils/charts.utils';

const ChartComponent = ()=>{
    let selectedCountry = useSelector(state => state.countries.selectedCountry);
    const chartRef = useRef(null); 
    let graphStyle = "line";
    const [datesArray, setDatesArray] = useState([]);
    const [casesArray, setCasesArray] = useState([]);
    useEffect(() => {
        Axios.get(`https://api.covid19api.com/dayone/country/${selectedCountry}`)
        .then(res=>{
            let dates = [],cases = [];
            res.data.forEach(el=>{
                let date = new Date(el.Date);
                dates.push( date.toDateString());
                cases.push(el.Active);
            });
            const ref = chartRef.current.getContext("2d");
            setDatesArray(dates);
            setCasesArray(cases)
            renderLine(ref,{dates,cases})
        })
       
      }, [chartRef,selectedCountry]);

    const switchGraphStyle = ()=>{
        const ref = chartRef.current.getContext("2d");
        switch(graphStyle){
            case "line":
                graphStyle = "bar";
                return renderBar(ref , {dates:datesArray , cases:casesArray});
            default :
                graphStyle = "line";
                return renderLine(ref , {dates:datesArray , cases:casesArray});
        }
        
    }
    
    return (
        <div className="chart-wrapper">
            <h2 style={{textAlign:"center" , textTransform:'uppercase'}}>{selectedCountry}</h2>
            <canvas height="120" id="myChart"  ref={chartRef}  />
            <button className="btn btn-primary" onClick={()=>switchGraphStyle()}> switch graph</button>
        </div>
    )
}

export default ChartComponent;