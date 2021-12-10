<?php

namespace App\Http\Middleware;
use Illuminate\Support\Facades\Auth;
use Illuminate\Auth\Access\AuthorizationException;
use Closure;

class CsrfMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if (
          $request->header('csrf-token') !==
          Auth::payload()->get('csrf-token')
        ) {
            throw new AuthorizationException;
        }
        return $next($request);
    }
}