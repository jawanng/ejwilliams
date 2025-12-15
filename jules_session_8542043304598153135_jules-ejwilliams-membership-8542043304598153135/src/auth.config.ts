import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
    pages: {
        signIn: '/login',
    },
    callbacks: {
        authorized({ auth, request: { nextUrl } }) {
            const isLoggedIn = !!auth?.user;
            const isOnDashboard = nextUrl.pathname.startsWith('/dashboard') ||
                nextUrl.pathname.startsWith('/minutes') ||
                nextUrl.pathname.startsWith('/payments') ||
                nextUrl.pathname.startsWith('/tickets') ||
                nextUrl.pathname.startsWith('/reports') ||
                nextUrl.pathname.startsWith('/directory');
            const isOnAdmin = nextUrl.pathname.startsWith('/admin');

            if (isOnAdmin) {
                if (isLoggedIn) {
                    // TODO: Check for admin role
                    return true;
                }
                return false; // Redirect unauthenticated users to login page
            }

            if (isOnDashboard) {
                if (isLoggedIn) return true;
                return false; // Redirect unauthenticated users to login page
            }
            return true;
        },
    },
    providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;
