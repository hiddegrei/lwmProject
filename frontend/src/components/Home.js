import React,{useEffect,useState} from 'react';
import http from "../axios/http"

function Home(props) {
    const [users,setUsers]=useState([]);

    useEffect(()=>{
        fetchAllUsers()

    },[])
    function fetchAllUsers(){
        http.get('/users').then(res=>{
            setUsers(res.data);
            console.log(res.data)
        })
    }
    return (
        <div>
            homepage
            <table>
                <thead><tr>
                    <th>name</th></tr></thead>
                    <tbody>
                        {users.map((user,index)=>(
                            <tr>
                                <td>{user.name}</td>
                            </tr>
                        ))}
                    </tbody>
            </table>
            
        </div>
    );
}

export default Home;