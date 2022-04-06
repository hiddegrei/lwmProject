import React,{useEffect,useState} from 'react';
import {useParams, useHistory} from "react-router-dom";
import "../../assets/css/ServiceSideBar.css";
import http from "../../axios/http";

function ServiceSideBar({onclick}) {
    const history=useHistory();

    function handleClick(value){
        history.push(`/services/${value}`)
        onclick()

    }
    return (
        <div className='serviceSide'>
            <div className='serviceSide_h'><p>Categories</p></div>
            <div className='serviceSide_items'>
                <div onClick={()=>handleClick("businesssupport")} className='serviceSide_item'><p>Business support</p></div>
                <div onClick={()=>handleClick("facilities")} className='serviceSide_item'><p>Facilities</p></div>
                <div onClick={()=>handleClick("finance")} className='serviceSide_item'><p>Finance</p></div>
                <div onClick={()=>handleClick("homeoffice")} className='serviceSide_item'><p>Home office</p></div>
                <div onClick={()=>handleClick("hrpayroll")} className='serviceSide_item'><p>HR  Payroll</p></div>
                <div onClick={()=>handleClick("itservices")} className='serviceSide_item'><p>IT services</p></div>
                <div onClick={()=>handleClick("masterdata")} className='serviceSide_item'><p>Masterdata</p></div>
               
            </div>
            
        </div>
    );
}

export default ServiceSideBar;