

@section('todoShow')
    

    <div class="service_show">
        <div class="service_show_h">{{$todo->title}}</div>
        
                <a href="/services/businesssupport/{{$todo->id}}/edit">
                    <button class="btn btn-primary mb-5">edit</button>
                </a>
                
                <form enctype="multipart/form-data" action="/todos/{{$todo->id}}/delete" method="post">
                    @csrf
                    <div class="control">
                                        <button type="submit" class="btn btn-primary">delete todo!</button>
                                    </div>
                </form>
           
</div>
@endsection

