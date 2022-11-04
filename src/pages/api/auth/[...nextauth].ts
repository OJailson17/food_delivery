import NextAuth from 'next-auth';
import { query as q } from 'faunadb';
import GoogleProvider from 'next-auth/providers/google';

import { fauna } from '../../../lib/faunadb';

export const authOptions = {
	// Configure one or more authentication providers
	providers: [
		GoogleProvider({
			clientId: `${process.env.GOOGLE_CLIENT_ID}`,
			clientSecret: `${process.env.GOOGLE_CLIENT_SECRET}`,
		}),
	],
	callbacks: {
		async session(session) {
			return session;
		},

		async signIn({ user, account, profile }) {
			const { email, name, id, image } = user;

			const userData = {
				id,
				name,
				email,
				image,
				password: '',
			};

			try {
				const savedUser = await fauna.query(
					q.If(
						q.Not(
							q.Exists(q.Match(q.Index('user_by_email'), q.Casefold(email))),
						),
						q.Create(q.Collection('users'), {
							data: userData,
						}),
						q.Get(q.Match(q.Index('user_by_email'), q.Casefold(email))),
					),
				);
				console.log({ savedUser });

				return true;
			} catch (error) {
				console.log(error);
				return false;
			}
		},

		async redirect({ url, baseUrl }) {
			// console.log({ url, baseUrl });

			return baseUrl;
		},
	},
};

export default NextAuth(authOptions);
