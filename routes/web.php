<?php

use App\Http\Controllers\AttendingConference;
use App\Http\Controllers\ConferencesController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\WorkOS\Http\Middleware\ValidateSessionWithWorkOS;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware([
    'auth',
    ValidateSessionWithWorkOS::class,
])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');

    Route::resource('conferences', ConferencesController::class);

    Route::post('/conferences/{conference}/attending', AttendingConference::class)->name('attend-conference');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
