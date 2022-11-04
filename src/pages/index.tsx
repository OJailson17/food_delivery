import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/react';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { ItemCategory } from '../components/ItemCategory';
import { MainContentContainer } from './styles';

export default function Home() {
	return (
		<>
			<Header />
			<Hero />

			<MainContentContainer>
				<ItemCategory />
				<ItemCategory />
			</MainContentContainer>

			<Footer />
		</>
	);
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
	// get the user session
	const session = await getSession({ req });

	// If the user is already authenticated, redirect it to the login page
	if (!session) {
		return {
			redirect: {
				destination: '/login',
				permanent: false,
			},
		};
	}

	return {
		props: {},
	};
};
