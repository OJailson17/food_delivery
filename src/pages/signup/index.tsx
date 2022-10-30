import Image from 'next/image';
import Link from 'next/link';

import { GoogleButton } from '../../styles/common';
import {
	SignUpContentContainer,
	SignUpForm,
	SignUpFormContainer,
	SignUpMainContainer,
} from './styles';

import logoImg from '../../assets/food_delivery_logo.svg';

const SignUp = () => {
	return (
		<SignUpMainContainer>
			<SignUpContentContainer>
				<Image src={logoImg} alt='' priority />

				<SignUpFormContainer>
					<h2>Crie sua conta</h2>

					<SignUpForm>
						<div>
							<label htmlFor='name'>Nome</label>
							<input type='name' placeholder='Exemplo: John Doe' />
						</div>

						<div>
							<label htmlFor='email'>Email</label>
							<input type='email' placeholder='Exemplo: john.doe@exemplo.com' />
						</div>

						<div>
							<label htmlFor='password'>Senha</label>
							<input type='password' placeholder='No mínimo 6 caracteres' />
						</div>

						<button type='submit'>Criar conta</button>
					</SignUpForm>

					<span>ou</span>

					{/* Google button */}
					<GoogleButton>
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
