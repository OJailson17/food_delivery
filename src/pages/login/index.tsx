import { GetServerSideProps } from 'next';
import { signIn, getSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';

import logoImg from '../../assets/food_delivery_logo.svg';
import { GoogleButton } from '../../styles/common';
import {
	LoginContentContainer,
	LoginForm,
	LoginFormContainer,
	LoginMainContainer,
} from './styles';

const Login = () => {
	return (
		<LoginMainContainer>
			<LoginContentContainer>
				<Image src={logoImg} alt='' priority />

				<LoginFormContainer>
					<h2>Faça login</h2>

					<LoginForm>
						<div>
							<label htmlFor='email'>Email</label>
							<input type='email' placeholder='Exemplo: john.doe@exemplo.com' />
						</div>

						<div>
							<label htmlFor='password'>Senha</label>
							<input type='password' placeholder='No mínimo 6 caracteres' />
						</div>

						<button type='submit'>Entrar</button>
					</LoginForm>

					<span>ou</span>

					{/* Google button */}
					<GoogleButton onClick={() => signIn()}>
						<Image
							src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg'
							alt=''
							width='20'
							height='20'
						/>
						Entrar com o Google
					</GoogleButton>

					<Link href='/signup'>Criar uma conta</Link>
				</LoginFormContainer>
			</LoginContentContainer>
		</LoginMainContainer>
	);
};

export default Login;

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
	// get the user session
	const session = await getSession({ req });

	// If the user is already authenticated, redirect it to the home page
	if (session?.token.email) {
		return {
			redirect: {
				destination: '/',
				permanent: false,
			},
		};
	}

	return {
		props: {},
	};
};
