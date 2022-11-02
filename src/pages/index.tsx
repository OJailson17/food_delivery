import { GetServerSideProps } from 'next';
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
		</>
	);
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
	return {
		props: {},
	};
};
