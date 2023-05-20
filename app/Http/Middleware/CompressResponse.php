<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;

class CompressResponse
{
    public function handle(Request $request, Closure $next)
    {
        /** @var \Symfony\Component\HttpFoundation\Response $response */
        $response = $next($request);

        $content = $response->getContent();

        $compressedContent = gzencode($content, 9);

        $response->setContent($compressedContent);
        $response->header('Content-Encoding', 'gzip');
        $response->header('Vary', 'Accept-Encoding');

        return $response;
    }
}
