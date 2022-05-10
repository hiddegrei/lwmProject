<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BusinessSupportController;
use App\Http\Controllers\FacilitiesController;
use App\Http\Controllers\TodoController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\MainReactController;
use App\Http\Controllers\ServiceController;
use App\Http\Controllers\SubmitRequestController;


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

// Route::get('/', function () {
//     return view('welcome');
// });

//businesssupport
// Route::get('/foos',[BusinessSupportController::class, 'index'])->name('businesssupport.index');
// Route::get('/foos/create',[BusinessSupportController::class,'create'])->name('businesssupport.create');;
// Route::get('/foos/{id}/edit', [BusinessSupportController::class, 'edit'])->name('businesssupport.edit');
// Route::get('/foos/{id}',[BusinessSupportController::class, 'show'])->name('businesssupport.show');
// Route::patch('/foos/{id}', [BusinessSupportController::class, 'update'])->name('businesssupport.update');
// Route::post('/foost/{id}/delete',[BusinessSupportController::class, 'destroy']);
// Route::post('/foos',[BusinessSupportController::class, 'store'])->name('businesssupport.store');

//facilities
// Route::get('/services/facilities',[FacilitiesController::class, 'index'])->name('facilities.index');
// Route::get('/services/facilities/create',[FacilitiesController::class,'create'])->name('facilities.create');;
// Route::get('/services/facilities/{id}/edit', [FacilitiesController::class, 'edit'])->name('facilities.edit');
// Route::get('/services/facilities/{id}',[FacilitiesController::class, 'show'])->name('facilities.show');
// Route::patch('/services/facilities/{id}', [FacilitiesController::class, 'update'])->name('facilities.update');
// Route::post('/services/facilities/{id}/delete',[FacilitiesController::class, 'destroy']);
// Route::post('/services/facilities',[FacilitiesController::class, 'store'])->name('facilities.store');;

//todos
Route::get('/api/todos/{type}',[TodoController::class, 'index'])->name('todo.index');
// Route::get('/api/todos/create',[TodoController::class,'create'])->name('todo.create');;
Route::get('/api/todos/{todo}/edit', [TodoController::class, 'edit'])->name('todo.edit');
Route::get('/api/todos/{todo}',[TodoController::class, 'show'])->name('todo.show');
Route::post('/api/todos/{todo}', [TodoController::class, 'update'])->name('todo.update');
Route::post('/api/todos/{todo}/delete',[TodoController::class, 'destroy']);
Route::post('/api/todos/store',[TodoController::class, 'store'])->name('todo.store');;

Auth::routes();


Route::post('/api/services/create',[ServiceController::class, 'create']);
Route::get('/api/services/',[ServiceController::class, 'getAll']);
Route::get('/api/services/businesssupport/{serviceid}',[ServiceController::class, 'show']);
Route::get('/api/services/facilities/{serviceid}',[ServiceController::class, 'show']);
Route::get('/api/services/homeoffice/{serviceid}',[ServiceController::class, 'show']);
Route::get('/api/services/finance/{serviceid}',[ServiceController::class, 'show']);
Route::get('/api/services/hrpayroll/{serviceid}',[ServiceController::class, 'show']);
Route::get('/api/services/itservices/{serviceid}',[ServiceController::class, 'show']);
Route::get('/api/services/masterdata/{serviceid}',[ServiceController::class, 'show']);
Route::get('/api/services/{servicetype}',[ServiceController::class, 'index']);
Route::get('/api/service/edit/{service}',[ServiceController::class, 'edit']);
Route::post('/api/service/edit/{service}',[ServiceController::class, 'update']);
Route::post('/api/services/{query}',[ServiceController::class, 'search']);

Route::get('/api/services/search/{key}',[ServiceController::class, 'searchKey']);


Route::get('/api/user/auth',[UserController::class, 'authUser']);
Route::get('/api/allusers',[UserController::class, 'allUsers']);
Route::post('/api/user/logout',[UserController::class, 'logout']);

//submit serivce request
Route::get('/api/submitservicerequest',[SubmitRequestController::class, 'index']);
Route::get('/api/submitservicerequest/{id}',[SubmitRequestController::class, 'show']);
Route::post('/api/submitservicerequest',[SubmitRequestController::class, 'submit']);
Route::post('/api/submitservicerequest/{id}', [SubmitRequestController::class, 'update']);


// Route::post('/api/login',[LoginController::class, 'login']);

// Route::get('/api/users',[UserController::class, 'index']);

// Route::get('/', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

 Route::fallback([App\Http\Controllers\MainReactController::class, 'index']);
