import Image from 'next/image';
import { IncludeButton, ItemActions, ItemContainer, ItemImage } from './styles';

import torradaImg from '../../assets/torrada-de-parma.png';
import { Minus, Plus } from 'phosphor-react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import { addItem } from '../../store/reducers/cartReducer';
import { itemsData } from '../../utils/itemsData';
import { useEffect, useState } from 'react';

interface Items {
	id: number;
	title: string;
	description: string;
	price: number;
	image: string;
	category: string;
}

interface CartItems {
	id: number;
	quantity: number;
}

interface ItemProps {
	items: Items;
}

export const Item = ({ items }: ItemProps) => {
	const [itemQtd, setItemQtd] = useState(0);

	// Items inserted in cart
	const cart = useSelector<RootState>(state => state.cart.value) as CartItems[];

	// Function to change cart value
	const dispatch = useDispatch<AppDispatch>();

	// Add an item to cart
	const handleAddItemToCart = () => {
		dispatch(
			addItem({
				id: items.id,
				title: items.title,
				price: items.price,
				quantity: 1,
				image: items.image,
			}),
		);
	};

	// Get item quantity and add in state
	const getItemQtd = () => {
		for (const cartItem of cart) {
			if (cartItem.id === items.id) {
				setItemQtd(cartItem.quantity);
			}
		}
	};

	// Every time cart change value, get item quantity from cart
	useEffect(() => {
		getItemQtd();
	}, [cart]);

	return (
		<ItemContainer>
			{/* image */}
			<ItemImage>
				<Image src={items.image} alt='' width={176} height={176} />
			</ItemImage>

			{/* title */}
			<p className='item-title'>{items.title} &gt;</p>
			<span className='item-description'>{items.description}</span>

			{/* price */}
			<p className='item-price'>R$ {items.price}</p>

			{/* actions */}
			<ItemActions>
				<div>
					<button>
						<Minus size={24} />
					</button>
					<div>{itemQtd}</div>
					<button>
						<Plus size={24} />
					</button>
				</div>

				<IncludeButton onClick={handleAddItemToCart}>incluir</IncludeButton>
			</ItemActions>
		</ItemContainer>
	);
};
