import { getSession, signIn } from 'next-auth/react';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import Image from 'next/image';
import Link from 'next/link';
import * as yup from 'yup';

import { api } from '../../lib/axios';

import { GoogleButton } from '../../styles/common';

import 'rsuite/dist/rsuite.min.css';
import {
	SignUpContentContainer,
	SignUpForm,
	SignUpFormContainer,
	SignUpMainContainer,
} from './styles';

import logoImg from '../../assets/food_delivery_logo.svg';
import { Button } from 'rsuite';

interface IFormReturn {
	name: string;
	email: string;
	password: string;
}

const schema = yup.object({
	name: yup
		.string()
		.min(3, 'No mínimo 3 caracteres')
		.trim()
		.required('Campo obrigatório'),
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

const SignUp = () => {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm<IFormReturn>({
		defaultValues: {
			name: '',
			email: '',
			password: '',
		},
		resolver: yupResolver(schema),
	});

	const router = useRouter();

	const handleSignUp = async (data: IFormReturn) => {
		console.log(data);

		try {
			const response = await api.post('/api/auth/register', data);

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
				<Image src={logoImg} alt='' className='logo' priority />

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
							<span>{errors.name?.message}</span>
						</div>

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
							Criar conta
						</Button>
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
