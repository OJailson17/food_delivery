import styled from 'styled-components';

export const CartMainContainer = styled.main`
	width: 100%;
	padding: 0 7.688rem;
	margin-top: 2.125rem;
	margin-bottom: 2rem;

	display: flex;
	/* justify-content: center; */
	gap: 4.688rem;

	h2 {
		font-size: 2rem;
		font-weight: 500;
	}
`;

export const CartItemsContainer = styled.div`
	width: 100%;
	max-width: 27.75rem;

	background-color: red;

	.total-price {
		margin-top: 1rem;
		font-size: 1.25rem;
		font-weight: 500;
	}
`;

export const CartItems = styled.div`
	width: 100%;
	max-width: 27.75rem;
	margin-top: 2rem;
	/* background-color: red; */

	display: flex;
	flex-direction: column;
	gap: 1rem;
`;
