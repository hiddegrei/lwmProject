<!-- <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <title>LWM service portal</title>
</head>
<body>
    <h1>Hello world</h1>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
</body>
</html> -->

@extends('main.master')

@section('content')



    <div class="home">


        
            <div class="home_firstBlock_top">
                <div class="home_firstBlock_top_greet_container">
                    <div class="home_firstBlock_top_greetUser"> Hi {{ Auth::user()->name }}, need service?</div>
                    <input placeholder="What are you looking for?" class="home_firstBlock_top_input"></input>
                </div>
            </div>
            <div class="home_firstBlock_bottom">
               
                <div class="home_firstBlock_bottom_grid">
                    <a href="/services/businesssupport">
                    <div class="home_firstBlock_bottom_grid_item">
                        <div class="home_firstBlock_bottom_grid_item_imgCon"><img src="/img/lwmback.jpg" class="home_firstBlock_bottom_grid_item_imgCon_img" ></img></div>
                        <div class="home_firstBlock_bottom_grid_item_text">services</div>
                   
                    </div>
                    </a>
                    <a href="/services/businesssupport">
                    <div class="home_firstBlock_bottom_grid_item">
                        <div class="home_firstBlock_bottom_grid_item_imgCon"><img src="/img/lwmback.jpg" class="home_firstBlock_bottom_grid_item_imgCon_img" ></img></div>
                        <div class="home_firstBlock_bottom_grid_item_text">services</div>
                   
                    </div>
                    </a>
                    <a href="/services/businesssupport">
                    <div class="home_firstBlock_bottom_grid_item">
                        <div class="home_firstBlock_bottom_grid_item_imgCon"><img src="/img/lwmback.jpg" class="home_firstBlock_bottom_grid_item_imgCon_img" ></img></div>
                        <div class="home_firstBlock_bottom_grid_item_text">services</div>
                   
                    </div>
                    </a>

                    <a href="/services/businesssupport">
                    <div class="home_firstBlock_bottom_grid_item">
                        <div class="home_firstBlock_bottom_grid_item_imgCon"><img src="/img/lwmback.jpg" class="home_firstBlock_bottom_grid_item_imgCon_img" ></img></div>
                        <div class="home_firstBlock_bottom_grid_item_text">services</div>
                   
                    </div>
                    </a>

                    <a href="/services/businesssupport">
                    <div class="home_firstBlock_bottom_grid_item">
                        <div class="home_firstBlock_bottom_grid_item_imgCon"><img src="/img/lwmback.jpg" class="home_firstBlock_bottom_grid_item_imgCon_img" ></img></div>
                        <div class="home_firstBlock_bottom_grid_item_text">services</div>
                   
                    </div>
                    </a>
                   
                   
                </div>


            </div>


        

        <div class="home_block2">
            <div class="home_block2_row">
                <div class="home_block2_row_item">
                    <div class="home_block2_row_item_header">
                        🔊Announchemnt

                    </div>
                    <div class="home_block2_row_item_content">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam blandit scelerisque purus, vel iaculis felis cursus ut. Donec et libero nisl. Cras in euismod felis, sed fringilla lacus. Etiam quis quam vitae quam luctus mollis. Nullam convallis lobortis arcu, quis consectetur nisi bibendum nec. Vivamus pulvinar ante vel efficitur dapibus. Proin id sem non risus semper accumsan. Nulla a consectetur nisi, vel feugiat nunc. Fusce volutpat scelerisque imperdiet. Nam pretium nisi vel leo posuere, in tincidunt dui ullamcorper. Quisque eu egestas dolor. In sodales, tellus vitae bibendum laoreet, tellus urna tempor ante, id efficitur mauris purus eget arcu. Pellentesque congue eu diam quis congue. Ut fringilla sodales dui vitae elementum. Cras quis vestibulum lacus, sit amet porta diam.</p>
                    </div>

                </div>

                <div class="home_block2_row_item">
                    working from home?
                    <img
                        src="https://w7.pngwing.com/pngs/817/403/png-transparent-home-furnishings-home-furnishings-household-sofa.png">
                </div>

                <div class="home_block2_row_item">
                    <div class="home_block2_row_item_header">
                        🕴Delegates

                    </div>
                    <div class="home_block2_row_item_content">
                        No Delegates set.

                        When you will be unavailable for some time, you can create a delegate allowing others to manage
                        your approvals and tasks.

                        To create one, click the "+" button on the top.
                    </div>

                </div>

            </div>

            <div class="home_block2_row">
                <div class="home_block2_row_item">
                    <div class="home_block2_row_item_header">
                        ⋰Planned Maintenance

                    </div>
                    <div class="home_block2_row_item_content">
                        We publish information on planned service availability below. This includes events occuring over
                        the next 5 days.
                    </div>

                </div>

                <div class="home_block2_row_item">
                    <div class="home_block2_row_item_header">
                        ★My Popular Requests

                    </div>
                    <div class="home_block2_row_item_content">
                        You have not made any requests yet.
                    </div>

                </div>

                <div class="home_block2_row_item">
                    <div class="home_block2_row_item_header">
                        Most Viewed Articles
                    </div>
                    <div class="home_block2_row_item_content">
                        How To How does this portal works? Hoe werkt deze portal?
                        7 Views
                        Map Offices Kruiningen & Breda
                        2 Views
                        How To Save time with FindTime
                        1 View
                    </div>

                </div>


            </div>
            <div class="home_block2_row">

                <div class="home_block2_row_container">
                    <div class="home_block2_row_container_item">
                        <div class="home_block2_row_container_item_imgCon">
                            <img class="home_block2_row_container_item_img" src="/img/safe.png"></img>
                        </div>
                        <div class="home_block2_row_container_item_textBlock">
                            <div class="home_block2_row_container_item_textBlock_h">Safetybase</div>
                            <div class="home_block2_row_container_item_textBlock_p">Incidents & observations</div>
                        </div>
                    </div>

                    <div class="home_block2_row_container_item">
                        <div class="home_block2_row_container_item_imgCon">
                            <img class="home_block2_row_container_item_img" src="/img/recycle.png"></img>
                        </div>
                        <div class="home_block2_row_container_item_textBlock">
                            <div class="home_block2_row_container_item_textBlock_h">Destruction request</div>
                            <div class="home_block2_row_container_item_textBlock_p">Cattle Feed, waste, Petfood etc
                            </div>
                        </div>
                    </div>

                </div>


            </div>

        </div>

        <div class="position-fixed bottom-0 end-0"><img src="https://lwmdev.service-now.com/farmer4.gif"
                                                        class="img-fluid" alt="Slow" style="width:200px"></img></div>


    </div>

@endsection
