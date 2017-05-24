<?php

namespace MyNameIsOhm\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Input;
use App\User;
use MyNameIsOhm\Tasks;
use MyNameIsOhm\Http\Controllers\Controller;

class TimerApiController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        //$this->middleware('auth:api');
    }

    public function getTasksForUser($userId){

        return Tasks::where('ownerId', $userId)
          ->orderBy('id', 'asc')
          ->get();
    }

    public function updateTaskForUser(){

        $taskId = (int)Input::get('taskId');
        $userId = (int)Input::get('userId');
        $duration = (int)Input::get('duration');
        $title = Input::get('name');
        $state = Input::get('status');

        if(is_int($userId) && is_int($taskId) && is_int($duration)){

            $task = Tasks::where('ownerId', $userId)
            ->where('id', $taskId)
            ->first();

            if(!$task === null && $task->duration < $duration){

                $task->duration = $duration;

                $task->save();

                return json_encode(array('result'=>'success'));
            }
            else if($task === null){
                
                $newTask = new Tasks;
                $newTask->ownerId = $userId;
                $newTask->id = $taskId;
                $newTask->title = $title;
                $newTask->state = $state;

                $newTask->save();

            }
            else{
                return json_encode(array('result'=>'error'));
            }
        }
        else{
            return json_encode(array('result'=>'error'));
        }
    }
}
