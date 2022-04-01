<?php

namespace App\Http\Controllers;

use App\Models\Masterdata;
use App\Http\Requests\StoreMasterdataRequest;
use App\Http\Requests\UpdateMasterdataRequest;

class MasterdataController extends Controller
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
     * @param  \App\Http\Requests\StoreMasterdataRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreMasterdataRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Masterdata  $masterdata
     * @return \Illuminate\Http\Response
     */
    public function show(Masterdata $masterdata)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Masterdata  $masterdata
     * @return \Illuminate\Http\Response
     */
    public function edit(Masterdata $masterdata)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateMasterdataRequest  $request
     * @param  \App\Models\Masterdata  $masterdata
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateMasterdataRequest $request, Masterdata $masterdata)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Masterdata  $masterdata
     * @return \Illuminate\Http\Response
     */
    public function destroy(Masterdata $masterdata)
    {
        //
    }
}
