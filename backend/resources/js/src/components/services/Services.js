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
        http.get('/services').then(res=>{
            console.log(res.data)
            setData(res.data)
        })
    }
    return (
        <div className='services'>
          

<div class="service_grid_container">
    {data.map((doc,index)=>(
    
            <div key={index} onClick={()=>history.push(`/service/${doc.id}`)} class="service_block"> 
                <div class="service_block_top">{doc.title} </div>

                    <div class="service_block_bottom">
                            <div class="service_block_bottom_imgCon">
                                 {/* <img class="service_block_bottom_imgCon_img" src="{{$item->image()}}"></img> */}
                            </div>
                    <div class="service_block_bottom_text">{doc.description} </div>
                                   
                </div>
                              
                                                        

            </div>
           ))}
                           
                                                   
                                                    
                                               
                           
    </div>
        </div>
    );
}

export default Services;