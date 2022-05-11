<?php

namespace App\Http\Controllers;

use App\Models\ServiceRoles;
use App\Http\Requests\StoreServiceRolesRequest;
use App\Http\Requests\UpdateServiceRolesRequest;

class ServiceRolesController extends Controller
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
     * @param  \App\Http\Requests\StoreServiceRolesRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreServiceRolesRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\ServiceRoles  $serviceRoles
     * @return \Illuminate\Http\Response
     */
    public function show(ServiceRoles $serviceRoles)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\ServiceRoles  $serviceRoles
     * @return \Illuminate\Http\Response
     */
    public function edit(ServiceRoles $serviceRoles)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateServiceRolesRequest  $request
     * @param  \App\Models\ServiceRoles  $serviceRoles
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateServiceRolesRequest $request, ServiceRoles $serviceRoles)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\ServiceRoles  $serviceRoles
     * @return \Illuminate\Http\Response
     */
    public function destroy(ServiceRoles $serviceRoles)
    {
        //
    }
}
