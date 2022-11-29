import { GetServerSideProps } from 'next';
import { signIn, getSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';

import Link from 'next/link';
import Image from 'next/image';
import * as yup from 'yup';

import { api } from '../../lib/axios';
import { GoogleButton } from '../../styles/common';

import 'rsuite/dist/rsuite.min.css';
import 'react-toastify/dist/ReactToastify.css';
import {
	LoginContentContainer,
	LoginForm,
	LoginFormContainer,
	LoginMainContainer,
} from './styles';

import logoImg from '../../assets/food_delivery_logo.svg';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from 'rsuite';
import { ToastContainer, toast } from 'react-toastify';
import Head from 'next/head';

interface IFormReturn {
	email: string;
	password: string;
}

const schema = yup.object({
	email: yup
		.string()
		.email('Email precisa ser válido')
		.min(3, 'No mínimo 3 caracteres')
		.trim()
		.required('Campo obrigatório'),
	password: yup
		.string()
		.min(6, 'No mínimo 6 caracteres')
		.trim()
		.required('Campo obrigatório'),
});

const Login = () => {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm<IFormReturn>({
		defaultValues: {
			email: '',
			password: '',
		},
		resolver: yupResolver(schema),
	});

	const router = useRouter();

	const handleSignIn = async (data: IFormReturn) => {
		try {
			const response = await api.post('/api/auth/login', data);

			// If there is some error, show on the toast
			if (response.data.error) {
				toast(response.data.error?.description, {
					type: 'error',
					position: 'top-center',
					theme: 'dark',
				});
				router.push('/login');
			}

			// If request return 200, redirect to home page
			if (response.data.success) {
				router.push('/');
			}
		} catch (error) {
			toast('Server error', {
				type: 'error',
				position: 'top-center',
				theme: 'dark',
			});
			console.log(error);
		}
	};

	return (
		<>
			<Head>
				<title>Login | Food Delivery</title>
			</Head>

			<ToastContainer />
			<LoginMainContainer>
				<LoginContentContainer>
					<Image src={logoImg} alt='' className='logo' priority />

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
								<span>{errors.email?.message}</span>
							</div>

							<div>
								<label htmlFor='password'>Senha</label>
								<input
									type='password'
									placeholder='No mínimo 6 caracteres'
									{...register('password')}
								/>
								<span>{errors.password?.message}</span>
							</div>

							<Button
								type='submit'
								loading={isSubmitting}
								className='submitButton'
							>
								Entrar
							</Button>
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
		</>
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
