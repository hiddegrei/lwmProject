<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Service;

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
            'dropdowns' => ''

        ]);

        $item = Service::create($data);
        return $data;

    }

    public function show(Service $serviceid)
    {
        //  dd($serviceid);
        
       
         return $serviceid;
 
    }
}
