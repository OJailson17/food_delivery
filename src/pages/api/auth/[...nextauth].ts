import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export const authOptions = {
	// Configure one or more authentication providers
	providers: [
		GoogleProvider({
			clientId: `${process.env.GOOGLE_CLIENT_ID}`,
			clientSecret: `${process.env.GOOGLE_CLIENT_SECRET}`,
		}),
	],
	callbacks: {
		async signIn(session) {
			// console.log(session);

			return true;
		},
		async session(session) {
			return session;
		},

		async redirect({ url, baseUrl }) {
			// console.log({ url, baseUrl });

			return baseUrl;
		},
	},
};

export default NextAuth(authOptions);
