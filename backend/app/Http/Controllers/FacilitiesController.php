<?php

namespace App\Http\Controllers;

use App\Models\Facilities;
use App\Http\Requests\StoreFacilitiesRequest;
use App\Http\Requests\UpdateFacilitiesRequest;
use Illuminate\Http\Request;

class FacilitiesController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data = Facilities::orderBy('created_at', 'desc')->get();
        // dd($data);

        return view('facilities.index', compact('data'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('facilities.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreFacilitiesRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data = request()->validate([
            'name'=> 'required',
            'body'=> 'required',
            'image' => ['required','image']

        ]);

        $imagePath=request('image')->store('services','public');

        // $image = Image::make(public_path("storage/{$imagePath}"))->fit(1200,1200);
        // $image->save();

       
        // \App\Models\Post::create($data);
        $item = Facilities::create(array_merge($data,['image'=>$imagePath]));
        
         return redirect(route('facilities.show',$item));
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Facilities  $facilities
     * @return \Illuminate\Http\Response
     */
    public function show(Facilities $id)
    {
        return view('facilities.show', [
            'item'=> $id
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Facilities  $facilities
     * @return \Illuminate\Http\Response
     */
    public function edit(Facilities $id)
    {
        return view('facilities.edit', [
            'item'=> $id
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateFacilitiesRequest  $request
     * @param  \App\Models\Facilities  $facilities
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Facilities $id)
    {
        $data = request()->validate([
            'name'=>'required',
            'body'=>'required',
            'image'=>''
        ]);
        
      
        
        $imagePath = '';
        if(request('image')){
            $imagePath=request('image')->store('services','public');
            // $image = Image::make(public_path("storage/{$imagePath}"))->fit(1000,100);
            // $image->save();
            $id->update(array_merge($data,['image'=>$imagePath]));


        }else{
            $id->update($data);
        }
        // dd($imagePath);

        // $id->update(array_merge($data,['image'=>$imagePath]));

        // $id->update($data);

        return redirect("/services/facilities");
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Facilities  $facilities
     * @return \Illuminate\Http\Response
     */
    public function destroy(Facilities $facilities)
    {
        $id->delete();
        return redirect(route('facilities.index'));
    }
    private function validateF(Request $request)
    {
        return $request->validate([
            'name' => 'required',
            'body' => 'required',
            'image'=>'required'
            
        ]);
    }
}
