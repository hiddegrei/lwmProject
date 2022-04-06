import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from "react-router-dom";
import "../../assets/css/Todo.css";
import http from "../../axios/http";

function Todo({onclick,id,title,body,done}) {
    const service = useParams();
    const history = useHistory();
    const [todos, setTodos] = useState([]);

    function todoIsDone(){
        const fData= new FormData();
        fData.append('done',1);
        http.post(`/todos/${id}`,fData ).then(res => {
            console.log(res)
        }).catch((err)=>console.log(err));
        onclick()

    }

    
    return (
        <div class="todo">
            <div class="todo_h">{title}</div>
            
            <div class="todo_body">
                <div class="todo_body_elm">{body}</div>
                <div class="todo_body_elm"><button onClick={todoIsDone} class="btn btn-primary">Todo is done</button></div>
                
                
                </div>
           
        </div>
    );
}

export default Todo;