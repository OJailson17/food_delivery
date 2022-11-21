import { signOut } from 'next-auth/react';
import { useSelector } from 'react-redux';
import { deleteCookie } from 'cookies-next';
import { useRouter } from 'next/router';
import { Receipt, MagnifyingGlass, SignOut, SignIn } from 'phosphor-react';

import Link from 'next/link';
import Image from 'next/image';

import { RootState } from '../../store';

import {
	CartContainer,
	HeaderContainer,
	HeaderNavContent,
	SearchInputForm,
	SignButton,
} from './styles';

import logoImg from '../../assets/food_delivery_logo.svg';
interface CartItem {
	id: string;
	name: string;
	price: number;
	quantity: number;
}

interface HeaderProps {
	isUserLogged?: boolean;
}

export const Header = ({ isUserLogged = false }: HeaderProps) => {
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

				<CartContainer href='/cart' cartitems={cart.length}>
					<Receipt />
					<span>Meu pedido ({cart.length})</span>
				</CartContainer>

				<SignButton
					title={isUserLogged ? 'Sair' : 'Entrar'}
					onClick={isUserLogged ? handleSignOut : handleSignIn}
				>
					{isUserLogged ? <SignOut /> : <SignIn />}
				</SignButton>
			</HeaderNavContent>
		</HeaderContainer>
	);
};
