@extends('main.master')

@section('content')
<div class="container">
<form action="/todos/{{$todo->id}}" enctype="multipart/form-data" method="post">
        @csrf
        @method('PATCH')
       
    <div class="row">
        <div class="col-8 offset-2">
        <div> <h1>Edit todo</h1></div>

        
        <div class="form-group row">
                            <label for="title" class="col-md-4 col-form-label">todo title</label>

                           
                                <input id="title" type="text" class="form-control @error('title') is-danger @enderror" name="title" value="{{ old('title') ?? $todo->title }}"  >

                                @error('title')
                                    <span class="help is-danger" role="alert">
                                        <p>{{ $message }}</p>
                                    </span>
                                @enderror
                           
                        </div>
       

        <div class="form-group row">
                            <label for="body" class="col-md-4 col-form-label">todo body</label>

                           
                                <input id="body" type="text" class="form-control @error('body') is-danger @enderror" name="body" value="{{ old('body') ?? $todo->body }}"  >

                                @error('body')
                                    <span class="help is-danger" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                           
                        </div>
       

                        

                        


                        <div class="row pt-4">
                            <button type="submit" class="btn btn-primary mb-4"> Save</button>

</div>
       

       
</div>
    </div>
    </form>
    
</div>
@endsection
