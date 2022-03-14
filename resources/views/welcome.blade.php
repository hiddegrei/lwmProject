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
                            <div class="home_firstBlock_bottom_item">service catalog</div>
                            <div class="home_firstBlock_bottom_item">knowledge base</div>
                            <div class="home_firstBlock_bottom_item">report an issue</div>
                       </div>
                   </div>

                   <div class="position-fixed bottom-0 end-0"><img src="http://i.stack.imgur.com/SBv4T.gif" class="img-fluid" alt="Slow"></img></div>


        </div>

@endsection
