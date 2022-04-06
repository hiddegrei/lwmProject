import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from "react-router-dom";
import "../../assets/css/Todo.css";
import http from "../../axios/http";

function Todo({title,body,done}) {
    const service = useParams();
    const history = useHistory();
    const [todos, setTodos] = useState([]);

    
    return (
        <div class="todo">
            <div class="todo_h">{title}</div>
            
            {body}
           
        </div>
    );
}

export default Todo;