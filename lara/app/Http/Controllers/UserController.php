<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use  App\Models\User;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;

class UserController extends Controller
{
     /**
     * Instantiate a new UserController instance.
     *
     * @return void
     */
    public function __construct()
    {
        //$this->middleware('auth');
    }

    /**
     * Get the authenticated User.
     *
     * @return Response
     */
    public function user()
    {
        return response()->json(['user' => Auth::user()], 200);
    }

    /**
     * Get all User.
     *
     * @return Response
     */
    public function allUsers()
    {
         return response()->json(['users' =>  User::all()], 200);
    }

    /**
     * Get one user.
     *
     * @return Response
     */
    public function singleUser(Request $request)
    {
        $id = $request->id;
        try {
            $user = User::findOrFail($id);

            return response()->json(['user' => $user], 200);

        } catch (\Exception $e) {

            return response()->json(['message' => 'user not found!'], 404);
        }

    }
    

    /**
     * Get one user.
     *
     * @return Response
     */
    public function searchUser(Request $request)
    {
        $search = $request->search_keyword;
        try {
            $data = User::where("name", 'like' , "%".$search.'%')->get();
            $res['success'] = true;
            $res['data'] =  $search ? $data : "";
            $res['message'] = "search item success";
            return response($res, 200);
        } catch (\Illuminate\Database\QueryException $ex) {
            $res['success'] = false;
            $res['message'] = $ex->getMessage();
            return response($res, 500);
        }
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
            $user->emergency_number = "22222";
            $user->emergency_number = $request['data']['emergency'];
            $user->phone_number = $request['data']['phone'];
            $user->skills = $request['data']['skills'];
            $user->profile_image = $request['data']['profile'];

            $user->update($request->all());

            //return successful response
            return response()->json(['user' => $user, 'message' => 'User has been updated.'], 201);
        } catch (\Exception $e) {
            //return error message
            return response()->json(['message' => 'User Update Failed!'], 409);
        }
    }

    public function uploadimage(Request $req)
    {
        $user = Auth::user();
        $id = $user->id;
        $user = User::find($id);

        
        $file = $req->file();

        // Build the input for validation
        $fileArray = array('image' => $file);
        $type       = 'jpeg,jpg,png,gif';
        // Tell the validator that this file should be an image
        $rules = array(
        'image' => 'mimes:'.$type.'|required|max:500000' // max 10000kb
        );

        // Now pass the input and rules into the validator
        $validator = Validator::make($fileArray, $rules);
        // Check to see if validation fails or passes
        if ($validator->fails())
        {
            // Redirect or return json to frontend with a helpful message to inform the user 
            // that the provided file was not an adequate type
            $error = "The image must be a type of".$type;
            
            // print_r($error['image']);
            return response()->json(['message' => $error], 400);
        } else
        {
            // Store the File Now
            // read image from temporary file
            if ($req->file()) {
                $file = $req->file('selectedFile');
                $fileName = time() . '_' . $req->file('selectedFile')->getClientOriginalName();
                $user->profile_image = $fileName;
                $path = public_path('asset');
                $file->move($path,$fileName);
                $user->save();
                return response()->json(['user' => $user, 'message' => 'User image has been updated.'], 201);
            }
        };
        
       

        
    }

}