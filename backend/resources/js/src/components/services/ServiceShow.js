import React, { useLayoutEffect, useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import "../../assets/css/ServiceShow.css";
import http from "../../axios/http";
import { useStateValue } from "../../Stateprovider";

function Services(props) {
    const [{ user }, dispatch] = useStateValue();
    const serviceid = useParams();
    const [data, setData] = useState([]);
    const [usersData, setUsersData] = useState([]);
    const [answer, setAnswer] = useState()

    useLayoutEffect(() => {


        fetchService()

    }, [])
    function fetchService() {
        http.get(`/services/${serviceid.servicetype}/${serviceid.serviceid}`).then(res => {

            setData(res.data)
        })
    }
    useEffect(() => {

        http.get('/allusers').then(res => {

            setUsersData(res.data)
        })





    }, [])

    function submitRequest(){
        // let serviceType = document.getElementById("serviceType").value;

        const fData = new FormData();
        fData.append('opened_by',user?.id)
        if(answer){
            fData.append('question_answer', JSON.stringify({question:data?.checks[0]?.question_title, answer:answer}));

        }
        fData.append('title',data?.service?.title)
        fData.append('image',data?.service?.image)
        fData.append('description',data?.service?.description)
        if(data?.service?.dropdowns.length>=1){
            
            let dropdowns=[]
            for(let i=0;i<data?.service?.dropdowns.length;i++){
                console.log(document.getElementById(`${data?.service?.dropdowns[i].title}`))
                dropdowns.push({title:data?.service?.dropdowns[i].title,answer:document.getElementById(`${data?.service?.dropdowns[i].title}`).value})

            }
            fData.append('dropdowns', JSON.stringify(dropdowns));

        }
        if(data?.checks[0]?.needs_approval_from){
            fData.append('needs_approval_from',data?.checks[0]?.needs_approval_from)
        }
        if(data?.checks[0]?.opened_for){
            fData.append('opened_for',document.getElementById("opened_for").value)
        }

           

        http.post('/submitservicerequest', fData).then(res => {
            console.log(res)
        }).catch((err) => console.log(err));

    }
    return (
        <div className='sshow'>
            <div className='sshow_top'>
                <div className='sshow_top_imgCon'>{data?.service?.image && <img className='sshow_top_img' src={`/storage/${data?.service?.image}`}></img>} </div>
                <div className='sshow_top_text'>
                    <div className='sshow_top_text_h'>{data?.service?.title}</div>
                    <div className='sshow_top_text_p'>{data?.service?.description}</div>

                </div>
                <div className=' sshow_submit'><div onClick={submitRequest} className='btn btn-primary'>submit request</div></div>

            </div>
            <div className='sshow_body'>
                <div className='sshow_grid_container'>
                    {data?.service?.dropdowns.map(doc => (
                        <div className='sshow_block'>
                            <div className='sshow_dropdowns_item'>
                                <label className='sshow_dropdowns_item'>{doc.title}</label>

                                <select id={doc.title} >
                                    {doc.options.map(option => (
                                        <option value={option}>{option}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    ))}
                    {(data?.checks != undefined && data?.checks[0]?.needs_approval_from) &&

                        <div className='sshow_block'>
                            <div className='sshow_checks_item'>
                                <div className='sshow_checks_item_h'>Needs approval from</div>
                                <div className='sshow_checks_item_p'>{data?.checks[0]?.needs_approval_from_name.name}</div>

                            </div>
                        </div>


                    }
                    {(data?.checks != undefined&&data?.checks[0]?.opened_by===1) &&

                        <div className='sshow_block'>
                            <div className='sshow_checks_item'>
                                <div className='sshow_checks_item_h'>Opened by</div>
                                <div className='sshow_checks_item_p'>{user?.name}</div>

                            </div>
                        </div>


                    }
                    {(data?.checks != undefined&&data?.checks[0]?.opened_for===1) &&

                        <div className='sshow_block'>
                            <div className='sshow_dropdowns_item'>
                                <label className='sshow_dropdowns_item'>Opened for</label>

                                <select id="opened_for" >
                                    {usersData?.map(userr => (
                                        <option value={userr.name}>{userr.name}</option>
                                    ))}


                                </select>
                            </div>
                        </div>


                    }
                    {(data?.checks != undefined&&data?.checks[0]?.question_title) &&


                        <div className='sshow_block'>
                            <div className='sshow_checks_item'>
                                <div className='sshow_checks_item_h'>{data?.checks[0]?.question_title}</div>
                                <input type="text" value={answer} onChange={(e) => setAnswer(e.target.value)} className='sshow_checks_item_p'></input>

                            </div>
                        </div>


                    }
                    






                </div>
                
            </div>
            






        </div>
    );
}

export default Services;