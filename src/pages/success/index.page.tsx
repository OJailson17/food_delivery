import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/react';
import Head from 'next/head';
import { CheckCircle } from 'phosphor-react';
import React from 'react';
import { Header } from '../../components/Header';
import {
	HomePageButton,
	PaymentApproved,
	SuccessMainContainer,
} from './styles';

const Success = () => {
	return (
		<>
			<Head>
				<title>Sucesso | Food Delivery</title>
			</Head>

			<Header />

			<SuccessMainContainer>
				<h2>Pedido a caminho!</h2>
				<PaymentApproved>
					<CheckCircle />
					<p>Pagamento aprovado!</p>
				</PaymentApproved>

				<p>O seu pedido será entregue em breve</p>

				<HomePageButton href={'/'}>
					<button>Página inicial</button>
				</HomePageButton>
			</SuccessMainContainer>
		</>
	);
};

export default Success;

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
	// get the user session
	const session = await getSession({ req });

	let userCookies;

	if (req.cookies.user) {
		userCookies = JSON.parse(String(req.cookies.user));
	}

	// If the user is not authenticated, redirect it to the login page
	if (!session) {
		if (!userCookies) {
			return {
				redirect: {
					destination: '/login',
					permanent: false,
				},
			};
		}
	}

	return {
		props: {},
	};
};
