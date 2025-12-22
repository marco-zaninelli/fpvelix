import { NextRequest, NextResponse } from 'next/server';
import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

const intlMiddleware = createMiddleware(routing);

export default function middleware(req: NextRequest) {
    const basicAuth = req.headers.get('authorization');

    // 1. Check for Basic Auth first
    if (basicAuth) {
        const authValue = basicAuth.split(' ')[1];
        const [user, pwd] = atob(authValue).split(':');

        // Replace 'admin' and 'your-password' with your desired credentials
        if (user === 'fpvelix' && pwd === 'H1Fel1x') {
            // 2. If authenticated, proceed to next-intl middleware
            return intlMiddleware(req);
        }
    }

    // 3. If not authenticated, trigger the browser's auth popup
    return new NextResponse('Authentication Required', {
        status: 401,
        headers: {
            'WWW-Authenticate': 'Basic realm="Maintenance Mode"',
        },
    });
}

export const config = {
    // Keeping your existing matcher
    matcher: '/((?!api|trpc|_next|studio|_vercel|.*\\..*).*)'
};