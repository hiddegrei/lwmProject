import React,{useEffect,useState} from 'react';
import {useParams} from "react-router-dom";
import "../assets/css/Services.css";
import http from "../axios/http";

function Services(props) {
    const service=useParams();

    useEffect(()=>{
        console.log(service)
        fetchService()
    },[])
    function fetchService(){
        http.get(`/services/${service.service}`).then(res=>{
            console.log(res.data)
        })
    }
    return (
        <div className='services'>
           <div>{service.service}</div>
        </div>
    );
}

export default Services;