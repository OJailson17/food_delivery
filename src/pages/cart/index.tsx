import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CartItem } from '../../components/CartItem';
import { Header } from '../../components/Header';
import { AppDispatch, RootState } from '../../store';
import { getItems } from '../../store/reducers/cartReducer';
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
	price: number;
	quantity: number;
	image: string;
}

const Cart = () => {
	const cart = useSelector<RootState>(state => state.cart.value) as Item[];

	const dispatch = useDispatch<AppDispatch>();

	// Get all local storage items and set in the state
	useEffect(() => {
		dispatch(getItems());
	}, []);

	return (
		<>
			<Header />

			<CartMainContainer>
				<CartItemsContainer>
					<h2>Meu Pedido</h2>

					{/* Cart items */}
					<CartItems>
						{cart.map(item => (
							<CartItem key={item.id} item={item} />
						))}
					</CartItems>

					<p className='total-price'>Total: R$ 103,88</p>
				</CartItemsContainer>

				{/* TODO Finish form styling */}
				<AddressContainer>
					<h2>Endereço</h2>

					{/* Address form */}
					<FormAddressContainer>
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
