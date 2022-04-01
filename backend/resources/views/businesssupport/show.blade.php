@extends('main.master')

@section('content')
    

    <div class="service_show">
        <div class="service_show_h">{{$item->name}}</div>
        
                <a href="/services/businesssupport/{{$item->id}}/edit">
                    <button class="btn btn-primary mb-5">edit</button>
                </a>
                
                <form enctype="multipart/form-data" action="/services/businesssupport/{{$item->id}}/delete" method="post">
                    @csrf
                    <div class="control">
                                        <button type="submit" class="btn btn-primary">delete bs!</button>
                                    </div>
                </form>
           
</div>
@endsection

