<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Service;
use App\Models\ServiceCheck;
use Intervention\Image\Facades\Image;

class ServiceController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index($servicetype){

        $data = Service::where("servicetype",$servicetype)->orderBy('created_at', 'desc')->get();
        

        return $data;

    }

  
    public function create(Request $request){
        $data = request()->validate([
            'title'=> 'required',
            'description'=> 'required',
            'servicetype'=> 'required',
           
           

        ]);
   $dropdowns=json_decode(request('dropdowns'));
        $data2 = request()->validate([
            'opened_for'=>'required',
        'opened_by'=>'required',
        'needs_approval_from'=>'required',
        ]);

         $imagePath=request('image')->store('services','public');
        //  $imagePath=\Image::make($request->get('image'))->store('services','public');
        
        
        //  $image = Image::make(public_path("storage/{$imagePath}"))->fit(1000,100);
        //     $image->save();

        $newData=array_merge($data,['dropdowns'=>$dropdowns]);

        $item = Service::create(array_merge($newData,['image'=>$imagePath]));
        $item->checks()->create([
            'opened_for'=>$data2['opened_for'],
            'opened_by'=>$data2['opened_by'],
            'needs_approval_from'=>$data2['needs_approval_from'],
        ]);
       
        $set=array_merge($data,$data2);
        return $set;

    }

    public function show(Service $serviceid)
    {
        //  dd($serviceid);
        $serviceChecks= ServiceCheck::where('service_id',$serviceid->id)->get();

        $data=[
            'service'=>$serviceid,
            'checks'=> $serviceChecks
        ];
        
       
         return $data;
 
    }
}
