import React, { useLayoutEffect, useEffect, useState } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
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
    const [qs, setQs] = useState("");
    const [isEnd, setIsEnd] = useState(1);
    const [serviceKey, setServiceKey] = useState("");
    const [pathIndexs, setPathIndexs] = useState({
        mainIndex: 0,
        pathIndex: 0,
    });

    useEffect(() => {
        getAll();
    }, []);

    function createNew(path, main) {
        const fData = new FormData();
        let lenMain = data.filter((doc) => doc.path_index === 0).length;

        fData.append(
            "main_index",
            pathIndexs.pathIndex === 0 ? lenMain : pathIndexs.mainIndex
        );
        fData.append("path_index", pathIndexs.pathIndex);
        fData.append("question", qs);
        fData.append("is_end", isEnd);
        fData.append("service_key", serviceKey);

        http.post("/serviceguide/create", fData)
            .then((res) => {
                console.log(res);
                // setMainIndex("");
                // setPathIndex("");
                setQs("");
                setIsEnd("");
                setServiceKey("");
                history.push("/servicebeta");
            })
            .catch((err) => console.log(err));
    }

    function changeQs(elm, value) {
        let newArr = [...data];

        for (let i = 0; i < data.length; i++) {
            if (data[i].id === elm.id) {
                console.log("hi");
                newArr[i].question = value;
            }
        }
        setData(newArr);
    }
    function changeSk(elm, value) {
        let newArr = [...data];

        for (let i = 0; i < data.length; i++) {
            if (data[i].id === elm.id) {
                newArr[i].service_key = value;
            }
        }
        setData(newArr);
    }
    function changeIsEnd(elm, value) {
        console.log(elm, value);
        let newArr = [...data];

        for (let i = 0; i < data.length; i++) {
            if (data[i].id === elm.id) {
                if (value === "true") {
                    newArr[i].is_end = 1;
                } else {
                    newArr[i].is_end = 0;
                }
            }
        }
        setData(newArr);
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
                    // console.log(res);
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
            // console.log(res.data);
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
        // console.log(arr);

        setCurQs(arr);
    }

    function updatePathNext(index, doc) {
        if (doc.is_end) {
        } else {
            let arr = data.filter(
                (elm) =>
                    elm.main_index === doc.main_index &&
                    elm.path_index === doc.path_index + 1
            );
            // console.log(arr);
            setMoving(true);
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
            setMoving(true);
            setCurQs(arr);
        }

        // console.log(arr);
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
            {pathIndexs.pathIndex != 0 && (
                <div className="be_con">
                    <div
                        onClick={() => updatePathPrev()}
                        className="btn btn-primary sshow_btn"
                    >
                        previous
                    </div>
                </div>
            )}
            <div className="be_grid_container">
                {curQs.map((doc, index) => (
                    <div className="be_block">
                        {/* <div className="be_con">
                            <div className="be_con_title">main index</div>
                            <div className="be_con_inp">{doc.main_index}</div>
                        </div>
                        <div className="be_con">
                            <div className="be_con_title">path index</div>
                            <div className="be_con_inp">{doc.path_index}</div>
                        </div> */}
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
                                onChange={(e) => changeSk(doc, e.target.value)}
                                className="be_con_inp"
                            ></input>
                        </div>
                        <div className="be_con">
                            <div className="be_con_title">end of path?</div>
                            {/* <input
                                value={doc.is_end}
                                onChange={(e) =>
                                    changeIsEnd(doc, e.target.value)
                                }
                                className="be_con_inp"
                            ></input> */}
                            <select
                                onChange={(e) =>
                                    changeIsEnd(doc, e.target.value)
                                }
                                value={doc.is_end === 1 ? true : false}
                                id={doc.id}
                            >
                                <option value={true}>True</option>
                                <option value={false}>False</option>
                            </select>
                        </div>
                        <div className="be_con">
                            <div
                                onClick={() => updatePathNext(index, doc)}
                                className="btn btn-info sshow_btn"
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
                <div className="be_block">
                    <div className="be_con">
                        <div className="be_con_title">question</div>
                        <input
                            value={qs}
                            onChange={(e) => setQs(e.target.value)}
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

                    <div className="be_con">
                        <div className="be_con_title">is end</div>
                        {/* <input
                            value={isEnd}
                            onChange={(e) => setIsEnd(e.target.value)}
                            className="be_con_inp"
                        ></input> */}
                        <select
                            onChange={(e) => setIsEnd(e.target.value)}
                            value={isEnd}
                        >
                            <option value={1}>True</option>
                            <option value={0}>False</option>
                        </select>
                    </div>

                    <div
                        onClick={() =>
                            createNew(
                                curQs[0]?.path_index,
                                curQs[0]?.main_index
                            )
                        }
                        className="btn btn-warning sshow_btn"
                    >
                        create
                    </div>
                </div>
            </div>

            {/* <div className="be_con">
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
            </div> */}

            <div onClick={saveChanges} className="btn btn-warning sshow_btn">
                save changes
            </div>
            <Link to="/servicebeta" className="btn btn-danger sshow_btn">Cancel</Link>
            {/* {loading&&<div className='sb_loading'>Loading...</div>} */}
        </div>
    );
}

export default BetaEdit;
