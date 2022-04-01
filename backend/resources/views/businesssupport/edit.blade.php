@extends('main.master')

@section('content')
<div class="container">
<form action="/services/businesssupport/{{$item->id}}" enctype="multipart/form-data" method="post">
        @csrf
        @method('PATCH')
       
    <div class="row">
        <div class="col-8 offset-2">
        <div> <h1>Edit business support</h1></div>

        
        <div class="form-group row">
                            <label for="name" class="col-md-4 col-form-label">bs name</label>

                           
                                <input id="name" type="text" class="form-control @error('name') is-danger @enderror" name="name" value="{{ old('name') ?? $item->name }}"  >

                                @error('name')
                                    <span class="help is-danger" role="alert">
                                        <p>{{ $message }}</p>
                                    </span>
                                @enderror
                           
                        </div>
       

        <div class="form-group row">
                            <label for="body" class="col-md-4 col-form-label">bs body</label>

                           
                                <input id="body" type="text" class="form-control @error('body') is-danger @enderror" name="body" value="{{ old('body') ?? $item->body }}"  >

                                @error('body')
                                    <span class="help is-danger" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                           
                        </div>
       

                        <div class="form-group row">
                            <label for="image" class="col-md-4 col-form-label"> image</label>

                           
                                <input id="image" type="file" class="form-control @error('image') is-invalid @enderror" name="image" value="{{ old('image') }}"   autofocus>

                                @error('image')
                                    <span class="invalid-feedback" role="alert">
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
