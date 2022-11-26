import Image from 'next/image';
import { CaretLeft, Minus, Plus } from 'phosphor-react';
import { Header } from '../../../components/Header';

import foodImg from '../../../../public/assets/salada-ravanello.png';
import { IncludeButton, ItemActions } from '../../../components/Item/styles';
import {
	BackBtn,
	ItemContentContainer,
	ItemDetailMainContainer,
	ItemInfo,
	ItemInfoActionsContainer,
} from './styles';
import { Footer } from '../../../components/Footer';
import { itemsData } from '../../../utils/itemsData';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../store';
import { useEffect, useState } from 'react';
import {
	addItem,
	getItems,
	removeItemByOne,
} from '../../../store/reducers/cartReducer';

interface Item {
	id: string;
	title: string;
	description: string;
	price: number;
	quantity: number;
	image: string;
}

const ItemDetailsPage = () => {
	const [itemQtd, setItemQtd] = useState(0);

	// Function to manipulate store
	const dispatch = useDispatch<AppDispatch>();

	// Car items from local storage
	const cart = useSelector<RootState>(state => state.cart.value) as Item[];

	// Get the params
	const router = useRouter();
	const { id } = router.query;

	// Get the item with the same id passed in params
	const item = itemsData.find(item => Number(item.id) === Number(id));

	// Add an item to cart
	const handleAddItemToCart = () => {
		dispatch(
			addItem({
				id: item?.id,
				title: item?.title,
				description: item?.description,
				price: item?.price,
				quantity: 1,
				image: item?.image,
			}),
		);
	};

	/*
		Decrease item quantity by 1
		 */
	const handleRemoveItem = () => {
		dispatch(
			removeItemByOne({
				id: item?.id,
			}),
		);
	};

	// Get all local storage items and set in the state
	useEffect(() => {
		dispatch(getItems());
	}, []);

	// If cart change its value, changed item quantity
	useEffect(() => {
		// Get item quantity from cart
		const cartItem = cart.find(item => Number(item.id) === Number(id));

		if (cartItem) {
			setItemQtd(cartItem.quantity);
		} else {
			setItemQtd(0);
		}
	}, [cart]);

	return (
		<>
			<Header />

			<ItemDetailMainContainer>
				<BackBtn href='/'>
					<CaretLeft size={32} />
					<span>Voltar</span>
				</BackBtn>

				<ItemContentContainer>
					<Image src={item?.image || ''} alt='' width={390} height={390} />

					<ItemInfo>
						<h2>{item?.title}</h2>
						<p>{item?.description}</p>

						<ItemInfoActionsContainer>
							<p>R$ {item?.price}</p>
							<ItemActions>
								<div>
									<button onClick={handleRemoveItem}>
										<Minus size={24} />
									</button>
									<div>{itemQtd}</div>
									<button onClick={handleAddItemToCart}>
										<Plus size={24} />
									</button>
								</div>

								<IncludeButton onClick={handleAddItemToCart}>
									incluir
								</IncludeButton>
							</ItemActions>
						</ItemInfoActionsContainer>
					</ItemInfo>
				</ItemContentContainer>
			</ItemDetailMainContainer>

			<Footer />
		</>
	);
};

export default ItemDetailsPage;
