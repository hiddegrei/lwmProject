import React,{useEffect,useState} from 'react';
import '../assets/css/App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";
import Services from "./Services";
import {useStateValue} from "../Stateprovider";


function App() {
  
  return (
    <Router>
    <div className="app">
      
      <Switch>
       
     
        <Route path="/services/:service">
        <Navbar/>
        <div className='app_body'>
        <Services/>

        </div>
          
        </Route>

        <Route path="/">
        <Navbar/>
        <div className='app_body'>
        <Home/>

        </div>
          
        </Route>

       

       
      </Switch>
     
    </div>
  </Router>
  );
}

export default App;