<?php

namespace MyNameIsOhm\Http\Controllers;

use Illuminate\Http\Request;
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

    public function updateTaskForUser($userId){

        $tasks = Input::get('tasks');

        var_dump($tasks);
    }
}
