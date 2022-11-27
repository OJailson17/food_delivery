import { query as q } from 'faunadb';
import GoogleProvider from 'next-auth/providers/google';
import { randomUUID } from 'crypto';

import NextAuth, { Session, SignIn } from 'next-auth';

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
		async session({ session }: { session: Session }): Promise<Session> {
			console.log(session);

			return session;
		},

		async signIn({ user }: SignIn): Promise<boolean> {
			const { email, name, image } = user;

			const userData = {
				id: randomUUID(),
				name,
				email,
				image,
				password: '',
			};

			try {
				const savedUser = await fauna.query(
					q.If(
						q.Not(
							q.Exists(
								q.Match(q.Index('user_by_email'), q.Casefold(email || '')),
							),
						),
						q.Create(q.Collection('users'), {
							data: userData,
						}),
						q.Get(q.Match(q.Index('user_by_email'), q.Casefold(email || ''))),
					),
				);
				console.log({ savedUser });

				return true;
			} catch (error) {
				console.log(error);
				return false;
			}
		},

		async redirect({ baseUrl }: { baseUrl: string }): Promise<string> {
			baseUrl = 'http://localhost:3000/login';
			return baseUrl;
		},
	},
	secret: `${process.env.NEXTAUTH_SECRET}`,
};

export default NextAuth(authOptions);
