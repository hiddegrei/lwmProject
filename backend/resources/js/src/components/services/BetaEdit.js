import React, { useEffect, useState } from "react";
import http from "../../axios/http";
import "../../assets/css/BetaEdit.css";
import { useParams, useHistory } from "react-router-dom";

export default function BetaEdit() {
    const [data, setData] = useState([]);
    const history = useHistory();
    const [mainIndex, setMainIndex] = useState();
    const [pathIndex, setPathIndex] = useState();
    const [qs, setQs] = useState();
    const [isEnd, setIsEnd] = useState();
    const [serviceKey, setServiceKey] = useState();

    useEffect(() => {
        getAll();
    }, []);
    function getAll() {
        http.get(`/serviceguide`).then((res) => {
            setData(res.data);
        });
    }

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
            })
            .catch((err) => console.log(err));
    }

    function changeQs(index, value) {
        let newArr = [...data];
        newArr[index].question = value;
        setData(newArr);
    }
    function changeSk(index, value) {
        let newArr = [...data];
        newArr[index].service_key = value;
        setData(newArr);
    }
    function changeIsEnd(index, value) {
        let newArr = [...data];
        newArr[index].is_end = value;
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
                    console.log(res);
                    history.push("/servicebeta");
                })
                .catch((err) => console.log(err));
        });
    }
    return (
        <div className="be">
            <div className="be_grid_container">
                {data.map((doc, index) => (
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
                                onChange={(e) =>
                                    changeQs(index, e.target.value)
                                }
                                className="be_con_inp"
                            ></input>
                        </div>
                        <div className="be_con">
                            <div className="be_con_title">service key</div>
                            <input
                                value={doc.service_key}
                                onChange={(e) =>
                                    changeSk(index, e.target.value)
                                }
                                className="be_con_inp"
                            ></input>
                        </div>
                        <div className="be_con">
                            <div className="be_con_title">is end</div>
                            <input
                                value={doc.is_end}
                                onChange={(e) =>
                                    changeIsEnd(index, e.target.value)
                                }
                                className="be_con_inp"
                            ></input>
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
        </div>
    );
}
