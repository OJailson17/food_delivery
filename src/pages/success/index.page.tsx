import { GetServerSideProps } from 'next';
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

// export const getServerSideProps: GetServerSideProps = async ({ req }) => {
// 	console.log(req.headers);

// 	return {
// 		props: {},
// 	};
// };
