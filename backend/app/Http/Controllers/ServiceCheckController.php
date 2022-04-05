<?php

namespace App\Http\Controllers;

use App\Models\ServiceCheck;
use App\Http\Requests\StoreServiceCheckRequest;
use App\Http\Requests\UpdateServiceCheckRequest;

class ServiceCheckController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $user = auth()->user()->id;
        $serviceChecks= ServiceCheck::where('service_id',$user)->orderBy('created_at','DESC')->get();
        $todo= $todos[0];
  
        return view('todos.index', [
          'todos'=>$todos,
          'todo'=> $todo
      ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreServiceCheckRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreServiceCheckRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\ServiceCheck  $serviceCheck
     * @return \Illuminate\Http\Response
     */
    public function show(ServiceCheck $serviceCheck)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\ServiceCheck  $serviceCheck
     * @return \Illuminate\Http\Response
     */
    public function edit(ServiceCheck $serviceCheck)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateServiceCheckRequest  $request
     * @param  \App\Models\ServiceCheck  $serviceCheck
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateServiceCheckRequest $request, ServiceCheck $serviceCheck)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\ServiceCheck  $serviceCheck
     * @return \Illuminate\Http\Response
     */
    public function destroy(ServiceCheck $serviceCheck)
    {
        //
    }
}
