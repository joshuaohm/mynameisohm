<?php

use Illuminate\Http\Request;
use MyNameIsOhm\User;
use MyNameIsOhm\Tasks;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:api');

Route::get('/users', function()
{
    return User::all();
});

Route::get('/tasks/{userId}', 'TimerApiController@getTasksForUser');

Route::post('/tasks/{userId}', 'TimerApiController@updateTaskForUser');