import { useCallback, useEffect } from 'react';
import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';

import * as yup from 'yup';

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
	EmptyCart,
	FinishOrderButton,
	FormAddressContainer,
	FormInput,
} from './styles';
import { ShoppingCart } from 'phosphor-react';

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

interface IFormInputs {
	name: string;
	street: string;
	'house-number': number;
	complement: string;
	neighbor: string;
}

// Form schema validation
const schema = yup.object({
	name: yup
		.string()
		.required('Campo obrigatório')
		.min(3, 'No mínimo 3 caracteres')
		.max(255)
		.trim(),
	street: yup
		.string()
		.required('Campo obrigatório')
		.min(3, 'No mínimo 3 caracteres')
		.max(255)
		.trim(),
	'house-number': yup
		.number()
		.required('Campo obrigatório')
		.integer('O número precisa ser inteiro'),
	complement: yup.string(),
	neighbor: yup
		.string()
		.required('Campo obrigatório')
		.min(3, 'No mínimo 3 caracteres')
		.max(255)
		.trim(),
});

const Cart = ({ isUserLogged }: CartServerProps) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IFormInputs>({
		defaultValues: {
			name: '',
			street: '',
			'house-number': 0,
			complement: '',
			neighbor: '',
		},
		resolver: yupResolver(schema),
	});

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

	const handleFinishOrder = async (data: IFormInputs) => {
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

			// Get session id from response
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
					{cart.length > 0 ? (
						<>
							<CartItems>
								{cart.map(item => (
									<CartItem key={item.id} item={item} />
								))}
							</CartItems>
							<p className='total-price'>Total: {formatPrice(totalPrice())}</p>
						</>
					) : (
						<EmptyCart>
							<ShoppingCart />
							<p>Carrinho vazio</p>
						</EmptyCart>
					)}
				</CartItemsContainer>

				{/* TODO Finish form styling */}
				<AddressContainer>
					<h2>Endereço</h2>

					{/* Address form */}
					<FormAddressContainer onSubmit={handleSubmit(handleFinishOrder)}>
						<FormInput>
							<label htmlFor='name'>Nome</label>
							<input
								type='text'
								id='name'
								placeholder='Ex: João da SIlva'
								{...register('name')}
							/>
							<span>{errors.name?.message}</span>
						</FormInput>
						<FormInput>
							<label htmlFor='street'>Rua</label>
							<input
								type='text'
								id='street'
								placeholder='Ex: Av. Paulista'
								{...register('street')}
							/>
							<span>{errors.street?.message}</span>
						</FormInput>

						<DoubleInput>
							<FormInput>
								<label htmlFor='house-number'>Número</label>
								<input
									type='number'
									id='house-number'
									placeholder='Ex: 106'
									{...register('house-number')}
								/>
								<span>{errors['house-number']?.message}</span>
							</FormInput>

							<FormInput>
								<label htmlFor='complement'>Complemento (opcional)</label>
								<input
									type='text'
									id='complement'
									placeholder='Ex: Casa, Apartamento'
									{...register('complement')}
								/>
								<span>{errors.complement?.message}</span>
							</FormInput>
						</DoubleInput>

						<FormInput>
							<label htmlFor='neighbor'>Bairro</label>
							<input
								type='text'
								id='neighbor'
								placeholder='Ex: Centro'
								{...register('neighbor')}
							/>
							<span>{errors.neighbor?.message}</span>
						</FormInput>

						<FinishOrderButton
							type='submit'
							disabled={cart.length <= 0 ? true : false}
						>
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
