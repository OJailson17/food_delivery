import { Stripe } from 'stripe';

import packageVersion from '../../package.json';

const { version } = packageVersion;

export const stripe = new Stripe(`${process.env.STRIPE_SECRET_KEY}`, {
	apiVersion: '2022-08-01',
	appInfo: {
		name: 'Food Delivery',
		version,
	},
});
