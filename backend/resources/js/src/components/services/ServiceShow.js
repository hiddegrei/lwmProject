import React,{useLayoutEffect,useEffect,useState} from 'react';
import {useParams} from "react-router-dom";
import "../../assets/css/ServiceShow.css";
import http from "../../axios/http";
import {useStateValue} from "../../Stateprovider";

function Services(props) {
    const[{user},dispatch]=useStateValue();
    const serviceid=useParams();
    const [data,setData]=useState([]);
    const [usersData,setUsersData]=useState([])

    useLayoutEffect(()=>{
       
       
        fetchService()
        
    },[])
    function fetchService(){
        http.get(`/services/${serviceid.servicetype}/${serviceid.serviceid}`).then(res=>{
            
            setData(res.data)
        })
    }
    useEffect(()=>{
        if(data?.checks!=undefined){
            console.log(data.service.image)

            if(data.checks[0].opened_for){
                http.get('/allusers').then(res=>{
                    
                   setUsersData(res.data)
               })

            }

        }
       
    },[data])
    return (
        <div className='sshow'>
            <div className='sshow_top'>
                <div className='sshow_top_imgCon'> <img className='sshow_top_img' src={`/storage/${data?.service?.image}`}></img></div>
                <div className='sshow_top_text'>
                    <div className='sshow_top_text_h'>{data?.service?.title}</div>
                    <div className='sshow_top_text_p'>{data?.service?.description}</div>

                </div>

            </div>
            <div className='sshow_body'>
                <div className='sshow_grid_container'>
                {data?.service?.dropdowns.map(doc=>(
               <div className='sshow_block'>
               <div className='sshow_dropdowns_item'>
                   <label className='sshow_dropdowns_item'>{doc.title}</label>

                   <select >
                       {doc.options.map(option=>(
                           <option value={option}>{option}</option>
                       ))} 
                   </select>
               </div>
               </div>
           ))}
           {data?.checks!=undefined&&
           
            <div className='sshow_block'>
            <div className='sshow_checks_item'>
                        <div className='sshow_checks_item_h'>Needs approval from</div>
                        <div className='sshow_checks_item_p'>{data?.checks[0]?.needs_approval_from}</div>
                               
                     </div>
                     </div>

                     
}
{data?.checks!=undefined&&
           
           <div className='sshow_block'>
           <div className='sshow_checks_item'>
                        <div className='sshow_checks_item_h'>Opened by</div>
                        <div className='sshow_checks_item_p'>{user?.name}</div>
                               
                     </div>
                    </div>

                    
}
{data?.checks!=undefined&&
           
           <div className='sshow_block'>
            <div className='sshow_dropdowns_item'>
                            <label className='sshow_dropdowns_item'>Opened for</label>

                            <select id="needs_approval_from" >
                               {usersData?.map(userr=>(
                                   <option value={userr.name}>{userr.name}</option>
                               ))}
                                

                            </select>
                        </div>
                    </div>

                    
}
           
           
           


           
                </div>
            </div>
           
            
            
          


        </div>
    );
}

export default Services;