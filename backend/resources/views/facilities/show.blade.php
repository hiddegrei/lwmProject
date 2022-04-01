@extends('main.master')

@section('content')
    

    <div class="service_show">
        <div class="service_show_h">{{$item->name}}</div>
        
                <a href="/services/facilitie/{{$item->id}}/edit">
                    <button class="btn btn-primary mb-5">edit</button>
                </a>
                
                <form enctype="multipart/form-data" action="/services/facilitie/{{$item->id}}/delete" method="post">
                    @csrf
                    <div class="control">
                                        <button type="submit" class="btn btn-primary">delete facilitie!</button>
                                    </div>
                </form>
           
</div>
@endsection
