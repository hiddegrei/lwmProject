<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Service;
use App\Models\ServiceCheck;
use App\Models\ServiceTrack;
use App\Models\User;
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

    public function getAll(){
        $top10ids = ServiceTrack::orderBy('count', 'desc')->limit(10)->get();
        $data=[];
       

        for ($x = 0; $x < count($top10ids); $x++) {
            $data[$x]=Service::where("id",$top10ids[$x]->service_id)->get()[0];
           
          }
        // return Service::all();
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
        'needs_approval_from'=>'',
        'question_title'=>'',
        ]);

        $newData=array_merge($data,['dropdowns'=>$dropdowns]);

        if(request('image')){
            $imagePath=request('image')->store('services','public');
            $item = Service::create(array_merge($newData,['image'=>$imagePath]));
        }else{

            $item = Service::create($newData);

        }
         
        //  $imagePath=\Image::make($request->get('image'))->store('services','public');
        
        
        //  $image = Image::make(public_path("storage/{$imagePath}"))->fit(1000,100);
        //     $image->save();

       

       
            $item->checks()->create($data2);

            
       
        
        $item->serviceTrack()->create([
            'service_id'=>$item->id,
            'count'=>0
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
        // dd($data["checks"][0]->needs_approval_from);
         $data["checks"][0]->needs_approval_from_name=User::findOrFail(intval($data["checks"][0]->needs_approval_from));

        $serviceid->serviceTrack()->update([
            'count'=> $serviceid->serviceTrack()->get('count')[0]->count +1
        ]);
        
       
         return $data ;
 
    }
}
