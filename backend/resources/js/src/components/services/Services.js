import React,{useEffect,useState} from 'react';
import {useParams, useHistory} from "react-router-dom";
import "../../assets/css/Services.css";
import http from "../../axios/http";

function Services(props) {
    const service=useParams();
    const history=useHistory();
    const [data,setData]=useState([]);

    useEffect(()=>{
        console.log(service)
        fetchService()
    },[])
    function fetchService(){
        http.get(`/services/${service.service}`).then(res=>{
            console.log(res.data)
            setData(res.data)
        })
    }
    return (
        <div className='services'>
          

<div className="service_grid_container">
    {data.map((doc,index)=>(
    
            <div key={index} onClick={()=>history.push(`/services/${doc.servicetype}/${doc.id}`)} className="service_block"> 
                <div className="service_block_top">{doc.title} </div>

                    <div className="service_block_bottom">
                            <div className="service_block_bottom_imgCon">
                                 {/* <img class="service_block_bottom_imgCon_img" src="{{$item->image()}}"></img> */}
                            </div>
                    <div className="service_block_bottom_text">{doc.description} </div>
                                   
                </div>
                              
                                                        

            </div>
           ))}
                           
                                                   
                                                    
                                               
                           
    </div>
        </div>
    );
}

export default Services;