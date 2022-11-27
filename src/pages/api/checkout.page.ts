import { NextApiRequest, NextApiResponse } from 'next';

import { stripe } from '../../lib/stripe';

interface CartItem {
	id: string;
	title: string;
	description: string;
	price: number;
	quantity: number;
	image: string;
}

interface IRequest {
	items: CartItem[];
}

const createCheckoutSession = async (
	req: NextApiRequest,
	res: NextApiResponse,
) => {
	const { items } = req.body as IRequest;

	if (req.method === 'POST') {
		const formattedItems = items.map(item => {
			return {
				price_data: {
					currency: 'BRL',
					product_data: {
						name: item.title,
						description: item.description,
					},
					unit_amount: item.price * 100,
				},
				quantity: item.quantity,
			};
		});

		try {
			const session = await stripe.checkout.sessions.create({
				success_url: 'http://localhost:3000/success',
				cancel_url: 'http://localhost:3000/',
				mode: 'payment',
				line_items: formattedItems,
				payment_method_types: ['card'],
			});

			res.json({
				sessionId: session.id,
			});
		} catch (error) {
			console.log(error);
		}
	} else {
		res.setHeader('Allow', 'POST');
		res.status(405).end('Method not allowed');
	}
};

export default createCheckoutSession;
