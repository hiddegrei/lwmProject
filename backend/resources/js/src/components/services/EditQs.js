import { drop } from 'lodash';
import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from "react-router-dom";
import "../../assets/css/ServiceCreate.css";
import "../../assets/css/ServiceShow.css";
import http from "../../axios/http";
import { useStateValue } from "../../Stateprovider";
import ClearIcon from '@mui/icons-material/Clear';

function EditQs(props) {
    const [{ user }, dispatch] = useStateValue();
    const service = useParams();
    const history = useHistory();
    const [title, setTitle] = useState("");
    const [openedFor, setOpenedFor] = useState(false);
    const [openedBy, setOpenedBy] = useState(false);
    const [needsApproval, setNeedsApproval] = useState(false);
    const [description, setDescription] = useState("");
    const [usersData, setUsersData] = useState([]);
    const [image, setImage] = useState();
    const [questionTitle, setQuestionTitle] = useState("")
    const [question, setQuestion] = useState(false);


    const [dropdowns, setDropDowns] = useState([])
    const [questions, setQuestions] = useState([])

    useEffect(() => {


        fetchAllUsers()

    }, [])

    function fetchAllUsers() {
        http.get('/allusers').then(res => {
            console.log(res.data)
            setUsersData(res.data)
        })
    }


    function addDropDown() {
        //    setDropDowns([...dropdowns],[{title:"testtt",options:["asdf"]}])
        //    let blankOption=[{title:"test",options:["hoi","yo"]}]
        //    setDropDowns(oldArray => [...oldArray,blankOption]);
        data: [["Hardware for your office space"], ["Something for your laptop?", "Something for your phone?"]]
        let newArr = [...dropdowns];
        newArr.push([[{qs:"option1", id:"key"}]]);
        console.log(newArr)
        setDropDowns(newArr)
    }
    function removeDropDown() {
        //    setDropDowns([...dropdowns],[{title:"testtt",options:["asdf"]}])
        //    let blankOption=[{title:"test",options:["hoi","yo"]}]
        //    setDropDowns(oldArray => [...oldArray,blankOption]);

        let newArr = [...dropdowns];
        newArr.splice(newArr.length - 1, 1)
        setDropDowns(newArr)
    }

    

    function updateDropDownOption(idropdown,istep, ioption, value) {
        let newArr = [...dropdowns];
        newArr[idropdown][istep][ioption].qs = value;
        setDropDowns(newArr)

    }

    function addOption(index, istep) {
        let newArr = [...dropdowns];
        newArr[index][istep].push({qs:"option1", id:"key"});
        setDropDowns(newArr)

    }
    function removeOption(index,istep) {
        let newArr = [...dropdowns];
        newArr[index][istep].splice(newArr[index][istep].length - 1, 1);
        setDropDowns(newArr)

    }
    function onImageChange(file) {
        // let files = e.target.files || e.dataTransfer.files;
        // if (!files.length)
        //       return;
        // createImage(files[0]);
        setImage(file[0])
    }

    function nextStep(){
        
    }
    
    

    





    function createService() {
        let serviceType = document.getElementById("serviceType").value;





        const fData = new FormData();
        if (image) {

            fData.append('image', image);
        }

        fData.append('title', title);
        fData.append('description', description);
        fData.append('servicetype', serviceType);
        fData.append('dropdowns', JSON.stringify(dropdowns));
        if (needsApproval) {
            let needsApprovalFrom = document.getElementById("needs_approval_from").value;
            fData.append('needs_approval_from', needsApprovalFrom);

        }
        if (questions.length >= 1) {

            fData.append('questions', JSON.stringify(questions));

        }

        fData.append('opened_by', +openedBy);
        fData.append('opened_for', +openedFor);




        //   {image:image, title:title, description: description, servicetype: serviceType, dropdowns: dropdowns,needs_approval_from:needsApprovalFrom,opened_by:openedBy,opened_for:openedFor }



        http.post('/services/create', fData).then(res => {
            console.log(res)
        }).catch((err) => console.log(err));
        history.push(`/services`)

    }
    return (
        <div className="container">




            <div className="row">
                <div className="col-8 offset-2">
                    <div> <h1>create service</h1></div>


                   


                   

                   
                   
                   
                   
                   

                    


                    {/* <div className="form-group row">
                        <label className="col-md-4 col-form-label">service image</label>


                        <input id="image" type="file" className="form-control " name="image" onChange={(e) => onImageChange(e.target.files)} />



                    </div> */}





                    <div className="create_add_dropdown_container_items ">
                        <div onClick={addDropDown} className="create_add_dropdown_container_item btn btn-primary bold hoverr"> add route +</div>
                        {dropdowns.length >= 1 && <div onClick={removeDropDown} className="create_add_dropdown_container_item btn btn-primary bold hoverr"> remove route -</div>}


                    </div>


                    {dropdowns.map((doc, index) => (
                        <div className="create_add_dropdown_container">


                            

                            <div className="create_add_dropdown_container_item bold">input options</div>
                            {doc.options.map((option, index2) => (
                                <input type="text" value={option} onChange={(e) => { updateDropDownOption(index, index2, e.target.value) }} className="create_add_dropdown_container_item " placeholder='option'></input>

                            ))}
                            <div onClick={() => addOption(index)} className="create_add_dropdown_container_item  btn btn-primary bold hoverr">add option</div>
                            {doc.options.length > 1 && <div onClick={() => removeOption(index)} className="create_add_dropdown_container_item  btn btn-primary bold hoverr">remove option</div>}
                            <div onClick={() => nextStep(index)} className="create_add_dropdown_container_item  btn btn-primary bold hoverr">next step</div>




                        </div>

                    ))}





                    <div className="row pt-4">
                        <button onClick={createService} className="btn btn-primary mb-4"> create service</button>

                    </div>



                </div>
            </div>


        </div>
    );
}

export default EditQs;