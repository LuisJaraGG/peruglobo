import { NextResponse ,type NextRequest} from 'next/server';

export function middleware(request:NextRequest) {
  const token = request.cookies.get('token'); // Obtener el token de las cookies

  if (!token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }
  if (!token && request.nextUrl.pathname === '/login') {
    return NextResponse.redirect(new URL('/admin', request.url));
  }

  return NextResponse.next();
}

// Configurar las rutas que deben usar el middleware
export const config = {
  matcher: ['/admin/:path*'], // Rutas protegidas
};