import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import "../../assets/css/Todos.css";
import http from "../../axios/http";
import Todo from "./Todo";

function Todos(props) {
    const history = useHistory();
    const [todos, setTodos] = useState([]);
    const [todo, setTodo] = useState("");
    const [done, setDone] = useState(false);
    const [notDone, setNotDone] = useState(true);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fData = new FormData();
        // fData.append('title',"test222");
        // fData.append('body',"body2222");

        // http.post('/todos/store',fData ).then(res => {
        //     console.log(res)
        // }).catch((err)=>console.log(err));

        fetchTodosNotDone();
    }, []);
    function fetchTodosNotDone() {
        setLoading(true);
        http.get("/todos/notdone").then((res) => {
            console.log(res.data);
            setTodos(res.data);
            setLoading(false);
        });
        setNotDone(true);
        setDone(false);
    }
    function fetchTodosDone() {
        setLoading(true);
        http.get("/todos/done").then((res) => {
            console.log(res.data);
            setTodos(res.data);
            setLoading(false);
        });
        setNotDone(false);
        setDone(true);
    }

    useEffect(() => {
        console.log(todo);
    }, [todo]);

    return (
        <div className="todos">
            <div className="todos_l">
                <div className="todos_l_top">
                    <div
                        onClick={fetchTodosDone}
                        className={`todos_l_top_item ${done && "todos_active"}`}
                    >
                        done
                    </div>
                    <div
                        onClick={fetchTodosNotDone}
                        className={`todos_l_top_item ${
                            notDone && "todos_active"
                        }`}
                    >
                        not done
                    </div>
                </div>
                <div className="todos_l_items">
                    {loading ? (
                        <div className="todos_loading">Loading...</div>
                    ) : (
                        <div>
                            {todos.map((todo, index) => (
                                <div
                                    key={index}
                                    onClick={() => setTodo(todo)}
                                    className="todos_l_items_item"
                                >
                                    {todo.title}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
            <div className="todos_r">
                <div className="service_show">
                    {todo != "" && (
                        <Todo
                            key={todo?.id}
                            onclick={() => fetchTodosNotDone()}
                            id={todo?.id}
                            title={todo?.title}
                            description={todo?.description}
                            done={todo?.done}
                            approval_btn={todo?.approval_btn}
                            submit_request_id={todo?.submit_request_id}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}

export default Todos;
