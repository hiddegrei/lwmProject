<?php

namespace App\Http\Controllers;

use App\Models\ServiceTrack;
use App\Http\Requests\StoreServiceTrackRequest;
use App\Http\Requests\UpdateServiceTrackRequest;

class ServiceTrackController extends Controller
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
     * @param  \App\Http\Requests\StoreServiceTrackRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreServiceTrackRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\ServiceTrack  $serviceTrack
     * @return \Illuminate\Http\Response
     */
    public function show(ServiceTrack $serviceTrack)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\ServiceTrack  $serviceTrack
     * @return \Illuminate\Http\Response
     */
    public function edit(ServiceTrack $serviceTrack)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateServiceTrackRequest  $request
     * @param  \App\Models\ServiceTrack  $serviceTrack
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateServiceTrackRequest $request, ServiceTrack $serviceTrack)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\ServiceTrack  $serviceTrack
     * @return \Illuminate\Http\Response
     */
    public function destroy(ServiceTrack $serviceTrack)
    {
        //
    }
}
