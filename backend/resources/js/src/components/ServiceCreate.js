import { drop } from 'lodash';
import React,{useEffect,useState} from 'react';
import {useParams, useHistory} from "react-router-dom";
import "../assets/css/ServiceCreate.css";
import http from "../axios/http";

function Services(props) {
    const service=useParams();
    const history=useHistory();
    const[title,setTitle]=useState("");
    const[description,setDescription]=useState("");

    const [dropdowns,setDropDowns]=useState([{title:"default title",options:["option1","option2"]}])



   function addDropDown(){
    //    setDropDowns([...dropdowns],[{title:"testtt",options:["asdf"]}])
    //    let blankOption=[{title:"test",options:["hoi","yo"]}]
    //    setDropDowns(oldArray => [...oldArray,blankOption]);

       let newArr=[...dropdowns];
       newArr.push({title:"default title",options:["option1","option2"]});
       console.log(newArr)
       setDropDowns(newArr)
   }

   function updateDropDownTitle(index,value){
       
       let newArr=[...dropdowns];
       newArr[index].title=value;
       setDropDowns(newArr)

   }

   function updateDropDownOption(idropdown,ioption,value){
    let newArr=[...dropdowns];
    newArr[idropdown].options[ioption]=value;
    setDropDowns(newArr)

   }

   function addOption(index,index2){
    let newArr=[...dropdowns];
    newArr[index].options.push(`option ${newArr[index].options.length+1}`);
    setDropDowns(newArr)

   }

   function createService(){
    http.post('/services/create',{title:title,description:description,dropdowns:dropdowns}).then(res=>{
        console.log(res)
    })
    history.push('/services')

   }
    return (
        <div className="container">
        
               
               
               
            <div className="row">
                <div className="col-8 offset-2">
                <div> <h1>create service</h1></div>
        
                
                <div className="form-group row">
                                    <label  className="col-md-4 col-form-label">service title</label>
        
                                   
                                        <input id="name" type="text" className="form-control" name="name" value={title}onChange={(e)=>{setTitle(e.target.value)}}  />
        
                                       
                                   
                                </div>
               
        
                <div className="form-group row">
                                    <label  className="col-md-4 col-form-label">service description</label>
        
                                   
                                        <input id="body" type="text" className="form-control" name="body"value={description}onChange={(e)=>{setDescription(e.target.value)}}   />
        
                                       
                                   
                                </div>
               
        
                                <div onClick={addDropDown} className="create_add_dropdown_container_item bold hoverr">add dropdown +</div>


{dropdowns.map((doc,index)=>(
    <div className="create_add_dropdown_container">
                                   

    <input type="text" value={doc.title} onChange={(e)=>{ updateDropDownTitle(index,e.target.value)}} className="create_add_dropdown_container_item " placeholder='title dropdown'></input>

    <div for="dropdowns" className="create_add_dropdown_container_item bold">input options</div>
    {doc.options.map((option,index2)=>(
        <input type="text" value={option} onChange={(e)=>{updateDropDownOption(index,index2,e.target.value)}} className="create_add_dropdown_container_item " placeholder='option'></input>

    ))}
    <div onClick={()=>addOption(index)} for="dropdowns" className="create_add_dropdown_container_item bold hoverr">add option</div>

    

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