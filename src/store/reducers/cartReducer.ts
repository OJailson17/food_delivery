import { createSlice } from '@reduxjs/toolkit';

interface CartItem {
	id: string;
	title: string;
	price: number;
	quantity: number;
	image: string;
}

const initialValue: CartItem[] = [];

const cartReducer = createSlice({
	name: 'cart',
	initialState: {
		value: initialValue,
	},
	reducers: {
		// Add item to cart
		addItem: (state, action) => {
			const itemExist = state.value.find(item => item.id === action.payload.id);

			// If item exist on the list, increase quantity by 1
			if (itemExist) {
				const updatedItems = state.value.map(item => {
					if (item.id === action.payload.id) {
						return {
							...item,
							quantity: (item.quantity += 1),
						};
					}

					return item;
				});

				// Save the updated list on the state
				state.value = updatedItems;
			} else {
				// If item does not exist on the list, add it
				state.value = [...state.value, action.payload];
			}

			// Save list on local storage
			localStorage.setItem('@food_delivery:cart', JSON.stringify(state.value));
		},
		// get items from local storage
		getItems: state => {
			const localItems = localStorage.getItem('@food_delivery:cart');

			if (localItems) {
				const parsedData = JSON.parse(localItems);
				state.value = parsedData;
			}
		},
	},
});

export const { addItem, getItems } = cartReducer.actions;

export default cartReducer.reducer;
