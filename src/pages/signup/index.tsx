import { getSession, signIn } from 'next-auth/react';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';

import Image from 'next/image';
import Link from 'next/link';

import { api } from '../../lib/axios';

import { GoogleButton } from '../../styles/common';

import {
	SignUpContentContainer,
	SignUpForm,
	SignUpFormContainer,
	SignUpMainContainer,
} from './styles';

import logoImg from '../../assets/food_delivery_logo.svg';

interface IFormReturn {
	name: string;
	email: string;
	password: string;
}

const SignUp = () => {
	const { register, handleSubmit } = useForm<IFormReturn>();

	const router = useRouter();

	const handleSignUp = async (data: IFormReturn) => {
		console.log(data);

		try {
			const response = await api.post('/api/auth/register', data);
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
		<SignUpMainContainer>
			<SignUpContentContainer>
				<Image src={logoImg} alt='' priority />

				<SignUpFormContainer>
					<h2>Crie sua conta</h2>

					<SignUpForm onSubmit={handleSubmit(handleSignUp)}>
						<div>
							<label htmlFor='name'>Nome</label>
							<input
								type='name'
								placeholder='Exemplo: John Doe'
								{...register('name')}
							/>
						</div>

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

						<button type='submit'>Criar conta</button>
					</SignUpForm>

					<span>ou</span>

					{/* Google button */}
					<GoogleButton onClick={() => signIn()}>
						<Image
							src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg'
							alt=''
							width='20'
							height='20'
						/>
						Cadastrar com o Google
					</GoogleButton>

					<Link href='/login'>Já tenho uma conta</Link>
				</SignUpFormContainer>
			</SignUpContentContainer>
		</SignUpMainContainer>
	);
};

export default SignUp;

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
