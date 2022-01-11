<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use  App\Models\User;

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


        /*    $this->validate($request, [
            'profile_image' => 'image|mimes:jpg,png,jpeg,gif,svg|max:2048',
        ]);
 */
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
        if ($req->file()) {
            $fileName = time() . '_' . $req->file('selectedFile')->getClientOriginalName();
            $filePath = $req->file('selectedFile')->storeAs('public', $fileName, 'public');
            $user->profile_image = '/storage/' . $filePath;
            $user->save();
        }
    }

}