import { useDispatch } from 'react-redux';

import Image from 'next/image';

import { AppDispatch } from '../../store';
import { removeItem } from '../../store/reducers/cartReducer';
import { formatPrice } from '../../utils/formatPrice';

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
	const dispatch = useDispatch<AppDispatch>();

	const handleRemoveItem = () => {
		dispatch(
			removeItem({
				id: item.id,
			}),
		);
	};

	return (
		<CartItemContainer>
			<Image src={item.image} alt='' width={100} height={100} />

			<div className='item-info-container'>
				<div>
					<p>
						{item.quantity} x {item.title}
					</p>
					<span>{formatPrice(item.price)}</span>
				</div>

				<button onClick={handleRemoveItem}>Excluir</button>
			</div>
		</CartItemContainer>
	);
};
