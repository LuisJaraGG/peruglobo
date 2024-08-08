import { NextResponse, type NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token'); // Obtener el token de las cookies
  const { pathname } = request.nextUrl;


  // Redirigir a /login si no hay token y se intenta acceder a una ruta protegida
  if (!token && pathname.startsWith('/admin')) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // Redirigir a /admin si hay token y se intenta acceder a /login
  if (token && pathname === '/login') {
    return NextResponse.redirect(new URL('/admin/dashboard', request.url));
  }

  // Permitir el acceso a las rutas protegidas si hay un token válido
  return NextResponse.next();
}

// Configurar las rutas que deben usar el middleware
export const config = {
  matcher: ['/admin/:path*', '/login'], // Rutas protegidas y la ruta de login
};
