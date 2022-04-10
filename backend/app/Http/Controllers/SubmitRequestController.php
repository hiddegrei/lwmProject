<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\SubmitRequest;
use App\Models\User;

class SubmitRequestController extends Controller
{
    public function submit(Request $request){
        // dd($request);
        $data=request()->validate([
            'opened_by'=>'required',
        'opened_for'=>'',
        'needs_approval_from'=>'',
        'dropdowns'=>'',
        'questions'=>'',
        'title'=>'required',
        'description'=>'required',
        'image'=>''
        
        ]);
        // $dropdowns=json_decode(request('dropdowns'));
        // $question_answer=json_decode(request('question_answer'));

        // $newData=array_merge($data,['dropdowns'=>$dropdowns,'question_answer'=>$question_answer]);

        $newItem=SubmitRequest::create($data);

       
        if(request('needs_approval_from')){
            $user=User::findOrFail(request('needs_approval_from'));
            if($user){
                $user->todos()->create([
                    'title'=>"Approval request",
                    'description'=>"This request needs your approval",
                    'submit_request_id'=>$newItem->id,
                    'approval_for_user_id'=>request('opened_by'),
                    'approval_btn'=>true,
                ]);
                
            }
           
        }
        return $newItem;
    }

    public function show( $id){

        $data= SubmitRequest::findOrFail($id);
        if( $data["dropdowns"]){
            $data["dropdowns"]=json_decode($data["dropdowns"]);

        }
        if( $data["questions"]){
            $data["questions"]=json_decode($data["questions"]);
        }
        
        return $data;

    }

    public function update(Request $request, SubmitRequest $id){
        $data = request()->validate([
            'approved_status'=>'required',
           
        ]);
        $id->update(array_merge($data,['approved'=>true]));

        return $id;


    }

    public function index(){
        $userId=auth()->user()->id;
        $submits=SubmitRequest::where('opened_by',$userId)->limit(5)->get();
        return $submits;

    }
}
