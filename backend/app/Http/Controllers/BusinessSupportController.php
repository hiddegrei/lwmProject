<?php

namespace App\Http\Controllers;

use App\Models\BusinessSupport;
use App\Http\Requests\StoreBusinessSupportRequest;
use App\Http\Requests\UpdateBusinessSupportRequest;
use Illuminate\Http\Request;

class BusinessSupportController extends Controller
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
        $data = BusinessSupport::orderBy('created_at', 'desc')->get();
        // dd($data);

        return view('businesssupport.index', compact('data'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('businesssupport.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreBusinessSupportRequest  $request
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
        $item = BusinessSupport::create(array_merge($data,['image'=>$imagePath]));
        
         return redirect(route('businesssupport.show',$item));
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\BusinessSupport  $businessSupport
     * @return \Illuminate\Http\Response
     */
    public function show(BusinessSupport $id)
    {
        // dd($id);
        
       
        return view('businesssupport.show', [
            'item'=> $id
        ]);
 
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\BusinessSupport  $businessSupport
     * @return \Illuminate\Http\Response
     */
    public function edit(BusinessSupport $id)
    {
        return view('businesssupport.edit', [
            'item'=> $id
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateBusinessSupportRequest  $request
     * @param  \App\Models\BusinessSupport  $businessSupport
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, BusinessSupport $id)
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

        return redirect("/services/businesssupport");
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\BusinessSupport  $businessSupport
     * @return \Illuminate\Http\Response
     */
    public function destroy(BusinessSupport $id)
    {
        // dd($item);
        $id->delete();
        return redirect(route('businesssupport.index'));
    }

    private function validateBs(Request $request)
    {
        return $request->validate([
            'name' => 'required',
            'body' => 'required',
            
        ]);
    }
}
