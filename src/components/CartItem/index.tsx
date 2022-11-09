import Image from 'next/image';
import React from 'react';

import foodImg from '../../../public/assets/salada-ravanello.png';
import { CartItemContainer } from './styles';

interface Item {
	id: string;
	title: string;
	price: number;
	quantity: number;
	image: string;
}

interface CartItemProps {
	item: Item;
}

export const CartItem = ({ item }: CartItemProps) => {
	return (
		<CartItemContainer>
			<Image src={item.image} alt='' width={100} height={100} />

			<div className='item-info-container'>
				<div>
					<p>
						{item.quantity} x {item.title}
					</p>
					<span>R$ {item.price}</span>
				</div>

				<button>Excluir</button>
			</div>
		</CartItemContainer>
	);
};
