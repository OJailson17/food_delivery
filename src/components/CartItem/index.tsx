import Image from 'next/image';
import React from 'react';

import foodImg from '../../../public/assets/salada-ravanello.png';
import { CartItemContainer } from './styles';

export const CartItem = () => {
	return (
		<CartItemContainer>
			<Image src={foodImg} alt='' />

			<div className='item-info-container'>
				<div>
					<p>1 x Salada Ravanelho</p>
					<span>R$ 25,97</span>
				</div>

				<button>Excluir</button>
			</div>
		</CartItemContainer>
	);
};
