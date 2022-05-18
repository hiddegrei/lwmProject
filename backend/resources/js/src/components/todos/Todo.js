import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from "react-router-dom";
import "../../assets/css/Todo.css";
import http from "../../axios/http";

function Todo({ onclick, id, title, description, approval_btn, submit_request_id, done }) {
    const service = useParams();
    const history = useHistory();
    const [todos, setTodos] = useState([]);
    const [submitRequestData, setSubmitRequestData] = useState([])


    useEffect(() => {

        //if(approval_btn){
        fetchServiceRequest()


        //}

    }, [])

    function fetchServiceRequest() {
        http.get(`/submitservicerequest/${submit_request_id}`).then(res => {
            console.log(res.data)
            setSubmitRequestData(res.data)
        }).catch((err) => console.log(err));

    }



    function todoIsDone() {
        const fData = new FormData();
        fData.append('done', 1);
        http.post(`/todos/${id}`, fData).then(res => {
            console.log(res)
        }).catch((err) => console.log(err));
        onclick()

    }

    function handleApproval(type) {
        const fData = new FormData();
        fData.append('approved_status', type);
        http.post(`/submitservicerequest/${submit_request_id}`, fData).then(res => {
            console.log(res)
            fetchServiceRequest()
        }).catch((err) => console.log(err));

    }


    return (
        <div className="todo">
            <div className="todo_h">{title}</div>

            <div className="todo_body">
                <div className="todo_body_elm">{description}</div>
                {approval_btn === 0 && <div className="todo_body_elm"><button onClick={todoIsDone} className="btn btn-primary">Todo is done</button></div>}

                {approval_btn &&
                    <div className='todo_body_reqCon'>
                        <div className='todo_body_reqCon_top'>
                            <div className='todo_body_reqCon_top_title'><p>{submitRequestData.title}</p></div>
                            <div className='todo_body_reqCon_top_desc'><p>{submitRequestData.description}</p></div>
                        </div>

                        {submitRequestData.dropdowns && <div>
                            {submitRequestData.dropdowns.map((doc, index) => (
                                <div key={index} className='todo_body_reqCon_block'>

                                    <div className='todo_body_reqCon_block_row '>
                                        <div className='todo_body_reqCon_block_item bold '>Title: </div>
                                        <div className='todo_body_reqCon_block_item '>{doc.title}</div>

                                    </div>

                                    <div className='todo_body_reqCon_block_row '>
                                        <div className='todo_body_reqCon_block_item bold '>Answer: </div>
                                        <div className='todo_body_reqCon_block_item '>{doc.answer}</div>

                                    </div>




                                </div>
                            ))}

                        </div>}

                        {submitRequestData.questions && <div>
                            {submitRequestData.questions.map((doc, index) => (
                                <div key={index + 1000} className='todo_body_reqCon_block'>

                                    <div className='todo_body_reqCon_block_row '>
                                        <div className='todo_body_reqCon_block_item bold '>Title: </div>
                                        <div className='todo_body_reqCon_block_item '>{doc.title}</div>

                                    </div>

                                    <div className='todo_body_reqCon_block_row '>
                                        <div className='todo_body_reqCon_block_item bold '>Answer: </div>
                                        <div className='todo_body_reqCon_block_item '>{doc.answer}</div>

                                    </div>




                                </div>
                            ))}

                        </div>}

                        {/* {submitRequestData.question_answer&&<div className='todo_body_reqCon_block'>

                                <div className='todo_body_reqCon_block_row '>
                                  <div className='todo_body_reqCon_block_item bold '>Question: </div>
                                  <div className='todo_body_reqCon_block_item '>{submitRequestData.question_answer.question}</div>

                                </div>

                                <div className='todo_body_reqCon_block_row '>
                                  <div className='todo_body_reqCon_block_item bold '>Answer: </div>
                                  <div className='todo_body_reqCon_block_item '>{submitRequestData.question_answer.answer}</div>

                                </div>




                        </div>} */}

                    </div>
                }

                {(approval_btn === 1 && !submitRequestData.approved) && <div className="todo_body_elm"><button onClick={() => handleApproval(1)} className=" todo_btn btn btn-primary">accept</button>
                    <button onClick={() => handleApproval(0)} className="todo_btn btn btn-primary">deny</button>
                </div>}



            </div>

        </div>
    );
}

export default Todo;
