import React,{useLayoutEffect,useEffect,useState} from 'react';
import {useParams} from "react-router-dom";
import "../assets/css/ServiceShow.css";
import http from "../axios/http";

function Services(props) {
    const serviceid=useParams();
    const [data,setData]=useState([]);

    useLayoutEffect(()=>{
       
        fetchService()
    },[])
    function fetchService(){
        http.get(`/services/${serviceid.serviceid}`).then(res=>{
            // console.log(res.data)
            setData(res.data)
        })
    }
    useEffect(()=>{
        console.log(data.dropdowns)
    },[data])
    return (
        <div className='sshow'>
            <div className='sshow_title'>{data.title}</div>
            <div className='sshow_description'>{data.description}</div>
           
           <div className='sshow_dropdowns'>
           {data.dropdowns!=undefined&&
           <div>
            {data.dropdowns.map(doc=>(
               
                <div className='sshow_dropdowns_item'>
                    <label className='sshow_dropdowns_item'>{doc.title}</label>

                    <select >
                        {doc.options.map(option=>(
                            <option value={option}>{option}</option>
                        ))} 
                    </select>
                </div>
            ))}
            </div>}
            </div>
            
          


        </div>
    );
}

export default Services;