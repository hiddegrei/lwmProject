<?php

namespace App\Http\Controllers;

use App\Models\Todo;
use App\Http\Requests\StoreTodoRequest;
use App\Http\Requests\UpdateTodoRequest;
use Illuminate\Http\Request;

class TodoController extends Controller
{
  
    //

    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index($type)
    {
      $userId = auth()->user()->id;
      if($type==="done"){
        $todos= Todo::where('user_id',$userId)->where('done',true)->orderBy('created_at','DESC')->get();

      }else  if($type==="notdone"){
        $todos= Todo::where('user_id',$userId)->where('done',false)->orderBy('created_at','DESC')->get();

      }
      
      
     

      return $todos;


    }

    public function create()
    {
        return view('todos/create');

    }

    public function store()
    {
        $data = request()->validate([
            'title'=> 'required',
            'body' => 'required',

        ]);
        // dd($data);

       

        auth()->user()->todos()->create([
            'title'=>$data['title'],
            'body'=>$data['body'],
        ]);
        // \App\Models\Post::create($data);
        return $data;
    }

    public function show(\App\Models\Todo $todo)
    {
        $user = auth()->user()->id;
        $todos= Todo::where('user_id',$user)->orderBy('created_at','DESC')->get();

       

       return view('todos.index', [
           'todos'=>$todos,
           'todo'=> $todo
       ]);

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\BusinessSupport  $businessSupport
     * @return \Illuminate\Http\Response
     */
    public function edit(Todo $todo)
    {
        return view('todos.edit', [
            'todo'=> $todo
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateBusinessSupportRequest  $request
     * @param  \App\Models\BusinessSupport  $businessSupport
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Todo $todo)
    {
        $data = request()->validate([
            'done'=>'required',
            
            
        ]);
        
      
        
       
            $todo->update($data);
        
        // dd($imagePath);

        // $id->update(array_merge($data,['image'=>$imagePath]));

        // $id->update($data);

        return redirect("/todos");
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\BusinessSupport  $businessSupport
     * @return \Illuminate\Http\Response
     */
    public function destroy(Todo $todo)
    {
        // dd($item);
        $todo->delete();
        return redirect(route('todos.index'));
    }
}
