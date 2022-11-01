import Image from 'next/image';
import { Receipt, MagnifyingGlass, SignOut } from 'phosphor-react';

import logoImg from '../../assets/food_delivery_logo.svg';
import {
	CartContainer,
	HeaderContainer,
	HeaderNavContent,
	SearchInputForm,
	SignOutButton,
} from './styles';

export const Header = () => {
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

				<SignOutButton title='Sair'>
					<SignOut size={32} />
				</SignOutButton>
			</HeaderNavContent>
		</HeaderContainer>
	);
};
