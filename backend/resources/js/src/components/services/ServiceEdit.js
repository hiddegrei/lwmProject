import React, { useLayoutEffect, useEffect, useState } from 'react';
import { useParams, useHistory } from "react-router-dom";
import "../../assets/css/ServiceEdit.css";
import http from "../../axios/http";
import { useStateValue } from "../../Stateprovider";

function ServiceEdit(props) {
    const [{ user }, dispatch] = useStateValue();
    const history = useHistory()
    const serviceid = useParams();
    const [data, setData] = useState([]);
    const [usersData, setUsersData] = useState([]);
    const [answer, setAnswer] = useState();
    const [questionsAnswers, setQuestionsAnswers] = useState([]);
    const [received, setReceived] = useState(false);

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("")

    useLayoutEffect(() => {


        fetchService()


    }, [])
    function fetchService() {
        http.get(`/service/edit/${serviceid.service}`).then(res => {

            setData(res.data)
            console.log(res.data)
            setTitle(res.data.title)
            setDescription(res.data.description)


        })
    }
    

    function submitUpdate() {
        // let serviceType = document.getElementById("serviceType").value;

        const fData = new FormData();

        fData.append('title', title)
        fData.append('description', description)




        http.post(`/service/edit/${data.id}`, fData).then(res => {
            console.log(res)
            history.push(`/services/${data.servicetype}/${data.id}`)
        }).catch((err) => console.log(err));



    }
    function updateQuestionAnswer(index, value) {

        let newArr = [...questionsAnswers];
        newArr[index].answer = value;
        setQuestionsAnswers(newArr)

    }


    return (
        <div className='sedit'>
            {/* {data.map((doc)=>(
                <div>{doc}</div>
            ))} */}
            <div className='sedit_block'>
                <div className='sedit_block_title'>Title</div>
                <div className='sedit_block_input'>
                     <input className='sedit_item' value={title} onChange={(e) => setTitle(e.target.value)}></input>
                </div>

            </div>

             <div className='sedit_block'>
                <div className='sedit_block_title'>Description</div>
                <div className='sedit_block_input'>
                     <input className='sedit_item' value={description} onChange={(e) => setDescription(e.target.value)}></input>
                </div>

            </div>
           
            

            <div><div onClick={submitUpdate} className='btn btn-primary'>Submit</div></div>



        </div>
    );
}

export default ServiceEdit;