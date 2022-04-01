@extends('main.master')

@section('content')

<div class="service">
    <div class="service_topBar">
       
       <a href="/services/facilities/create" class="btn btn-primary h-50">Add a new facilitie...</a>
    </div>

    <div class="service_grid_container">
    @foreach($data as $item)
                            <a href="{{ route('facilities.show', $item) }}">
                               <div class="service_block"> 
                                    <div class="service_block_top">{{ $item->name }} </div>

                                    <div class="service_block_bottom">
                                        <div class="service_block_bottom_imgCon">
                                            <img class="service_block_bottom_imgCon_img" src="{{$item->image()}}"></img>
                                             </div>
                                        <div class="service_block_bottom_text">{{$item->body}} </div>
                                   
                                    </div>
                              
                                                        

                               </div>
</a>
                                                   
                                                    
                                               
                            @endforeach
    </div>
   

</div>
                                    
@endsection
