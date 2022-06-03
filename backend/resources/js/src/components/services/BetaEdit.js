import React, { useLayoutEffect, useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import "../../assets/css/BetaEdit.css";

import http from "../../axios/http";
import ServiceSideBar from "./ServiceSideBar";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useStateValue } from "../../Stateprovider";

function BetaEdit(props) {
    const [{ user, isAdmin }, dispatch] = useStateValue();
    const service = useParams();
    const history = useHistory();
    const [data, setData] = useState([]);
    // const [data, setData] = useState([]);
    const [showData, setShowData] = useState(false);
    const [loading, setLoading] = useState(true);
    const [topText, setTopText] = useState(["What are you looking for?"]);

    const [moving, setMoving] = useState(false);
    const [curQs, setCurQs] = useState([]);

    const [mainIndex, setMainIndex] = useState();
    const [pathIndex, setPathIndex] = useState();
    const [qs, setQs] = useState();
    const [isEnd, setIsEnd] = useState();
    const [serviceKey, setServiceKey] = useState();

    useEffect(() => {
        getAll();
    }, []);

    function createNew() {
        const fData = new FormData();
        fData.append("main_index", mainIndex);
        fData.append("path_index", pathIndex);
        fData.append("question", qs);
        fData.append("is_end", isEnd);
        fData.append("service_key", serviceKey);

        http.post("/serviceguide/create", fData)
            .then((res) => {
                console.log(res);
                setMainIndex("");
                setPathIndex("");
                setQs("");
                setIsEnd("");
                setServiceKey("");
                history.push("/servicebeta");
            })
            .catch((err) => console.log(err));
    }

    function check(val, index) {
        console.log(index);
        if (
            val.path_index === elm.path_index &&
            val.main_index === elm.main_index
        ) {
        }
    }
    function changeQs(elm, value) {
        let newArr = [...data];

        for (let i = 0; i < data.length; i++) {
            if (
                data[i].path_index === elm.path_index &&
                data[i].main_index === elm.main_index
            ) {
                newArr[i].question = value;
            }
        }
        setData(newArr);

        let newArr2 = [...curQs];
        for (let i = 0; i < newArr2.length; i++) {
            if (
                newArr2[i].path_index === elm.path_index &&
                newArr2[i].main_index === elm.main_index
            ) {
                newArr2[i].question = value;
            }
        }
        setCurQs(newArr2);

    
    }
    function changeSk(elm, value) {
        let newArr = [...data];

        for (let i = 0; i < data.length; i++) {
            if (
                data[i].path_index === elm.path_index &&
                data[i].main_index === elm.main_index
            ) {
                newArr[i].service_key = value;
            }
        }
        setData(newArr);

        let newArr2 = [...curQs];
        for (let i = 0; i < newArr2.length; i++) {
            if (
                newArr2[i].path_index === elm.path_index &&
                newArr2[i].main_index === elm.main_index
            ) {
                newArr2[i].service_key = value;
            }
        }
        setCurQs(newArr2);
    }
    function changeIsEnd(elm, value) {
        let newArr = [...data];

        for (let i = 0; i < data.length; i++) {
            if (
                data[i].path_index === elm.path_index &&
                data[i].main_index === elm.main_index
            ) {
                newArr[i].is_end = value;
            }
        }
        setData(newArr);

        let newArr2 = [...curQs];
        for (let i = 0; i < newArr2.length; i++) {
            if (
                newArr2[i].path_index === elm.path_index &&
                newArr2[i].main_index === elm.main_index
            ) {
                newArr2[i].is_end = value;
            }
        }
        setCurQs(newArr2);
    }

    function saveChanges() {
        data.map((doc, index) => {
            const fData = new FormData();
            fData.append("main_index", doc.main_index);
            fData.append("path_index", doc.path_index);
            fData.append("question", doc.question);
            fData.append("is_end", doc.is_end);
            fData.append("service_key", doc.service_key);
            http.post(`/serviceguide/update/${doc.id}`, fData)
                .then((res) => {
                    console.log(res);
                    history.push("/servicebeta");
                })
                .catch((err) => console.log(err));
        });
    }

    function removeElm(id) {
        http.post(`/serviceguide/remove/${id}`)
            .then((res) => {
                history.push("/servicebeta");
            })
            .catch((err) => console.log(err));
    }

    function getAll() {
        http.get(`/serviceguide`).then((res) => {
            setData(res.data);

            setLoading(false);
            console.log(res.data);
        });
    }

    useEffect(() => {
        if (!moving) {
            firstQs();
        }
    }, [data]);

    function firstQs() {
        // qs.map((doc) => {
        //     arr.push(doc.data[0][0]);
        // });
        let arr = data.filter((doc) => doc.path_index === 0);
        console.log(arr);

        setCurQs(arr);
    }

    function updatePath(index, doc) {
        if (doc.is_end) {
        } else {
            let arr = data.filter(
                (elm) =>
                    elm.main_index === doc.main_index &&
                    elm.path_index === doc.path_index + 1
            );
            console.log(arr);
            setMoving(true);
            setCurQs(arr);
        }
    }
    return (
        <div className="be">
            {/* <div className="sb_mid ">
                        {step > 1 && (
                            <ArrowBackIosNewIcon
                                onClick={() => {
                                    updateStep();
                                }}
                                color="primary"
                                className="hover"
                            />
                        )}
                    </div> */}
            {loading && <div>loading...</div>}
            <div className="be_grid_container">
                {curQs.map((doc, index) => (
                    <div className="be_block">
                        <div className="be_con">
                            <div className="be_con_title">main index</div>
                            <div className="be_con_inp">{doc.main_index}</div>
                        </div>
                        <div className="be_con">
                            <div className="be_con_title">path index</div>
                            <div className="be_con_inp">{doc.path_index}</div>
                        </div>
                        <div className="be_con">
                            <div className="be_con_title">question</div>
                            <input
                                value={doc.question}
                                onChange={(e) => changeQs(doc, e.target.value)}
                                className="be_con_inp"
                            ></input>
                        </div>
                        <div className="be_con">
                            <div className="be_con_title">service key</div>
                            <input
                                value={doc.service_key}
                                onChange={(e) =>
                                    changeSk(doc, e.target.value)
                                }
                                className="be_con_inp"
                            ></input>
                        </div>
                        <div className="be_con">
                            <div className="be_con_title">is end</div>
                            <input
                                value={doc.is_end}
                                onChange={(e) =>
                                    changeIsEnd(doc, e.target.value)
                                }
                                className="be_con_inp"
                            ></input>
                        </div>
                        <div className="be_con">
                            <div
                                onClick={() => updatePath(index, doc)}
                                className="btn btn-danger sshow_btn"
                            >
                                next
                            </div>
                        </div>
                        <div className="be_con">
                            <div
                                onClick={() => removeElm(doc.id)}
                                className="btn btn-danger sshow_btn"
                            >
                                remove
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="be_con">
                <div className="be_con_title">main index</div>
                <input
                    value={mainIndex}
                    onChange={(e) => setMainIndex(e.target.value)}
                    className="be_con_inp"
                ></input>
            </div>

            <div className="be_con">
                <div className="be_con_title">path index</div>
                <input
                    value={pathIndex}
                    onChange={(e) => setPathIndex(e.target.value)}
                    className="be_con_inp"
                ></input>
            </div>

            <div className="be_con">
                <div className="be_con_title">question</div>
                <input
                    value={qs}
                    onChange={(e) => setQs(e.target.value)}
                    className="be_con_inp"
                ></input>
            </div>

            <div className="be_con">
                <div className="be_con_title">is end</div>
                <input
                    value={isEnd}
                    onChange={(e) => setIsEnd(e.target.value)}
                    className="be_con_inp"
                ></input>
            </div>

            <div className="be_con">
                <div className="be_con_title">service key</div>
                <input
                    value={serviceKey}
                    onChange={(e) => setServiceKey(e.target.value)}
                    className="be_con_inp"
                ></input>
            </div>

            <div onClick={createNew} className="btn btn-warning sshow_btn">
                create
            </div>

            <div onClick={saveChanges} className="btn btn-warning sshow_btn">
                save
            </div>
            {/* {loading&&<div className='sb_loading'>Loading...</div>} */}
        </div>
    );
}

export default BetaEdit;
