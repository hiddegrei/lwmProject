import { drop } from 'lodash';
import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from "react-router-dom";
import "../../assets/css/ServiceCreate.css";
import "../../assets/css/ServiceShow.css";
import http from "../../axios/http";
import {useStateValue} from "../../Stateprovider";

function Services(props) {
    const[{user},dispatch]=useStateValue();
    const service = useParams();
    const history = useHistory();
    const [title, setTitle] = useState("");
    const [openedFor,setOpenedFor]=useState(false);
    const [openedBy,setOpenedBy]=useState(false);
    const [description, setDescription] = useState("");
    const [usersData,setUsersData]=useState([]);
    const [image,setImage]=useState()

    const [dropdowns, setDropDowns] = useState([{ title: "default title", options: ["option1", "option2"] }])

    useEffect(()=>{
        
       
        fetchAllUsers()
        
    },[])

    function fetchAllUsers(){
        http.get('/allusers').then(res=>{
            console.log(res.data)
           setUsersData(res.data)
       })
    }


    function addDropDown() {
        //    setDropDowns([...dropdowns],[{title:"testtt",options:["asdf"]}])
        //    let blankOption=[{title:"test",options:["hoi","yo"]}]
        //    setDropDowns(oldArray => [...oldArray,blankOption]);

        let newArr = [...dropdowns];
        newArr.push({ title: "default title", options: ["option1", "option2"] });
        console.log(newArr)
        setDropDowns(newArr)
    }

    function updateDropDownTitle(index, value) {

        let newArr = [...dropdowns];
        newArr[index].title = value;
        setDropDowns(newArr)

    }

    function updateDropDownOption(idropdown, ioption, value) {
        let newArr = [...dropdowns];
        newArr[idropdown].options[ioption] = value;
        setDropDowns(newArr)

    }

    function addOption(index, index2) {
        let newArr = [...dropdowns];
        newArr[index].options.push(`option ${newArr[index].options.length + 1}`);
        setDropDowns(newArr)

    }
    function onImageChange(file) {
        // let files = e.target.files || e.dataTransfer.files;
        // if (!files.length)
        //       return;
        // createImage(files[0]);
        setImage(file[0])
      }
   
   

    function createService() {
        let serviceType = document.getElementById("serviceType").value;
        let needsApprovalFrom = document.getElementById("needs_approval_from").value;
        
       
        
      const fData= new FormData();
      fData.append('image',image);
      fData.append('title',title);
      fData.append('description', description);
      fData.append('servicetype', serviceType);
       fData.append('dropdowns', JSON.stringify(dropdowns));
      fData.append('needs_approval_from', needsApprovalFrom);
      fData.append('opened_by', +openedBy);
      fData.append('opened_for', +openedFor);
 

      
       
    //   {image:image, title:title, description: description, servicetype: serviceType, dropdowns: dropdowns,needs_approval_from:needsApprovalFrom,opened_by:openedBy,opened_for:openedFor }
       
        
        
        http.post('/services/create',fData ).then(res => {
            console.log(res)
        }).catch((err)=>console.log(err));
        history.push(`/services/${serviceType}`)

    }
    return (
        <div className="container">




            <div className="row">
                <div className="col-8 offset-2">
                    <div> <h1>create service</h1></div>


                    <div className="form-group row">
                        <label className="col-md-4 col-form-label">service title</label>


                        <input id="name" type="text" className="form-control" name="name" value={title} onChange={(e) => { setTitle(e.target.value) }} />



                    </div>


                    <div className="form-group row">
                        <label className="col-md-4 col-form-label">service description</label>


                        <input id="body" type="text" className="form-control" name="body" value={description} onChange={(e) => { setDescription(e.target.value) }} />



                    </div>

                    <div className="form-group row checkbox">
                        <label className="col-md-4 col-form-label">opened by</label>
                        <input value="opened_by" id="opened_by" type="checkbox" className="" name="opened_by" checked={openedBy} onChange={() => { setOpenedBy(!openedBy) }} />


                    </div>
                    <div className="form-group row checkbox">
                        <label className="col-md-4 col-form-label">opened for</label>
                        <input value="opened_for" id="opened_for" type="checkbox" className="" name="opened_for" checked={openedFor} onChange={() => { setOpenedFor(!openedFor) }} />


                    </div>
                    <div className="form-group row">
                    <div className='sshow_dropdowns_item'>
                            <label className='sshow_dropdowns_item'>needs approval from</label>

                            <select id="needs_approval_from" name="needs_approval_from"  >
                               {usersData?.map(userr=>(
                                   <option value={userr.name}>{userr.name}</option>
                               ))}
                                

                            </select>
                        </div>
                    </div>
                    

                    <div className="form-group row">
                        <div className='sshow_dropdowns_item'>
                            <label  className='sshow_dropdowns_item'>service category</label>

                            <select id="serviceType" name="serviceType" >

                                <option value="businesssupport">Business support </option>
                                <option value="facilities">Facilities</option>
                                <option value="finance">Finance</option>
                                <option value="homeoffice">Home Office</option>
                                <option value="hrpayroll">HR Payroll</option>
                                <option value="itservices">IT services</option>
                                <option value="masterdata">Masterdata</option>

                            </select>
                        </div>
                    </div>

                   
                    <div className="form-group row">
                            <label  className="col-md-4 col-form-label">service image</label>

                           
                                <input id="image" type="file" className="form-control " name="image" onChange={(e)=>onImageChange(e.target.files)} />

                              
                           
                        </div>
                        
                        
                        


                    <div onClick={addDropDown} className="create_add_dropdown_container_item bold hoverr">add dropdown +</div>


                    {dropdowns.map((doc, index) => (
                        <div className="create_add_dropdown_container">


                            <input type="text" value={doc.title} onChange={(e) => { updateDropDownTitle(index, e.target.value) }} className="create_add_dropdown_container_item " placeholder='title dropdown'></input>

                            <div for="dropdowns" className="create_add_dropdown_container_item bold">input options</div>
                            {doc.options.map((option, index2) => (
                                <input type="text" value={option} onChange={(e) => { updateDropDownOption(index, index2, e.target.value) }} className="create_add_dropdown_container_item " placeholder='option'></input>

                            ))}
                            <div onClick={() => addOption(index)} for="dropdowns" className="create_add_dropdown_container_item bold hoverr">add option</div>



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

export default Services;