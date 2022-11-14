import Image from 'next/image';
import { Receipt, MagnifyingGlass, SignOut, SignIn } from 'phosphor-react';
import { signOut } from 'next-auth/react';
import { deleteCookie } from 'cookies-next';

import logoImg from '../../assets/food_delivery_logo.svg';
import {
	CartContainer,
	HeaderContainer,
	HeaderNavContent,
	SearchInputForm,
	SignButton,
} from './styles';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface CartItem {
	id: string;
	name: string;
	price: number;
	quantity: number;
}

interface HeaderProps {
	isUserLogged?: boolean;
}

export const Header = ({ isUserLogged }: HeaderProps) => {
	// Items from cart
	const cart = useSelector<RootState>(state => state.cart.value) as CartItem[];

	const router = useRouter();

	const handleSignOut = () => {
		deleteCookie('user');
		signOut();
	};

	const handleSignIn = () => {
		router.push('/login');
	};

	return (
		<HeaderContainer>
			<Link href={'/'}>
				<Image src={logoImg} alt='' priority />
			</Link>
			<HeaderNavContent>
				<SearchInputForm>
					<MagnifyingGlass size={24} />
					<input type='text' placeholder='Busque pelas opções de prato' />
				</SearchInputForm>

				<CartContainer href='/cart'>
					<Receipt size={32} />
					Meu pedido ({cart.length})
				</CartContainer>

				<SignButton
					title={isUserLogged ? 'Sair' : 'Entrar'}
					onClick={isUserLogged ? handleSignOut : handleSignIn}
				>
					{isUserLogged ? <SignOut size={32} /> : <SignIn size={32} />}
				</SignButton>
			</HeaderNavContent>
		</HeaderContainer>
	);
};
