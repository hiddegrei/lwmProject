import React, {useEffect, useState} from 'react';
import http from "../axios/http";
import "../assets/css/Home.css";
import Searchbar from "./Searchbar";
import {Link} from "react-router-dom";
import {useStateValue} from "../Stateprovider";
import HelpIcon from '@mui/icons-material/Help';

function Home(props) {
    const [{user}, dispatch] = useStateValue();
    const [users, setUsers] = useState([]);
    const [input, setInput] = useState("");
    const [myTickets, setMyTickets] = useState([]);

    useEffect(() => {
        fetchMyTickets()

    }, [])

    function fetchMyTickets() {
        http.get('/submitservicerequest').then(res => {
            setMyTickets(res.data);
            console.log(res.data)
        })
    }

    return (<div className="home">
        <div className='home_background'></div>

        <div className="home_firstBlock_top">
            <div className="home_firstBlock_top_greet_container">
                <div className="home_firstBlock_top_greetUser"> Hi {user?.name} , need service?</div>
                <Searchbar/>
                {/*<input placeholder={`What are you looking for`} className="home_firstBlock_top_input" onChange={(e) => setInput(e.target.value)} value={input}></input>*/}
            </div>
        </div>
        <div className="home_firstBlock_bottom">
            <div className="home_firstBlock_bottom_grid">
                <Link to="/todos">
                    <div className="home_firstBlock_bottom_grid_item">
                        <div className="home_firstBlock_bottom_grid_item_imgCon"><img src="/img/checklist.png"
                                                                                      className="home_firstBlock_bottom_grid_item_imgCon_img"></img>
                        </div>
                        <div className="home_firstBlock_bottom_grid_item_text">todos</div>
                    </div>
                </Link>

                <Link to="/services">
                    <div className="home_firstBlock_bottom_grid_item">
                        <div className="home_firstBlock_bottom_grid_item_imgCon"><img
                            src="/img/customer-service.png"
                            className="home_firstBlock_bottom_grid_item_imgCon_img"></img></div>
                        <div className="home_firstBlock_bottom_grid_item_text">services</div>
                    </div>
                </Link>

                <Link to="/services/businesssupport">
                    <div className="home_firstBlock_bottom_grid_item">
                        <div className="home_firstBlock_bottom_grid_item_imgCon"><img src="/img/salary.png"
                                                                                      className="home_firstBlock_bottom_grid_item_imgCon_img"></img>
                        </div>
                        <div className="home_firstBlock_bottom_grid_item_text">T&E</div>
                    </div>
                </Link>

                <Link to="/services/businesssupport">
                    <div className="home_firstBlock_bottom_grid_item">
                        <div className="home_firstBlock_bottom_grid_item_imgCon"><img src="/img/statutory.png"
                                                                                      className="home_firstBlock_bottom_grid_item_imgCon_img"></img>
                        </div>
                        <div className="home_firstBlock_bottom_grid_item_text">Statutory sick pay</div>
                    </div>
                </Link>

                <Link to="/services/businesssupport">
                    <div className="home_firstBlock_bottom_grid_item">
                        <div className="home_firstBlock_bottom_grid_item_imgCon"><img src="/img/shield.png"
                                                                                      className="home_firstBlock_bottom_grid_item_imgCon_img"></img>
                        </div>
                        <div className="home_firstBlock_bottom_grid_item_text">Security request</div>
                    </div>
                </Link>
            </div>
        </div>

        <div className="home_block2">
            <div className='home_grid_container'>
                <div className='home_grid_block'>
                    <div className='home_grid_block_h'>Knowledge center</div>
                    <div className='home_grid_block_row'>
                        <div className='home_grid_block_row_imgCon'><HelpIcon/></div>
                        <div className='home_grid_block_row_text'>Accessing payroll information</div>
                    </div>
                    <div className='home_grid_block_row'>
                        <div className='home_grid_block_row_imgCon'><HelpIcon/></div>
                        <div className='home_grid_block_row_text'>Guide to installing desktop applications</div>
                    </div>
                    <div className='home_grid_block_row'>
                        <div className='home_grid_block_row_imgCon'><HelpIcon/></div>
                        <div className='home_grid_block_row_text'>Where to find SSP</div>
                    </div>
                    <div className='home_grid_block_row'>
                        <div className='home_grid_block_row_imgCon'><HelpIcon/></div>
                        <div className='home_grid_block_row_text'>Where do I request employee verification?</div>
                    </div>
                </div>

                <div className='home_grid_block'>
                    <div className='home_grid_block_h'>My tickets</div>
                    {myTickets.map(ticket => (<div className='home_grid_block_row'>
                        <div className='home_grid_block_row_imgCon'><img className='home_grid_block_row_img'
                                                                         src={`/storage/${ticket.image}`}/>
                        </div>
                        <div className='home_grid_block_row_text'>{ticket.description}</div>
                    </div>))}
                </div>
            </div>
            {/* <div className="home_block2_row">
            <div className="home_block2_row_item">
                <div className="home_block2_row_item_header">
                    🔊Announchemnt

                </div>
                <div className="home_block2_row_item_content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam blandit scelerisque purus, vel iaculis felis cursus ut. Donec et libero nisl. Cras in euismod felis, sed fringilla lacus. Etiam quis quam vitae quam luctus mollis. Nullam convallis lobortis arcu, quis consectetur nisi bibendum nec. Vivamus pulvinar ante vel efficitur dapibus. Proin id sem non risus semper accumsan. Nulla a consectetur nisi, vel feugiat nunc. Fusce volutpat scelerisque imperdiet. Nam pretium nisi vel leo posuere, in tincidunt dui ullamcorper. Quisque eu egestas dolor. In sodales, tellus vitae bibendum laoreet, tellus urna tempor ante, id efficitur mauris purus eget arcu. Pellentesque congue eu diam quis congue. Ut fringilla sodales dui vitae elementum. Cras quis vestibulum lacus, sit amet porta diam.</p>
                </div>

            </div>

            <div className="home_block2_row_item">
                working from home?
                <img
                    src="https://w7.pngwing.com/pngs/817/403/png-transparent-home-furnishings-home-furnishings-household-sofa.png"/>
            </div>

            <div className="home_block2_row_item">
                <div className="home_block2_row_item_header">
                    🕴Delegates
                </div>
                <div className="home_block2_row_item_content">
                    No Delegates set.
                    When you will be unavailable for some time, you can create a delegate allowing others to manage
                    your approvals and tasks.
                    To create one, click the "+" button on the top.
                </div>
            </div>
        </div>

        <div className="home_block2_row">
            <div className="home_block2_row_item">
                <div className="home_block2_row_item_header">
                    ⋰Planned Maintenance
                </div>
                <div className="home_block2_row_item_content">
                    We publish information on planned service availability below. This includes events occuring over
                    the next 5 days.
                </div>
            </div>

            <div className="home_block2_row_item">
                <div className="home_block2_row_item_header">
                    ★My Popular Requests
                </div>
                <div className="home_block2_row_item_content">
                    You have not made any requests yet.
                </div>
            </div>

            <div className="home_block2_row_item">
                <div className="home_block2_row_item_header">
                    Most Viewed Articles
                </div>
                <div className="home_block2_row_item_content">
                    How To How does this portal works? Hoe werkt deze portal?
                    7 Views
                    Map Offices Kruiningen  Breda
                    2 Views
                    How To Save time with FindTime
                    1 View
                </div>
            </div>
        </div>
        <div className="home_block2_row">

            <div className="home_block2_row_container">
                <div className="home_block2_row_container_item">
                    <div className="home_block2_row_container_item_imgCon">
                        <img className="home_block2_row_container_item_img" src="/img/safe.png"></img>
                    </div>
                    <div className="home_block2_row_container_item_textBlock">
                        <div className="home_block2_row_container_item_textBlock_h">Safetybase</div>
                        <div className="home_block2_row_container_item_textBlock_p">Incidents  observations</div>
                    </div>
                </div>

                <div className="home_block2_row_container_item">
                    <div className="home_block2_row_container_item_imgCon">
                        <img className="home_block2_row_container_item_img" src="/img/recycle.png"></img>
                    </div>
                    <div className="home_block2_row_container_item_textBlock">
                        <div className="home_block2_row_container_item_textBlock_h">Destruction request</div>
                        <div className="home_block2_row_container_item_textBlock_p">Cattle Feed, waste, Petfood etc
                        </div>
                    </div>
                </div>
            </div>
        </div> */}
        </div>
        {/* <div className="position-fixed bottom-0 end-0"></div> */}
    </div>);
}

export default Home;
