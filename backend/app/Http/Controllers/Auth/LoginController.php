<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use Illuminate\Foundation\Auth\AuthenticatesUsers;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = '/';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }

    // public function login(LoginRequest $request)
    // {
    //     $validated = $request->validated();//array valid data
    //     $credentials = request(['email', 'password']);
    //     try {
    //         $response = $this->client->post("{$this->oauth_server}/oauth/token", [
    //             'form_params' => [
    //                 'grant_type' => 'password',
    //                 'client_id' => config('auth.oauth_client_id'),
    //                 'client_secret' => config('auth.oauth_secret'),
    //                 'username' => $request->email,
    //                 'password' => $request->password,
    //             ],
    //         ]);
    //     } catch (Exception $e) {
    //         return responder()->error($e->getCode(), $e->getMessage())->respond();
    //     }
    
    //     return responder()->success([
    //         "oauth" => json_decode((string)$response->getBody(), true)
    //     ])->respond();
    // }
}
