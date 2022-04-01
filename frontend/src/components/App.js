import React,{useEffect,useState} from 'react';
import '../assets/css/App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home"
import {useStateValue} from "../Stateprovider";


function App() {
  
  return (
    <Router>
    <div className="app">
      
      <Switch>
     
        <Route path="/">
        
          <Home/>
        </Route>

       

       
      </Switch>
     
    </div>
  </Router>
  );
}

export default App;