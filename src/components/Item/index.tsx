import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Minus, Plus } from 'phosphor-react';

import Image from 'next/image';

import { AppDispatch, RootState } from '../../store';
import { addItem, removeItemByOne } from '../../store/reducers/cartReducer';
import { formatPrice } from '../../utils/formatPrice';

import {
	IncludeButton,
	ItemActions,
	ItemContainer,
	ItemContent,
	ItemImage,
} from './styles';
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
				description: items.description,
				price: items.price,
				quantity: 1,
				image: items.image,
			}),
		);
	};

	/*
	Decrease item quantity by 1
	 */
	const handleRemoveItem = () => {
		dispatch(
			removeItemByOne({
				id: items.id,
			}),
		);
	};

	// Every time cart change value, get item quantity from cart
	useEffect(() => {
		// Get item quantity from cart
		const cartItem = cart.find(item => Number(item.id) === Number(items.id));

		if (cartItem) {
			setItemQtd(cartItem.quantity);
		} else {
			// If there is nothing in array, set item quantity to 0
			setItemQtd(0);
		}
	}, [cart]);

	return (
		<ItemContainer>
			<ItemContent href={`/item/${items.id}`}>
				{/* image */}
				<ItemImage>
					<Image src={items.image} alt='' width={176} height={176} />
				</ItemImage>

				{/* title */}
				<p className='item-title'>{items.title} &gt;</p>
				<span className='item-description'>{items.description}</span>

				{/* price */}
				<p className='item-price'>{formatPrice(items.price)}</p>
			</ItemContent>

			{/* actions */}
			<ItemActions>
				<div>
					<button onClick={handleRemoveItem}>
						<Minus size={24} />
					</button>
					<div>{itemQtd || 0}</div>
					<button onClick={handleAddItemToCart}>
						<Plus size={24} />
					</button>
				</div>

				<IncludeButton onClick={handleAddItemToCart}>incluir</IncludeButton>
			</ItemActions>
		</ItemContainer>
	);
};
