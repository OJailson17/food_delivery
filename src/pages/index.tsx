import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { ItemCategory } from '../components/ItemCategory';
import { AppDispatch } from '../store';
import { getItems } from '../store/reducers/cartReducer';
import { MainContentContainer } from './styles';

export default function Home() {
	const dispatch = useDispatch<AppDispatch>();

	// Get all local storage items and set in the state
	useEffect(() => {
		dispatch(getItems());
	}, []);

	return (
		<>
			<Header />
			<Hero />

			<MainContentContainer>
				<ItemCategory category='Pratos Principais' />
				<ItemCategory category='Sobremesas' />
				<ItemCategory category='Bebidas' />
			</MainContentContainer>

			<Footer />
		</>
	);
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
	// get the user session
	const session = await getSession({ req });

	let userCookies;

	if (req.cookies.user) {
		userCookies = JSON.parse(String(req.cookies.user));
	}

	// console.log(session);

	// console.log(req.cookies);

	// If the user is already authenticated, redirect it to the login page
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
