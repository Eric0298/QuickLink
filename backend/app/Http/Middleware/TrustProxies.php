<?php

namespace App\Http\Middleware;

use Illuminate\Http\Middleware\TrustProxies as BaseTrustProxies;
use Illuminate\Http\Request;

class TrustProxies extends BaseTrustProxies
{
    /**
     * Los proxies en los que se puede confiar.
     *
     * @var array<int, string>|string|null
     */
    protected $proxies;

    /**
     * Encabezados que se deben usar para detectar proxies.
     *
     * @var array
     */
    protected $headers = [
        'x-forwarded-for',
        'x-forwarded-host',
        'x-forwarded-port',
        'x-forwarded-proto',
    ];
}
