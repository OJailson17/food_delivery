import Image from 'next/image';
import { Receipt, MagnifyingGlass, SignOut } from 'phosphor-react';
import { signOut } from 'next-auth/react';
import { deleteCookie } from 'cookies-next';

import logoImg from '../../assets/food_delivery_logo.svg';
import {
	CartContainer,
	HeaderContainer,
	HeaderNavContent,
	SearchInputForm,
	SignOutButton,
} from './styles';

export const Header = () => {
	const handleSignOut = () => {
		deleteCookie('user');
		signOut();
	};

	return (
		<HeaderContainer>
			<Image src={logoImg} alt='' priority />
			<HeaderNavContent>
				<SearchInputForm>
					<MagnifyingGlass size={24} />
					<input type='text' placeholder='Busque pelas opções de prato' />
				</SearchInputForm>

				<CartContainer href='#'>
					<Receipt size={32} />
					Meu pedido (0)
				</CartContainer>

				<SignOutButton title='Sair' onClick={handleSignOut}>
					<SignOut size={32} />
				</SignOutButton>
			</HeaderNavContent>
		</HeaderContainer>
	);
};
