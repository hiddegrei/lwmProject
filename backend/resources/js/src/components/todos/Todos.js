import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from "react-router-dom";
import "../../assets/css/Todos.css";
import http from "../../axios/http";
import Todo from "./Todo"

function Todos(props) {
    const history = useHistory();
    const [todos, setTodos] = useState([]);
    const [todo,setTodo]=useState([])

    useEffect(() => {
        const fData= new FormData();
        fData.append('title',"test222");
        fData.append('body',"body2222");
       
        
        http.post('/todos/store',fData ).then(res => {
            console.log(res)
        }).catch((err)=>console.log(err));
        
        fetchTodosNotDone()
    }, [])
    function fetchTodosNotDone() {
        http.get('/todos/notdone').then(res => {
            console.log(res.data)
            setTodos(res.data)
        })
    }
    function fetchTodosDone() {
        http.get('/todos/done').then(res => {
            console.log(res.data)
            setTodos(res.data)
        })
    }
    return (
        <div className="todos">
            <div className="todos_l">
                <div className="todos_l_top">
                    <div onClick={fetchTodosDone} className="todos_l_top_item">done</div>
                    <div onClick={fetchTodosNotDone} className="todos_l_top_item">not done</div>
                </div>
                <div className="todos_l_items">
                    {todos.map(todo => (
                        <div onClick={()=>setTodo(todo)} className="todos_l_items_item">{todo.title}</div>
                    ))}

                    {/* @foreach($todos as $todo1)
                <a href="{{ route('todo.show', $todo1) }}">
                    <div className="todos_l_items_item">{{$todo1->title}}</div>
                </a>
                @endforeach */}
                </div>

            </div>
            <div className="todos_r">
                <div className="service_show">

                   <Todo title={todo?.title} body={todo?.body}done={todo?.done}/>

                </div>
            </div>
        </div>
    );
}

export default Todos;