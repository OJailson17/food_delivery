import { GetServerSideProps } from 'next';
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
	return {
		props: {},
	};
};
