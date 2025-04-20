<?php

namespace App\Http\Controllers;

use App\Models\Url;
use App\Models\Visit;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Carbon\Carbon;
use GeoIp;

class UrlController extends Controller
{
    //Recibe una Url larga , la valida y la guarda como un short link
    public function store(Request $request)
    {
        dd('LLEGA A STORE ✅');
        $request->validate([
            'original_url' => 'required|url|max:2048',
            'custom_alias' => 'nullable|string|max:20|unique:urls,custom_alias',
            'password' => 'nullable|string|min:4|max:64',
            'expires_at' => 'nullable|date|after:now',
        ]);
        $shortCode = $request->custom_alias ?? Str::random(6);

        $url = Url::create([
            'original_url' => $request->original_url,
            'short_code' => $shortCode,
            'custom_alias' => $request->custom_alias,
            'password' => $request->password,
            'ip_creation' => $request->ip(),
            'country_code' => null, // Puedes usar geoip más adelante
            'user_agent' => $request->userAgent(),
            'expires_at' => $request->expires_at,
        ]);

        return response()->json([
            'message' => 'URL shortened succesfully. ',
            'short_url' => url("/$shortCode"),
        ], 201);
    }

    //Redirige al enlace original si todo es válido.
    public function redirect(Request $request, $code)
    {
        $url = Url::where('short_code', $code)
            ->orWhere('custom_alias', $code)
            ->firstOrFail();

        if (!$url->is_active) {
            return response()->json(['message' => 'This link is disabled. '], 403);
        }
        if ($url->expires_at && now()->greaterThan(Carbon::parse($url->expires_at))) {
            return response()->json(['message' => 'This link has expired.']);
        }

        if ($url->password) {
            $request->validate([
                'password' => 'required|string'
            ]);
            if (!Hash::check($request->password, $url->password)) {
                return response()->json(['message' => 'Incorrect password.'], 403);
            }
        }


        //Guardar visita individual 
        Visit::create([
            'url_id' => $url->id,
            'ip' => $request->ip(),
            'user_agent' => $request->userAgent(),
            'country_code' => geoip($request->ip())->iso_code,
            'visited_at' => now(),
        ]);

        $url->increment('visit_count');

        return redirect($url->original_url);
    }
}
