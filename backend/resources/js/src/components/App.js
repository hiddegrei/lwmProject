import React, { useEffect, useState } from "react";
import "../assets/css/App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";
import Services from "./services/Services";
import ServicesBeta from "./services/ServicesBeta";
import ServiceCreate from "./services/ServiceCreate";
import ServiceShow from "./services/ServiceShow";
import ServiceEdit from "./services/ServiceEdit";
import BetaEdit from "./services/BetaEdit";
import Todos from "./todos/Todos";
import { useStateValue } from "../Stateprovider";
import http from "../axios/http";

function App() {
    const [{ user, isAdmin }, dispatch] = useStateValue();

    useEffect(() => {
        fetchUser();
    }, []);
    function fetchUser() {
        http.get("/user/auth").then((res) => {
            dispatch({
                type: "SET_USER",
                user: res.data,
            });
        });

        http.get("/user/isadmin").then((res) => {
            console.log(res.data);
            dispatch({
                type: "SET_ADMIN",
                isAdmin: res.data,
            });
        });
    }

    return (
        <Router>
            <div className="app">
                <Switch>
                    <Route path="/todos">
                        <Navbar />
                        <div className="app_body">
                            <Todos />
                        </div>
                    </Route>

                    <Route path="/service/edit/:service">
                        <Navbar />
                        <div className="app_body">
                            <ServiceEdit />
                        </div>
                    </Route>

                    <Route path="/service/create">
                        <Navbar />
                        <div className="app_body">
                            <ServiceCreate />
                        </div>
                    </Route>

                    <Route path="/services/:servicetype/:serviceid">
                        <Navbar />
                        <div className="app_body">
                            <ServiceShow />
                        </div>
                    </Route>

                    <Route path="/services/:service">
                        <Navbar />
                        <div className="app_body">
                            <Services />
                        </div>
                    </Route>

                    <Route path="/servicebeta/edit">
                        <Navbar />
                        <div className="app_body">
                            <BetaEdit />
                        </div>
                    </Route>

                    <Route path="/servicebeta">
                        <Navbar />
                        <div className="app_body">
                            <ServicesBeta />
                        </div>
                    </Route>

                    <Route path="/services">
                        <Navbar />
                        <div className="app_body">
                            <Services />
                        </div>
                    </Route>

                    <Route path="/">
                        <Navbar />
                        <div className="app_body">
                            <Home />
                        </div>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
