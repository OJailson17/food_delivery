import NextAuth from 'next-auth';

declare module 'next-auth' {
	/**
	 * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
	 */
	interface Session {
		token: {
			name: string;
			email: string;
			picture: string;
			sub: string;
		};
	}

	interface SignIn {
		user: {
			name: string;
		};
	}
}
