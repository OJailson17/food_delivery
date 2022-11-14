import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import React, { FormEvent, useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CartItem } from '../../components/CartItem';
import { Header } from '../../components/Header';
import { api } from '../../lib/axios';
import { getStripe } from '../../lib/stripe-js';
import { AppDispatch, RootState } from '../../store';
import { getItems } from '../../store/reducers/cartReducer';
import { formatPrice } from '../../utils/formatPrice';
import {
	AddressContainer,
	CartItems,
	CartItemsContainer,
	CartMainContainer,
	DoubleInput,
	FinishOrderButton,
	FormAddressContainer,
	FormInput,
} from './styles';

interface Item {
	id: string;
	title: string;
	description: string;
	price: number;
	quantity: number;
	image: string;
}

interface CartServerProps {
	isUserLogged: boolean;
}

const Cart = ({ isUserLogged }: CartServerProps) => {
	const cart = useSelector<RootState>(state => state.cart.value) as Item[];

	const dispatch = useDispatch<AppDispatch>();

	const router = useRouter();

	// Calculate the total price of the items in the cart
	const totalPrice = useCallback(() => {
		return cart.reduce((total, item) => {
			const subTotal = item.quantity * item.price;
			total = total + subTotal;
			return total;
		}, 0);
	}, [cart]);

	const handleFinishOrder = async (e: FormEvent) => {
		e.preventDefault();

		// If user is not logged, redirect to login page
		if (!isUserLogged) {
			router.push('/login');
			return;
		}

		try {
			const stripe = await getStripe();

			// Make request to checkout route passing the cart items
			const response = await api.post('/api/checkout', {
				items: cart,
			});

			const { sessionId } = response.data;

			// If the session id is return in the response, redirect to checkout page
			if (sessionId) {
				localStorage.removeItem('@food_delivery:cart');
				await stripe?.redirectToCheckout({
					sessionId,
				});
			}

			console.log(response.data);
		} catch (error) {
			console.log(error);
		}
	};

	// Get all local storage items and set in the state
	useEffect(() => {
		dispatch(getItems());
	}, []);

	return (
		<>
			<Header isUserLogged={isUserLogged} />

			<CartMainContainer>
				<CartItemsContainer>
					<h2>Meu Pedido</h2>

					{/* Cart items */}
					<CartItems>
						{cart.map(item => (
							<CartItem key={item.id} item={item} />
						))}
					</CartItems>

					<p className='total-price'>Total: {formatPrice(totalPrice())}</p>
				</CartItemsContainer>

				{/* TODO Finish form styling */}
				<AddressContainer>
					<h2>Endereço</h2>

					{/* Address form */}
					<FormAddressContainer onSubmit={handleFinishOrder}>
						<FormInput>
							<label htmlFor='name'>Nome</label>
							<input type='text' id='name' placeholder='Ex: João da SIlva' />
						</FormInput>
						<FormInput>
							<label htmlFor='street'>Rua</label>
							<input type='text' id='street' placeholder='Ex: Av. Paulista' />
						</FormInput>

						<DoubleInput>
							<FormInput>
								<label htmlFor='house-number'>Número</label>
								<input type='number' id='house-number' placeholder='Ex: 106' />
							</FormInput>

							<FormInput>
								<label htmlFor='complement'>Complemento (opcional)</label>
								<input
									type='text'
									id='complement'
									placeholder='Ex: Casa, Apartamento'
								/>
							</FormInput>
						</DoubleInput>

						<FormInput>
							<label htmlFor='neighbor'>Bairro</label>
							<input type='text' id='neighbor' placeholder='Ex: Centro' />
						</FormInput>

						<FinishOrderButton type='submit'>
							Finalizar pedidio
						</FinishOrderButton>
					</FormAddressContainer>
				</AddressContainer>
			</CartMainContainer>
		</>
	);
};

export default Cart;

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
	// get the user session
	const session = await getSession({ req });

	let userCookies;

	if (req.cookies.user) {
		userCookies = JSON.parse(String(req.cookies.user));
	}

	let isUserLogged = false;

	if (session || userCookies) {
		isUserLogged = true;
	}

	return {
		props: {
			isUserLogged,
		},
	};
};
