import type { NextAuthConfig } from 'next-auth';
 
export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;

      const isProtectedRoute =
        nextUrl.pathname.startsWith('/');
        // nextUrl.pathname.startsWith('/home') ||
        // nextUrl.pathname.startsWith('/channel') ||
        // nextUrl.pathname.startsWith('/live');
      
      if (isProtectedRoute) {
         return true;
      } 
    },
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;