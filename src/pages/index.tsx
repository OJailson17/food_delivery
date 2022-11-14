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

interface HomeServerProps {
	isUserLogged: boolean;
}

export default function Home({ isUserLogged }: HomeServerProps) {
	const dispatch = useDispatch<AppDispatch>();

	// Get all local storage items and set in the state
	useEffect(() => {
		dispatch(getItems());
	}, []);

	return (
		<>
			<Header isUserLogged={isUserLogged} />
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

	let isUserLogged = false;

	if (session || userCookies) {
		isUserLogged = true;
	}

	return {
		props: {
			isUserLogged,
		},
	};
};
