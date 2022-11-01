import { GetServerSideProps } from 'next';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';

export default function Home() {
	return (
		<>
			<Header />
			<Hero />
		</>
	);
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
	return {
		props: {},
	};
};
