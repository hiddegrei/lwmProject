@extends('main.master')

@section('content')
<div class="container">
<form action="{{ route('facilities.store') }}" enctype="multipart/form-data" method="post">
        @csrf
       
       
    <div class="row">
        <div class="col-8 offset-2">
        <div> <h1>create facilitie</h1></div>

        
        <div class="form-group row">
                            <label for="name" class="col-md-4 col-form-label">facilite name</label>

                           
                                <input id="name" type="text" class="form-control @error('name') is-danger @enderror" name="name"   >

                                @error('name')
                                    <span class="help is-danger" role="alert">
                                        <p>{{ $message }}</p>
                                    </span>
                                @enderror
                           
                        </div>
       

        <div class="form-group row">
                            <label for="body" class="col-md-4 col-form-label">facilities body</label>

                           
                                <input id="body" type="text" class="form-control @error('body') is-danger @enderror" name="body"   >

                                @error('body')
                                    <span class="help is-danger" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                           
                        </div>
       

                        <div class="form-group row">
                            <label for="image" class="col-md-4 col-form-label">facilitie image</label>

                           
                                <input id="image" type="file" class="form-control @error('image') is-invalid @enderror" name="image" >

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