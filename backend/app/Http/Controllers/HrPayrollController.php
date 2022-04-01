<?php

namespace App\Http\Controllers;

use App\Models\HrPayroll;
use App\Http\Requests\StoreHrPayrollRequest;
use App\Http\Requests\UpdateHrPayrollRequest;

class HrPayrollController extends Controller
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
     * @param  \App\Http\Requests\StoreHrPayrollRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreHrPayrollRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\HrPayroll  $hrPayroll
     * @return \Illuminate\Http\Response
     */
    public function show(HrPayroll $hrPayroll)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\HrPayroll  $hrPayroll
     * @return \Illuminate\Http\Response
     */
    public function edit(HrPayroll $hrPayroll)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateHrPayrollRequest  $request
     * @param  \App\Models\HrPayroll  $hrPayroll
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateHrPayrollRequest $request, HrPayroll $hrPayroll)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\HrPayroll  $hrPayroll
     * @return \Illuminate\Http\Response
     */
    public function destroy(HrPayroll $hrPayroll)
    {
        //
    }
}
