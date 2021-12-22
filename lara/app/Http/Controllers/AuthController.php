<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use  App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;


class AuthController extends Controller
{
    /**
     * Store a new user.
     *
     * @param  Request  $request
     * @return Response
     */
    public function register(Request $request)
    {
        
        //validate incoming request 
        $this->validate($request, [
            'name' => 'required|string',
            'email' => 'required|email|unique:users',
            'password' => 'required|confirmed',
        ]);

        try {

            $user = new User;
            $user->name = $request->input('name');
            $user->email = $request->input('email');
            $plainPassword = $request->input('password');
            $user->password = app('hash')->make($plainPassword);
            $user->emergency_number = $request->input('emergency_number');
            $user->phone_number = $request->input('phone_number');
            $user->skills = $request->input('skills');
            $user->profile_image = $request->input('profile_image');
            $user->designation = $request->input('designation');

            $user->save();

            //return successful response
            return response()->json(['user' => $user, 'message' => 'CREATED'], 201);

        } catch (\Exception $e) {
            //return error message
            return response()->json(['message' => 'User Registration Failed!'], 409);
        }

    }

     /**
     * Get a JWT via given credentials.
     *
     * @param  Request  $request
     * @return Response
     */
    public function login(Request $request)
    {
          
        //validate incoming request 
        $this->validate($request, [
            'email' => 'required|string',
            'password' => 'required|string',
        ]);

        $credentials = $request->only(['email', 'password']);

        if (! $token = Auth::claims(['csrf-token' => Str::random(12)])->attempt($credentials)) {
            return response()->json(['message' => 'Unauthorized'], 401);
        }

        return $this->respondWithToken($token);
    }


      /**
     * Update user.
     *
     * @return Response
     */
    public function updateUser(Request $request)
    {
        
        try {
           
            $id = $request['data']['id'];
            $user = User::find($id);

            $user->emergency_number = $request['data']['emergency'];
            $user->phone_number = $request['data']['phone'];
            $user->skills = $request['data']['skills'];
            //$user->profile_image = $request['data']['profile_image'];
            

            $user->update($request->all());

            //return successful response
            return response()->json(['user' => $user, 'message' => 'UPDATED'], 201);

        } catch (\Exception $e) {
            //return error message
            return response()->json(['message' => 'User Update Failed!'], 409);
        }

    }


}