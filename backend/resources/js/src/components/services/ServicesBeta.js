import React, { useLayoutEffect, useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import "../../assets/css/ServicesBeta.css";

import http from "../../axios/http";
import ServiceSideBar from "./ServiceSideBar";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useStateValue } from "../../Stateprovider";

function ServicesBeta(props) {
    const [{ user, isAdmin }, dispatch] = useStateValue();
    const service = useParams();
    const history = useHistory();
    const [elements, setElements] = useState([]);
    const [data, setData] = useState([]);
    const [showData, setShowData] = useState(false);
    const [loading, setLoading] = useState(true);
    const [topText, setTopText] = useState(["What are you looking for?"]);

    const [step, setStep] = useState(1);
    const [curQs, setCurQs] = useState([]);
    const [pathIndexs, setPathIndexs] = useState({
        mainIndex: 0,
        pathIndex: 0,
    });

    useEffect(() => {
        getAll();
        console.log("hi");
    }, []);

    function getAll() {
        http.get(`/serviceguide`).then((res) => {
            setData(res.data);

            setLoading(false);
            console.log(res.data);
        });
    }

    useEffect(() => {
        firstQs();
    }, [data]);

    function firstQs() {
        // qs.map((doc) => {
        //     arr.push(doc.data[0][0]);
        // });
        let arr = data.filter((doc) => doc.path_index === 0);
        console.log(arr);

        setCurQs(arr);
    }

    function fetchService(key) {
        http.get(`/services/search/${key}`).then((res) => {
            setData(res.data);

            setLoading(false);
            setShowData(true);
        });
    }

    // function updatePath(index, doc) {
    //     if (doc.is_end) {
    //         fetchService(doc.service_key);
    //     } else {
    //         let arr = elements.filter(
    //             (elm) =>
    //                 elm.main_index === doc.main_index &&
    //                 elm.path_index === doc.path_index + 1
    //         );
    //         console.log(arr);

    //         setCurQs(arr);
    //     }
    // }
    function updatePathNext(index, doc) {
        if (doc.is_end === 1) {
            fetchService(doc.service_key);
        } else {
            let arr = data.filter(
                (elm) =>
                    elm.main_index === doc.main_index &&
                    elm.path_index === doc.path_index + 1
            );
            // console.log(arr);

            setCurQs(arr);
            if (arr.length === 0) {
                setPathIndexs({
                    mainIndex: doc.main_index,
                    pathIndex: doc.path_index + 1,
                });
            } else {
                setPathIndexs({
                    mainIndex: doc.main_index,
                    pathIndex: doc.path_index + 1,
                });
            }
        }
    }
    function updatePathPrev() {
        let arr = [];

        if (curQs[0].path_index === 1) {
            arr = data.filter((elm) => elm.path_index === 0);
            setPathIndexs({ mainIndex: data.length, pathIndex: 0 });
        } else {
            arr = data.filter(
                (elm) =>
                    elm.main_index === curQs[0].main_index &&
                    elm.path_index === curQs[0].path_index - 1
            );
            setPathIndexs({
                mainIndex: curQs[0].main_index,
                pathIndex: curQs[0].path_index - 1,
            });
        }
        if (arr.length > 0) {
            setCurQs(arr);
        }

        // console.log(arr);
    }
    return (
        <div className="sb_main">
            {!showData && (
                <div className="sb">
                    <div className="sb_top">{topText[0]}</div>
                    {isAdmin === 1 && (
                        <div
                            onClick={() => history.push("/servicebeta/edit")}
                            className="btn btn-warning sshow_btn"
                        >
                            Edit
                        </div>
                    )}
                    <div className="sb_mid ">
                        {pathIndexs.pathIndex > 0 && (
                            <ArrowBackIosNewIcon
                                onClick={() => {
                                    updatePathPrev();
                                }}
                                color="primary"
                                className="hover"
                            />
                        )}
                    </div>

                    <div className="sb_body">
                        {loading && <div>loading...</div>}
                        <div className="sb_grid_container">
                            {curQs.map((doc, index) => (
                                <div
                                    key={index}
                                    onClick={() => updatePathNext(index, doc)}
                                    className="sb_block1"
                                >
                                    <p>{doc.question}</p>
                                </div>
                            ))}
                            {/* {elements.map((doc, index) => (
                                <div
                                    key={index}
                                    onClick={() => updateQs(index)}
                                    className="sb_block1"
                                >
                                    <p>{doc.question}</p>
                                </div>
                            ))} */}
                        </div>
                        {/* {loading&&<div className='sb_loading'>Loading...</div>} */}
                    </div>
                </div>
            )}

            {showData && (
                <div className="sb_page">
                    <div className="sb_page_top">
                        <ArrowBackIosNewIcon
                            onClick={() => window.location.reload()}
                            color="primary"
                            className="hover"
                        />
                    </div>

                    <div className="sb_page_bottom">
                        <div className="sb_grid_container">
                            {data.map((doc, index) => (
                                <div
                                    key={index + Math.random() * 1000}
                                    onClick={() =>
                                        history.push(
                                            `/services/${doc.servicetype}/${doc.id}`
                                        )
                                    }
                                    className="sb_block"
                                >
                                    <div className="sb_block_top">
                                        {doc.title}{" "}
                                    </div>

                                    <div className="sb_block_bottom">
                                        <div className="sb_block_bottom_imgCon">
                                            {doc.image != "" && (
                                                <img
                                                    className="sb_block_bottom_imgCon_img"
                                                    src={`/storage/${doc.image}`}
                                                ></img>
                                            )}
                                        </div>
                                        <div className="sb_block_bottom_text">
                                            {doc.description}{" "}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ServicesBeta;
