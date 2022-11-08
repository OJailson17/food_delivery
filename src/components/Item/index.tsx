import Image from 'next/image';
import { IncludeButton, ItemActions, ItemContainer, ItemImage } from './styles';

import torradaImg from '../../assets/torrada-de-parma.png';
import { Minus, Plus } from 'phosphor-react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store';
import { addItem } from '../../store/reducers/cartReducer';
import { itemsData } from '../../utils/itemsData';

interface Items {
	id: number;
	title: string;
	description: string;
	price: number;
	image: string;
	category: string;
}

interface ItemProps {
	items: Items;
}

export const Item = ({ items }: ItemProps) => {
	const dispatch = useDispatch<AppDispatch>();

	const handleAddItemToCart = () => {
		dispatch(
			addItem({
				id: items.id,
				name: items.title,
				price: items.price,
				quantity: 1,
			}),
		);
	};

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
					<div>01</div>
					<button>
						<Plus size={24} />
					</button>
				</div>

				<IncludeButton onClick={handleAddItemToCart}>incluir</IncludeButton>
			</ItemActions>
		</ItemContainer>
	);
};
