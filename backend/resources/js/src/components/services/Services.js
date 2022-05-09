import React, {useEffect, useState} from 'react';
import {useParams, useHistory} from "react-router-dom";
import "../../assets/css/Services.css";
import http from "../../axios/http";
import ServiceSideBar from './ServiceSideBar';

function Services(props) {
    const service = useParams();
    const history = useHistory();
    const [data, setData] = useState([]);
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log("hoi", service)
        fetchService()
        search('valentine')
    }, [service])

    function fetchService() {
        setData([])
        if (isEmpty(service)) {
            http.get(`/services`).then(res => {
                console.log(res.data)
                setData(res.data)
                setLoading(false)
            })
        } else {
            http.get(`/services/${service.service}`).then(res => {
                console.log(res.data)
                setData(res.data)
                setLoading(false)
            })
        }
    }

    function isEmpty(obj) {
        for (var prop in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, prop)) {
                return false;
            }
        }
        return JSON.stringify(obj) === JSON.stringify({});
    }

    function search(query) {
        http.post(`/services/${query}`).then(res => {
            // for (let i = 0; i < res.data.length; i++) {
            //     setResults([...results, res.data[i].title]);
            //     // console.log(res.data[i].title);
            // }
            setResults(res.data);
        }).catch((err) => console.log(err));

        return results;
    }

    return (<div className='services'>
            <div className="services_left">
                <ServiceSideBar onclick={() => {
                    fetchService()
                    setLoading(true)
                }}/>
            </div>
            <div className="services_right">
                <div className='services_right_header'>
                    {isEmpty(service) ? <div className='services_right_header_text'>Popular items</div> :
                        <div className='services_right_header_text'>{service.service} {results.map(doc=>(
                            <div>{doc.title}</div>))} </div>}
                </div>
                {loading ? <div className="service_loading">Loading...</div> : <div className="service_grid_container">
                    {data.map((doc, index) => (
                        <div key={index} onClick={() => history.push(`/services/${doc.servicetype}/${doc.id}`)}
                             className="service_block">
                            <div className="service_block_top">{doc.title} </div>
                            <div className="service_block_bottom">
                                <div className="service_block_bottom_imgCon">
                                    {doc.image != "" && <img className="service_block_bottom_imgCon_img"
                                                             src={`/storage/${doc.image}`}></img>}
                                </div>
                                <div className="service_block_bottom_text">{doc.description} </div>
                            </div>
                        </div>))}
                </div>}
            </div>
        </div>);
}

export default Services;
