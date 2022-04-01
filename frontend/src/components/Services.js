import React,{useEffect,useState} from 'react';
import {useParams} from "react-router-dom";
import "../assets/css/Services.css";
import http from "../axios/http";

function Services(props) {
    const service=useParams();

    useEffect(()=>{
        console.log(service)
    },[])
    return (
        <div className='services'>
           {service.service}
        </div>
    );
}

export default Services;