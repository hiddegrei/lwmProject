<?php

namespace App\Http\Controllers;

use App\Models\HomeOffice;
use App\Http\Requests\StoreHomeOfficeRequest;
use App\Http\Requests\UpdateHomeOfficeRequest;

class HomeOfficeController extends Controller
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
     * @param  \App\Http\Requests\StoreHomeOfficeRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreHomeOfficeRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\HomeOffice  $homeOffice
     * @return \Illuminate\Http\Response
     */
    public function show(HomeOffice $homeOffice)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\HomeOffice  $homeOffice
     * @return \Illuminate\Http\Response
     */
    public function edit(HomeOffice $homeOffice)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateHomeOfficeRequest  $request
     * @param  \App\Models\HomeOffice  $homeOffice
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateHomeOfficeRequest $request, HomeOffice $homeOffice)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\HomeOffice  $homeOffice
     * @return \Illuminate\Http\Response
     */
    public function destroy(HomeOffice $homeOffice)
    {
        //
    }
}
