import { NextApiRequest, NextApiResponse } from 'next';
import { query as q } from 'faunadb';
import { randomUUID } from 'crypto';

import { fauna } from '../../../lib/faunadb';
import { setCookie } from '../../../utils/cookies';

interface User {
	id: string;
	name: string;
	email: string;
	password: string;
	image: string;
}

interface SavedUserResponse {
	data: User;
}

const SignUp = async (req: NextApiRequest, res: NextApiResponse) => {
	const { name, email, password } = req.body;

	const userData: User = {
		id: randomUUID(),
		name,
		email: email.toLowerCase(),
		password,
		image: '',
	};

	try {
		const savedUser: SavedUserResponse = await fauna.query(
			q.If(
				q.Exists(q.Match(q.Index('user_by_email'), q.Casefold(email))),
				q.Abort('User already exists'),
				q.Create(q.Collection('users'), {
					data: userData,
				}),
			),
		);

		// Format the user data before return it
		const { id, name, email: userEmail, image } = savedUser.data;

		const formattedUser = {
			id,
			name,
			email: userEmail,
			image,
		};

		const cookiesData = formattedUser;

		const cookieString = JSON.stringify(cookiesData);

		// Calling our pure function using the `res` object, it will add the `set-cookie` header
		// Add the `set-cookie` header on the main domain and expire after 30 days
		setCookie(res, 'user', cookieString, {
			path: '/',
			maxAge: 2592000,
		});
		// Return the `set-cookie` header so we can display it in the browser and show that it works!
		res.getHeader('Set-Cookie');

		return res.status(200).json({
			success: true,
			user: formattedUser,
		});
	} catch (error) {
		return res.json({
			error,
		});
	}
};

export default SignUp;
