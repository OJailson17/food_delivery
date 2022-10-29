import Image from 'next/image';

import logoImg from '../../assets/food_delivery_logo.svg';
import {
	GoogleButton,
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
					<GoogleButton>
						<Image
							src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg'
							alt=''
							width='20'
							height='20'
						/>
						Entrar com o Google
					</GoogleButton>

					<a href='#'>Criar uma conta</a>
				</LoginFormContainer>
			</LoginContentContainer>
		</LoginMainContainer>
	);
};

export default Login;
