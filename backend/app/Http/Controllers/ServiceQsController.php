<?php

namespace App\Http\Controllers;

use App\Models\ServiceQs;
use App\Http\Requests\StoreServiceQsRequest;
use App\Http\Requests\UpdateServiceQsRequest;

class ServiceQsController extends Controller
{
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
     * @param  \App\Http\Requests\StoreServiceQsRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreServiceQsRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\ServiceQs  $serviceQs
     * @return \Illuminate\Http\Response
     */
    public function show(ServiceQs $serviceQs)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\ServiceQs  $serviceQs
     * @return \Illuminate\Http\Response
     */
    public function edit(ServiceQs $serviceQs)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateServiceQsRequest  $request
     * @param  \App\Models\ServiceQs  $serviceQs
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateServiceQsRequest $request, ServiceQs $serviceQs)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\ServiceQs  $serviceQs
     * @return \Illuminate\Http\Response
     */
    public function destroy(ServiceQs $serviceQs)
    {
        //
    }
}
