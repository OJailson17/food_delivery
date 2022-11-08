import { createSlice } from '@reduxjs/toolkit';

interface CartItem {
	id: string;
	name: string;
	price: number;
	quantity: number;
}

const initialValue: CartItem[] = [];

const cartReducer = createSlice({
	name: 'cart',
	initialState: {
		value: initialValue,
	},
	reducers: {
		addItem: (state, action) => {
			state.value = [...state.value, action.payload];
			const localData = localStorage.getItem('@food_delivery:cart');
			const parsedData: CartItem[] = JSON.parse(localData || '{}');

			//TODO FIX: Save data correctly in local storage
			if (localData) {
				const joinData = parsedData.concat(state.value);
				localStorage.setItem('@food_delivery:cart', JSON.stringify(joinData));
				console.log(parsedData);
			} else {
				localStorage.setItem(
					'@food_delivery:cart',
					JSON.stringify(state.value),
				);
			}
		},
	},
});

export const { addItem } = cartReducer.actions;

export default cartReducer.reducer;
