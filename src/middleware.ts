import { updateSession } from '@/utils/supabase/middleware'
import { createClient } from '@/utils/supabase/server';
import { NextRequest, NextResponse } from 'next/server'

export async function middleware(request: NextRequest) {
  const supabase = createClient();

  const { data: { user }, error } = await supabase.auth.getUser();

  if (!user) {
    // Allow access to /login and /signup for unauthenticated users
    if (request.nextUrl.pathname === '/login') {
      return NextResponse.next(); // Continue to the login page
    } else if (request.nextUrl.pathname === '/signup') {
      return NextResponse.next(); // Continue to the signup page
    }  else {
      return NextResponse.redirect(new URL('/login', request.url)); // Redirect to login for other paths
    }
  } else {
    // Redirect authenticated users away from /login and /signup
    if (request.nextUrl.pathname.startsWith('/login') || request.nextUrl.pathname.startsWith('/signup')) {
      return NextResponse.redirect(new URL('/', request.url));
    }
  }

  return await updateSession(request);
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * Feel free to modify this pattern to include more paths.
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}
