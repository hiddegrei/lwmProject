@extends('main.master')

@section('content')

<div class="service">
    <div class="service_topBar">
       
       <a href="/todos/create" class="btn btn-primary h-50">Add a new todo...</a>
       <div> My todos</div>
    </div>

    <div class="todos">
        <div class="todos_l">
            <div class="todos_l_top">
                <div class="todos_l_top_item">done</div>
                <div class="todos_l_top_item">not done</div>
            </div>
            <div class="todos_l_items">
                @foreach($todos as $todo1)
                <a href="{{ route('todo.show', $todo1) }}">
                    <div class="todos_l_items_item">{{$todo1->title}}</div>
                </a>
                @endforeach
            </div>

        </div>
        <div class="todos_r">
        <div class="service_show">
        
        <h1>{{$todo->title}}</h1>
        <article>
            <p>
            {{$todo->body}}
            </p>
        </article>
        
                <a href="/todos/{{$todo->id}}/edit">
                    <button class="btn btn-primary mb-5">edit</button>
                </a>
                
                <form enctype="multipart/form-data" action="/todos/{{$todo->id}}/delete" method="post">
                    @csrf
                    <div class="control">
                                        <button type="submit" class="btn btn-primary">delete todo!</button>
                                    </div>
                </form>
           
</div>
        </div>
    </div>
   

</div>
                                    
@endsection
