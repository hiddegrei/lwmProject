<?php

namespace App\Http\Controllers;

use App\Models\ServiceGuide;
use Illuminate\Http\Request;
use App\Http\Requests\StoreServiceGuideRequest;
use App\Http\Requests\UpdateServiceGuideRequest;

class ServiceGuideController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $data = ServiceGuide::all();


        return $data;

    }

    

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
         $data = request()->validate([
            'main_index' => 'required',
            'path_index' => 'required',
            'question' => 'required',
            'is_end' => 'required',
            'service_key' => 'required'


        ]);
         $item = ServiceGuide::create($data);
         return $item;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreServiceGuideRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreServiceGuideRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\ServiceGuide  $serviceGuide
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request)
    {
         $data = request()->validate([
            'main_index' => 'required',
            'path_index' => 'required',
           
        ]);

        return $data;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\ServiceGuide  $serviceGuide
     * @return \Illuminate\Http\Response
     */
    public function edit(ServiceGuide $serviceGuide)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateServiceGuideRequest  $request
     * @param  \App\Models\ServiceGuide  $serviceGuide
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, ServiceGuide $serviceGuide)
    {
         $data = request()->validate([
             'main_index' => 'required',
            'path_index' => 'required',
            'question' => 'required',
            'is_end' => 'required',
            'service_key' => 'required'

           
           

        ]);
        
        $serviceGuide->update($data);
        return $serviceGuide;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\ServiceGuide  $serviceGuide
     * @return \Illuminate\Http\Response
     */
    public function remove( $serviceGuide)
    {
        // dd($serviceGuide);
       ServiceGuide::destroy($serviceGuide);
    }
}
