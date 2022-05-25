import React, { useLayoutEffect, useEffect, useState } from 'react';
import { useParams, useHistory } from "react-router-dom";
import "../../assets/css/ServicesBeta.css";

import http from "../../axios/http";
import ServiceSideBar from './ServiceSideBar';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

function ServicesBeta(props) {
    const service = useParams();
    const history = useHistory();
    const [data, setData] = useState([]);
    const [showData, setShowData] = useState(false)
    const [loading, setLoading] = useState(false);
    const [topText, setTopText] = useState(["What are you looking for?"]);
    const [qs, setQs] = useState([
        { id: "lunch", data: [["Order lunch"]] },
        { id: "laptop", data: [["Hardware for your office space"], ["Something for your laptop?", "Something for your phone?"]] },
        { id: "visitor", data: [["Register a visitor"]] },
        { id: "issue", data: [["Report an issue"]] }
    ])
    const [curQsIndex, setCurQsIndex] = useState()
    const [step, setStep] = useState(1)
    const [curQs, setCurQs] = useState([])

    const [keyIndex, setKeyIndex] = useState(0)

    useLayoutEffect(() => {
        firstQs()
        getPath()


    }, [service])

    function firstQs() {
        let arr = []
        qs.map((doc) => {
            arr.push(doc.data[0][0])
        })

        setCurQs(arr)

    }
    function updateStep() {

        let step2 = step - 1;
        setStep(step2)

        if (step2 === 1) {
            firstQs()
        } else {
            setCurQs(qs[curQsIndex].data[step2])

        }


    }
    function fetchService(key) {
        http.get(`/services/search/${key}`).then(res => {

            setData(res.data)
            console.log(res.data)
            setLoading(false)
            setShowData(true)
        })

    }

    function getPath(){
         const fData = new FormData();
      
        fData.append('main_index', 0);
        fData.append('path_index', 0);

         http.post('/serviceguide', fData).then(res => {
            console.log(res.data)
        }).catch((err) => console.log(err));

    }

    function isEmpty(obj) {
        for (var prop in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, prop)) {
                return false;
            }
        }

        return JSON.stringify(obj) === JSON.stringify({});
    }

    function updateQs(index) {
        if (step === 1) {
            setKeyIndex(index)
        }
        setCurQsIndex(index)
        if (qs[index].data.length >= step + 1) {
            setCurQs(qs[index].data[step])
            setStep(step + 1)
            // setCurQsIndex(index)
        } else {
            setLoading(true)
            console.log("hi")
            if (step === 1) {
                fetchService(qs[index].id)

            } else {
                fetchService(qs[keyIndex].id)

            }

            console.log(index)
        }
    }
    return (
        <div className='sb_main'>
            {!showData &&
                <div className='sb'>
                    <div className='sb_top'>{topText[0]}</div>
                    <div className='sb_mid '>
                        {step > 1 && <ArrowBackIosNewIcon onClick={() => {
                            updateStep()
                        }} color="primary" className='hover' />}

                    </div>

                    <div className='sb_body'>
                        <div className='sb_grid_container'>
                            {curQs.map((doc, index) => (
                                <div key={index} onClick={() => updateQs(index)} className='sb_block1'><p>{doc}</p></div>
                            ))}
                        </div>
                        {/* {loading&&<div className='sb_loading'>Loading...</div>} */}
                    </div>
                </div>}

            {showData &&
                <div className='sb_page'>
                    <div className='sb_page_top'>
                        <ArrowBackIosNewIcon onClick={() => window.location.reload()} color="primary" className='hover' />
                    </div>

                    <div className='sb_page_bottom'>
                        <div className="sb_grid_container">
                            {data.map((doc, index) => (

                                <div key={index} onClick={() => history.push(`/services/${doc.servicetype}/${doc.id}`)} className="sb_block">
                                    <div className="sb_block_top">{doc.title} </div>

                                    <div className="sb_block_bottom">
                                        <div className="sb_block_bottom_imgCon">
                                            {doc.image != "" && <img className="sb_block_bottom_imgCon_img" src={`/storage/${doc.image}`}></img>}

                                        </div>
                                        <div className="sb_block_bottom_text">{doc.description} </div>

                                    </div>



                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            }






        </div>
    );
}

export default ServicesBeta;