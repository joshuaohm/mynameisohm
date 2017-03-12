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
	$links = DB::table('links')->orderBy('id')->get();

    return view('pages.index', ['passions' => $passions, 'links' => $links]);
});

Route::get('/home', function () {

	$passions = DB::table('passions')->get();
	$links = DB::table('links')->orderBy('id')->get();

    return view('pages.home', ['passions' => $passions, 'links' => $links]);
});

Route::get('/my-work', function () {

	$works = DB::table('works')->orderBy('id')->get();
	$links = DB::table('links')->orderBy('id')->get();

	$deets = DB::table('works')->orderBy('id')->select('details')->get();
	$details = array();
	$tempdetail = array();

	foreach($deets as $key => $detail){

		$tempdetail = explode(',', $detail->details);
		array_push($details, $tempdetail);
	}
    

    return view('pages.my-work', ['works' => $works, 'details' => $details, 'links' => $links])->render();
});

Auth::routes();

Route::get('/app', function (){
	return view('app');
});
