import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import "../../assets/css/Services.css";
import http from "../../axios/http";
import ServiceSideBar from "./ServiceSideBar";

function Services(props) {
    const service = useParams();
    const history = useHistory();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log("hoi", service);
        fetchService();
    }, [service]);

    function fetchService() {
        setData([]);
        if (isEmpty(service)) {
            http.get(`/services`).then((res) => {
                console.log(res.data);
                setData(res.data);
                setLoading(false);
            });
        } else {
            http.get(`/services/${service.service}`).then((res) => {
                console.log(res.data);
                setData(res.data);
                setLoading(false);
            });
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
    return (
        <div className="services">
            <div className="services_top">
                <div
                    onClick={() => history.push("/servicebeta")}
                    className="btn btn-primary services_btn"
                >
                    service beta
                </div>
            </div>

            <div className="services_bottom">
                <div className="services_left">
                    <ServiceSideBar
                        onclick={() => {
                            setLoading(true);
                            fetchService();
                        }}
                    />
                </div>
                <div className="services_right">
                    <div className="services_right_header">
                        {isEmpty(service) ? (
                            <div className="services_right_header_text">
                                Popular items
                            </div>
                        ) : (
                            <div className="services_right_header_text">
                                {service.service}
                            </div>
                        )}
                    </div>

                    {loading ? (
                        <div className="service_loading">Loading...</div>
                    ) : (
                        <div className="service_grid_container">
                            {data.map((doc, index) => (
                                <div
                                    key={index}
                                    onClick={() =>
                                        history.push(
                                            `/services/${doc.servicetype}/${doc.id}`
                                        )
                                    }
                                    className="service_block"
                                >
                                    <div className="service_block_top">
                                        {doc.title}{" "}
                                    </div>

                                    <div className="service_block_bottom">
                                        <div className="service_block_bottom_imgCon">
                                            {doc.image != "" && (
                                                <img
                                                    className="service_block_bottom_imgCon_img"
                                                    src={`/storage/${doc.image}`}
                                                ></img>
                                            )}
                                        </div>
                                        <div className="service_block_bottom_text">
                                            {doc.description}{" "}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Services;
