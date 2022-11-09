import React from 'react';
import { CartItem } from '../../components/CartItem';
import { Header } from '../../components/Header';
import { CartItems, CartItemsContainer, CartMainContainer } from './styles';

const Cart = () => {
	return (
		<>
			<Header />

			<CartMainContainer>
				<CartItemsContainer>
					<h2>Meu Pedido</h2>

					{/* Cart items */}
					<CartItems>
						<CartItem />
						<CartItem />
					</CartItems>

					<p className='total-price'>Total: R$ 103,88</p>
				</CartItemsContainer>

				{/* TODO Finish form styling */}
				<div>
					<h2>Endereço</h2>

					{/* Address form */}
					<form>
						<div>
							<label htmlFor='street'>Rua</label>
							<input type='text' id='street' placeholder='Ex: Av. Paulista' />
						</div>

						<div>
							<div>
								<label htmlFor='house-number'>Número</label>
								<input type='number' id='house-number' placeholder='Ex: 106' />
							</div>

							<div>
								<label htmlFor='complement'>Complemento (opcional)</label>
								<input
									type='text'
									id='complement'
									placeholder='Ex: Casa, Apartamento'
								/>
							</div>
						</div>

						<div>
							<label htmlFor='neighbor'>Bairro</label>
							<input type='text' id='neighbor' placeholder='Ex: Centro' />
						</div>

						<button type='submit'>Finalizar pedidio</button>
					</form>
				</div>
			</CartMainContainer>
		</>
	);
};

export default Cart;
