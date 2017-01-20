<?php

use Illuminate\Support\Facades\DB;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {

	$passions = DB::table('passions')->get();
    return view('pages.index', ['passions' => $passions]);
});

Route::get('/my-work', function () {

    return view('pages.my-work');
});
