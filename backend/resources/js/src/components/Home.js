import React,{useEffect,useState} from 'react';
import http from "../axios/http";
import "../assets/css/Home.css"

function Home(props) {
    const [users,setUsers]=useState([]);

    // useEffect(()=>{
    //     fetchAllUsers()

    // },[])
    // function fetchAllUsers(){
    //     http.get('/users').then(res=>{
    //         setUsers(res.data);
    //         console.log(res.data)
    //     })
    // }
    return (
        <div className="home">


        
        <div className="home_firstBlock_top">
            <div className="home_firstBlock_top_greet_container">
                <div className="home_firstBlock_top_greetUser"> Hi , need service?</div>
                <input placeholder="What are you looking for?" className="home_firstBlock_top_input"></input>
            </div>
        </div>
        <div className="home_firstBlock_bottom">
           
            <div className="home_firstBlock_bottom_grid">
                <a href="/services/businesssupport">
                <div className="home_firstBlock_bottom_grid_item">
                    <div className="home_firstBlock_bottom_grid_item_imgCon"><img src="/img/lwmback.jpg" className="home_firstBlock_bottom_grid_item_imgCon_img" ></img></div>
                    <div className="home_firstBlock_bottom_grid_item_text">services</div>
               
                </div>
                </a>
                <a href="/services/businesssupport">
                <div className="home_firstBlock_bottom_grid_item">
                    <div className="home_firstBlock_bottom_grid_item_imgCon"><img src="/img/lwmback.jpg" className="home_firstBlock_bottom_grid_item_imgCon_img" ></img></div>
                    <div className="home_firstBlock_bottom_grid_item_text">services</div>
               
                </div>
                </a>
                <a href="/services/businesssupport">
                <div className="home_firstBlock_bottom_grid_item">
                    <div className="home_firstBlock_bottom_grid_item_imgCon"><img src="/img/lwmback.jpg" className="home_firstBlock_bottom_grid_item_imgCon_img" ></img></div>
                    <div className="home_firstBlock_bottom_grid_item_text">services</div>
               
                </div>
                </a>

                <a href="/services/businesssupport">
                <div className="home_firstBlock_bottom_grid_item">
                    <div className="home_firstBlock_bottom_grid_item_imgCon"><img src="/img/lwmback.jpg" className="home_firstBlock_bottom_grid_item_imgCon_img" ></img></div>
                    <div className="home_firstBlock_bottom_grid_item_text">services</div>
               
                </div>
                </a>

                <a href="/services/businesssupport">
                <div className="home_firstBlock_bottom_grid_item">
                    <div className="home_firstBlock_bottom_grid_item_imgCon"><img src="/img/lwmback.jpg" className="home_firstBlock_bottom_grid_item_imgCon_img" ></img></div>
                    <div className="home_firstBlock_bottom_grid_item_text">services</div>
               
                </div>
                </a>
               
               
            </div>


        </div>


    

    <div className="home_block2">
        <div className="home_block2_row">
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


        </div>

    </div>

    <div className="position-fixed bottom-0 end-0"></div>


</div>
    );
}

export default Home;