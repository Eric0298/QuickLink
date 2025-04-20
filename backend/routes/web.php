<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UrlController;
use Illuminate\Http\Request;

Route::get('/', function () {
    return view('welcome');
});
Route::post('/shorten', [UrlController::class, 'store']);
Route::get('/{code}', [UrlController::class, 'redirect']);
