import { NextApiRequest, NextApiResponse } from 'next';
import { query as q } from 'faunadb';

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

const SignIn = async (req: NextApiRequest, res: NextApiResponse) => {
	const { email, password } = req.body;

	try {
		// Check if email and password are correct, if not throw an error
		const savedUser: SavedUserResponse = await fauna.query(
			q.If(
				q.Not(q.Exists(q.Match(q.Index('user_by_email'), q.Casefold(email)))),
				q.Abort('User or password incorrect'),
				q.If(
					q.Exists(q.Match(q.Index('user_by_password'), password)),
					q.Get(q.Match(q.Index('user_by_email'), q.Casefold(email))),
					q.Abort('User or password incorrect'),
				),
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

		// all user info
		const cookiesData = formattedUser;

		// Stringify the cookie data object
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

export default SignIn;
