<?php

namespace App\Http\Controllers;

use App\Models\Foo;
use App\Http\Requests\StoreFooRequest;
use App\Http\Requests\UpdateFooRequest;

class FooController extends Controller
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
     * @param  \App\Http\Requests\StoreFooRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreFooRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Foo  $foo
     * @return \Illuminate\Http\Response
     */
    public function show(Foo $foo)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Foo  $foo
     * @return \Illuminate\Http\Response
     */
    public function edit(Foo $foo)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateFooRequest  $request
     * @param  \App\Models\Foo  $foo
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateFooRequest $request, Foo $foo)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Foo  $foo
     * @return \Illuminate\Http\Response
     */
    public function destroy(Foo $foo)
    {
        //
    }
}
