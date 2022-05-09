import React, {useLayoutEffect, useEffect, useState } from 'react';
import { useParams, useHistory } from "react-router-dom";
import "../../assets/css/ServicesBeta.css";
import "../../assets/css/Services.css";
import http from "../../axios/http";
import ServiceSideBar from './ServiceSideBar';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

function ServicesBeta(props) {
    const service = useParams();
    const history = useHistory();
    const [data, setData] = useState([]);
    const [showData,setShowData]=useState(false)
    const [loading, setLoading] = useState(true);
    const [topText,setTopText]=useState(["What are you looking for?"]);
    const [qs,setQs]=useState([
        [["Do you want to order lunch"]],
        [["Do you need hardware for your office space"],["Do you need something for your laptop?", "Do you need something for your phone?"]]
    ])
    const [curQsIndex,setCurQsIndex]=useState()
    const [step,setStep]=useState(1)
    const [curQs,setCurQs]=useState([])

    useLayoutEffect(() => {
        firstQs()
        
       
    }, [service])

    function firstQs(){
        let arr=[]
        qs.map((doc)=>{
            arr.push(doc[0][0])
        })
       
        setCurQs(arr)

    }
    function updateStep(){
       
        let step2=step-1;
        setStep(step2)
        
        if(step2===1){
            firstQs()
        }else{
            setCurQs(qs[curQsIndex][step2])

        }
        

    }
    function fetchService(key) {
        http.get(`/services/search/${key}`).then(res => {

            setData(res.data)
           console.log(res.data)
           setShowData(true)

        })
       
    }

    function isEmpty(obj) {
        for (var prop in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, prop)) {
                return false;
            }
        }

        return JSON.stringify(obj) === JSON.stringify({});
    }

    function updateQs(index){
        if(qs[index].length>=step+1){
            setCurQs(qs[index][step])
            setStep(step+1)
            setCurQsIndex(index)
        }else{
            console.log("hi")
            fetchService("laptop")
        }
        


    }
    return (
        <div className='sb_main'>
            {!showData?
            <div className='sb'>
            <div className='sb_top'>{topText[0]}</div>
            <div className='sb_mid '>
                {step>1&&<ArrowBackIosNewIcon onClick={()=>{
                    updateStep()}} color="primary" className='hover'/>}
               
            </div>

            <div className='sb_body'>
                <div className='sb_grid_container'>
                    {curQs.map((doc,index)=>(
                        <div key={index} onClick={()=>updateQs(index)} className='sb_block'>{doc}</div>
                    ))}
                </div>
            </div></div>:

<div className="service_grid_container">
{data.map((doc, index) => (

    <div key={index} onClick={() => history.push(`/services/${doc.servicetype}/${doc.id}`)} className="service_block">
        <div className="service_block_top">{doc.title} </div>

        <div className="service_block_bottom">
            <div className="service_block_bottom_imgCon">
                {doc.image != "" && <img className="service_block_bottom_imgCon_img" src={`/storage/${doc.image}`}></img>}

            </div>
            <div className="service_block_bottom_text">{doc.description} </div>

        </div>



    </div>
))}
</div>}
            



        </div>
    );
}

export default ServicesBeta;