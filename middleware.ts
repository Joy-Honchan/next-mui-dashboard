import { NextRequest, NextResponse } from 'next/server'

// Limit the middleware to paths starting with `/api/`
export const config = {
    matcher: '/api/:function*',
}

export function middleware(request: NextRequest) {
    // Call our authentication function to check the request
    if (request.nextUrl.pathname !== `/api/auth` && !request.headers.has('Authorization')) {
        // Respond with JSON indicating an error message
        return new NextResponse(
            JSON.stringify({ success: false, message: 'authentication failed' }),
            { status: 401, headers: { 'content-type': 'application/json' } }
        )
    }
}