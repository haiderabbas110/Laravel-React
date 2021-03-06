<?php

/** @var \Laravel\Lumen\Routing\Router $router */

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

// API route group
$router->group(['prefix' => 'api'], function () use ($router) {
    $router->post('register', 'AuthController@register');
    $router->post('login', 'AuthController@login');
    
    

    $router->group(['middleware' => 'auth'], function () use ($router) {
        $router->put('user', 'UserController@updateUser');
        $router->post('user', 'UserController@uploadimage');
        $router->get('user', 'UserController@user');
        $router->get('singleuser', 'UserController@singleUser');
        $router->get('users', 'UserController@allUsers');
        $router->get('searchUser', 'UserController@searchUser');
    });
});

//  $router->options('/{any:.*}', [function (){ 
//     return response(['status' => 'success']); 
//    }
//   ]
//  );