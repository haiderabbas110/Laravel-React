<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth;

use Laravel\Lumen\Routing\Controller as BaseController;

class Controller extends BaseController
{
    protected function respondWithToken($token)
    {
        return response()->json([
            'token' => $token,
            'token_type' => 'bearer',
            'csrf_token' => Auth::payload()->get('csrf-token'),
            'expires_in' => Auth::factory()->getTTL() * 60
        ], 200);
    }
}
