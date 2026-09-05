import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isProtectedRoute =
        nextUrl.pathname.startsWith('/home') ||
        nextUrl.pathname.startsWith('/live') ||
        nextUrl.pathname.startsWith('/movies') ||
        nextUrl.pathname.startsWith('/shows') || 
        nextUrl.pathname.startsWith('/channel');
      if (isProtectedRoute) {
        return isLoggedIn;
      }
      return true;
    },
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;

