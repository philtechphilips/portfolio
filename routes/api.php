<?php

use App\Http\Controllers\Admin\Academics;
use App\Http\Controllers\Admin\Dashboard;
use App\Http\Controllers\Admin\Profiles;
use App\Http\Controllers\Admin\Schedule;
use App\Http\Controllers\Auth\PasswordResetLinkController;
use App\Http\Controllers\Main\MainFunctions;
use App\Http\Controllers\MobileAuth;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::middleware(['auth:sanctum'])->group(
    function ()
    {
        Route::get('/user', function (Request $request) {
            return $request->user();
        });

        Route::delete('/auth/token', [MobileAuth::class, 'destroy']);

        // Dashboard
        Route::post('/post-project', [Dashboard::class, 'store']);

        Route::get('/get-projects/{id}', [Dashboard::class, 'projectsDetails']);
    }
);

Route::post('/auth/token', [MobileAuth::class, 'store']);
Route::post('/register', [MobileAuth::class, 'register']);
Route::post('/forgot-password', [PasswordResetLinkController::class, 'store']);
Route::get('/sanctum/csrf-cookie', function (Request $request) {
    return response()->json(['csrf_token' => csrf_token()]);
});
Route::get('/get-projects', [Dashboard::class, 'projects']);
