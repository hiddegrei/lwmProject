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


                   <div class="home_firstBlock">
                       <div class="home_firstBlock_top">
                           <div class="home_firstBlock_top_greet_container">
                            <div class="home_firstBlock_top_greetUser"> Hi guest, need service?</div>
                            <input placeholder="What are you looking for?" class="home_firstBlock_top_input"></input>
                           </div>
                       </div>
                       <div class="home_firstBlock_bottom">
                           <div class="home_firstBlock_bottom_row">
                           <div class="home_firstBlock_bottom_item">service catalog</div>
                            <div class="home_firstBlock_bottom_item">knowledge base</div>
                            <div class="home_firstBlock_bottom_item">report an issue</div>

                           </div>
                           <div class="home_firstBlock_bottom_row">
                           <img src="https://lwmdev.service-now.com/drone2.png" class="home_firstBlock_bottom_img">
                       <img src="https://lwmdev.service-now.com/bulb2.png" class="home_firstBlock_bottom_img" >
                       <img src="https://lwmdev.service-now.com/dude4.png" class="home_firstBlock_bottom_img" >

                        </div>


                       </div>



                   </div>

                   <div class="home_block2">
                       <div class="home_block2_row">
                         <div class="home_block2_row_item">
                             <div class="home_block2_row_item_header">
                                 Announchemnt

                             </div>
                             <div class="home_block2_row_item_content">
                                     content
                             </div>

                         </div>

                         <div class="home_block2_row_item">
                            working from home?
                            <img src="https://w7.pngwing.com/pngs/817/403/png-transparent-home-furnishings-home-furnishings-household-sofa.png">
                         </div>

                         <div class="home_block2_row_item">
                             <div class="home_block2_row_item_header">
                                 delegates

                             </div>
                             <div class="home_block2_row_item_content">
                             No Delegates set.

                            When you will be unavailable for some time, you can create a delegate allowing others to manage your approvals and tasks.

                            To create one, click the "+" button on the top.
                             </div>

                         </div>

                       </div>

                       <div class="home_block2_row">
                         <div class="home_block2_row_item">
                             <div class="home_block2_row_item_header">
                             Planned Maintenance

                             </div>
                             <div class="home_block2_row_item_content">
                             We publish information on planned service availability below. This includes events occuring over the next 5 days.
                             </div>

                         </div>

                         <div class="home_block2_row_item">
                             <div class="home_block2_row_item_header">
                             My Popular Requests

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

                   </div>

                   <div class="position-fixed bottom-0 end-0"><img src="https://lwmdev.service-now.com/farmer4.gif" class="img-fluid" alt="Slow" style="width:200px"></img></div>


        </div>

@endsection
