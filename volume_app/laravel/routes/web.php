<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});


Route::get('/admin', function () {
    return "Hello Admin";
});

Route::get('/home', function () {
    return "Hello home";
});
