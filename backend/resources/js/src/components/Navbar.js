import React, {useLayoutEffect, useState, useEffect} from 'react';
import "../assets/css/Navbar.css";
import {Link, useHistory} from "react-router-dom";
import http from "../axios/http";
import {auto} from "@popperjs/core";

function Navbar(props) {
    const [user, setUser] = useState();
    const history = useHistory();
    const [results, setResults] = useState([]);
    const [query, setQuery] = useState("Search");

    useLayoutEffect(() => {
        fetchUser()

    }, [])

    function fetchUser() {


        http.get('/user/auth').then(res => {

            setUser(res.data)
        })


    }

    function logout() {
        http.post('/user/logout').then(res => {


        })
        location.reload();

    }

    function search(query) {
        http.post(`/services/${query}`).then(res => {
            setResults(res.data);
        }).catch((err) => console.log(err));

        return results;
    }

    useEffect(() => {
        if (query.length <= 0) {
            setResults([]);
        } else if (query.length >= 2) {
            search(query);
        }
    }, [query])


return (<div className='navbar'>
    <div className='navbar_brand'>
        <Link to="/" className="">
            <img src="https://lwmdev.service-now.com/f1580754dbf8b700a797298a48961940.iix" alt="Lambwaston img"
                 className=" navbar-item_img "/>
        </Link>
    </div>
    <div className='navbar_menu'>
        <div className="dropdown">
            <Link to="/todos">
                <button className="dropbtn navbar-item px-4 text-decoration-none navHover">To Dos</button>
            </Link>
        </div>
        <div className="dropdown">
            <button className="dropbtn navbar-item px-4 text-decoration-none navHover">My Tickets</button>
            <div className="dropdown-content">
                <Link to="#">Train ticket</Link>
                <Link to="#">Car ticket</Link>
            </div>
        </div>

        <div className="dropdown">
            <button className="dropbtn navbar-item px-4 text-decoration-none navHover">Knowledge</button>
            <div className="dropdown-content">
                <Link to="#">Book of all</Link>
                <Link to="#">Book of nothing</Link>
                <Link to="#">Book of Book</Link>
            </div>
        </div>

        <div className="dropdown">
            <button onClick={() => history.push('/services')}
                    className="dropbtn navbar-item px-4 text-decoration-none navHover">Services
            </button>
            <div className="dropdown-content">
                <Link to="/services/businesssupport">Business support</Link>
                <Link to="/services/facilities">Facilities</Link>
                <Link to="/services/finance">Finance</Link>
                <Link to="/services/homeoffice">Home office</Link>
                <Link to="/services/hrpayroll">HR Payroll</Link>
                <Link to="/services/itservices">IT services</Link>
                <Link to="/services/masterdata">Masterdata</Link>
                <Link to="/service/create">create service</Link>
            </div>
        </div>

        <div className="dropdown">
            <button className="dropbtn navbar-item px-4 text-decoration-none navHover">System Status</button>
            <div className="dropdown-content">
                <Link to="#">Business support</Link>
                <Link to="#">Facilities</Link>
                <Link to="#">Finance</Link>
                <Link to="#">Home office</Link>
                <Link to="#">HR Payroll</Link>
                <Link to="#">IT services</Link>
                <Link to="#">Masterdata</Link>
            </div>
        </div>

        <div className="dropdown">
            <button className="dropbtn navbar-item px-4 text-decoration-none navHover">GRC</button>
            <div className="dropdown-content">
                <Link to="#">Wat is GRC?</Link>
            </div>
        </div>

        <div className="dropdown">
            <button className="dropbtn navbar-item px-4 text-decoration-none navHover">Cart</button>
            <div className="dropdown-content">
                <Link to="#">Items</Link>
                <Link to="#">Buy</Link>
            </div>
        </div>

        <div className="dropdown">
            <button className="dropbtn navbar-item px-4 text-decoration-none navHover">Quick Guide</button>
            <div className="dropdown-content">
                <Link to="#">You have no quick guides</Link>
            </div>
        </div>

        <div className="dropdown">
            <input size="7" value={query} type="search" id={"query"}
                   onChange={(e) => setQuery(e.target.value)}></input>
            <div className="query-results"> {results.map(doc => (<div>
                <a href={`/services/${doc.servicetype}/${doc.id}`}>{doc.title}</a>
                <img src={doc.image} className="query-image"></img> <br></br>
            </div>))}
            </div>
        </div>
    </div>

    <div className='navbar_user'>
        <div className="dropdown">
            <button className="dropbtn navbar-item px-4 text-decoration-none navHover"> hi
                , {user?.name}</button>
            <div className="dropdown-content">
                <a onClick={logout}>logout</a>
            </div>
        </div>
    </div>
</div>);
}

export default Navbar;
