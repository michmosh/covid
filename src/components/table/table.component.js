import React , {useEffect , useState } from 'react';
import { useDispatch } from "react-redux";
import axios from 'axios';
import './table.component.scss';
import {getCountryData} from '../../actions/country.actions';

const Table = ()=>{
    const url = 'https://api.covid19api.com/summary';
    const [data, setData] = useState({countries:[]});
    const dispath = useDispatch();

    useEffect(()=>{
        axios.get(url).then(res=>{
            setData({countries:res.data.Countries});
        })
    } , []);

    const getCountry = (country)=>{
        dispath(getCountryData(country))
    }
    
    return (
        <div className="table-wrapper-scroll-y my-custom-scrollbar">
            <table className="table table-hover mb-0">
                <thead>
                <tr>
                    <th>Country</th>
                    <th>New Confirmed</th>
                    <th>New Deaths</th>
                    <th>new Recovered</th>
                    <th>Total Confirmed</th>
                    <th>Total Deaths</th>
                    <th>Total Recovered</th>
                </tr>
                </thead>
                <tbody>
                {
                    data.countries.map((country,index) => {
                        return (
                            <tr key={index} onClick={()=>getCountry(country)}>
                                <td>{country.Country}</td>
                                <td>{country.NewConfirmed}</td>
                                <td>{country.NewDeaths}</td>
                                <td>{country.NewRecovered}</td>
                                <td>{country.TotalConfirmed}</td>
                                <td>{country.TotalDeaths}</td>
                                <td>{country.TotalRecovered}</td>
                            </tr>
                        )
                    })
                }
            
                </tbody>
            </table>
        </div>
        
    )
}

export default Table