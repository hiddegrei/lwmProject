<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BusinessSupportController;
use App\Http\Controllers\FacilitiesController;
use App\Http\Controllers\TodoController;
use App\Http\Controllers\UserController;

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
Route::get('/services/businesssupport',[BusinessSupportController::class, 'index'])->name('businesssupport.index');
Route::get('/services/businesssupport/create',[BusinessSupportController::class,'create'])->name('businesssupport.create');;
Route::get('/services/businesssupport/{id}/edit', [BusinessSupportController::class, 'edit'])->name('businesssupport.edit');
Route::get('/services/businesssupport/{id}',[BusinessSupportController::class, 'show'])->name('businesssupport.show');
Route::patch('/services/businesssupport/{id}', [BusinessSupportController::class, 'update'])->name('businesssupport.update');
Route::post('/services/businesssupport/{id}/delete',[BusinessSupportController::class, 'destroy']);
Route::post('/services/businesssupport',[BusinessSupportController::class, 'store'])->name('businesssupport.store');

//facilities
Route::get('/services/facilities',[FacilitiesController::class, 'index'])->name('facilities.index');
Route::get('/services/facilities/create',[FacilitiesController::class,'create'])->name('facilities.create');;
Route::get('/services/facilities/{id}/edit', [FacilitiesController::class, 'edit'])->name('facilities.edit');
Route::get('/services/facilities/{id}',[FacilitiesController::class, 'show'])->name('facilities.show');
Route::patch('/services/facilities/{id}', [FacilitiesController::class, 'update'])->name('facilities.update');
Route::post('/services/facilities/{id}/delete',[FacilitiesController::class, 'destroy']);
Route::post('/services/facilities',[FacilitiesController::class, 'store'])->name('facilities.store');;

//todos
Route::get('/todos',[TodoController::class, 'index'])->name('todo.index');
Route::get('/todos/create',[TodoController::class,'create'])->name('todo.create');;
Route::get('/todos/{todo}/edit', [TodoController::class, 'edit'])->name('todo.edit');
Route::get('/todos/{todo}',[TodoController::class, 'show'])->name('todo.show');
Route::patch('/todos/{todo}', [TodoController::class, 'update'])->name('todo.update');
Route::post('/todos/{todo}/delete',[TodoController::class, 'destroy']);
Route::post('/todos',[TodoController::class, 'store'])->name('todo.store');;

Auth::routes();

Route::get('/users',[UserController::class, 'index']);

Route::get('/', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
