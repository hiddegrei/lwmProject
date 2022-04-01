<?php

namespace App\Http\Controllers;

use App\Models\ItServices;
use App\Http\Requests\StoreItServicesRequest;
use App\Http\Requests\UpdateItServicesRequest;

class ItServicesController extends Controller
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
        //
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
     * @param  \App\Http\Requests\StoreItServicesRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreItServicesRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\ItServices  $itServices
     * @return \Illuminate\Http\Response
     */
    public function show(ItServices $itServices)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\ItServices  $itServices
     * @return \Illuminate\Http\Response
     */
    public function edit(ItServices $itServices)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateItServicesRequest  $request
     * @param  \App\Models\ItServices  $itServices
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateItServicesRequest $request, ItServices $itServices)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\ItServices  $itServices
     * @return \Illuminate\Http\Response
     */
    public function destroy(ItServices $itServices)
    {
        //
    }
}
