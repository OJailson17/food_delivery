import { GetServerSideProps } from 'next';
import { Header } from '../components/Header';

export default function Home() {
	return (
		<>
			<Header />
		</>
	);
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
	return {
		props: {},
	};
};
