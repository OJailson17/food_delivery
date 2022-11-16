import { GetServerSideProps } from 'next';
import { signIn, getSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';

import Link from 'next/link';
import Image from 'next/image';

import { api } from '../../lib/axios';
import { GoogleButton } from '../../styles/common';

import {
	LoginContentContainer,
	LoginForm,
	LoginFormContainer,
	LoginMainContainer,
} from './styles';

import logoImg from '../../assets/food_delivery_logo.svg';

interface IFormReturn {
	email: string;
	password: string;
}

const Login = () => {
	const { register, handleSubmit } = useForm<IFormReturn>();

	const router = useRouter();

	const handleSignIn = async (data: IFormReturn) => {
		console.log(data);

		try {
			const response = await api.post('/api/auth/login', data);
			console.log(response.data);

			// TODO create a toast to show the error
			if (response.data?.error?.description === 'User already exists') {
				alert('Usuário já existe');
				router.push('/login');
			}

			if (response.data.success) {
				router.push('/');
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<LoginMainContainer>
			<LoginContentContainer>
				<Image src={logoImg} alt='' priority />

				<LoginFormContainer>
					<h2>Faça login</h2>

					<LoginForm onSubmit={handleSubmit(handleSignIn)}>
						<div>
							<label htmlFor='email'>Email</label>
							<input
								type='email'
								placeholder='Exemplo: john.doe@exemplo.com'
								{...register('email')}
							/>
						</div>

						<div>
							<label htmlFor='password'>Senha</label>
							<input
								type='password'
								placeholder='No mínimo 6 caracteres'
								{...register('password')}
							/>
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

	let userCookies;

	if (req.cookies.user) {
		userCookies = JSON.parse(String(req.cookies.user));
	}

	console.log(session);

	console.log(req.cookies);

	// If the user is already authenticated, redirect it to the home page
	if (session || userCookies) {
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
