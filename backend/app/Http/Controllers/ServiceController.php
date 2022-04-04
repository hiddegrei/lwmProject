<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Service;

class ServiceController extends Controller
{

    public function index(){

        $data = Service::orderBy('created_at', 'desc')->get();
        

        return $data;

    }
    public function create(Request $request){
        $data = request()->validate([
            'title'=> 'required',
            'description'=> 'required',
            'dropdowns' => ''

        ]);

        $item = Service::create($data);
        return $data;

    }

    public function show(Service $service)
    {
        // dd($id);
        
       
        return $service;
 
    }
}
