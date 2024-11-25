<?php

use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home');
});


Route::get('/contactpage', [HomeController::class, 'contactpage']);
Route::get('/aboutus', [HomeController::class, 'aboutus']);
Route::get('/gallery', [HomeController::class, 'gallery']);
Route::get('/event', [HomeController::class, 'event']);
