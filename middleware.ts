import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const publicPageUrls = ['/auth/login', '/auth/register'];
const protectedPageUrls = ['/profile'];

export function middleware(request: NextRequest) {
  const token = request.cookies.get('jwt')?.value;
  const path = request.nextUrl.pathname;

  const isPublic = publicPageUrls.includes(path);
  const isProtected = protectedPageUrls.includes(path);

  if (token && isPublic) {
    return NextResponse.redirect(new URL('/profile', request.url));
  }

  if (!token && isProtected) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [...publicPageUrls, ...protectedPageUrls],
};
