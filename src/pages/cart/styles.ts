import styled from 'styled-components';

export const CartMainContainer = styled.main`
	width: 100%;
	padding: 0 7.688rem;
	margin-top: 2.125rem;
	margin-bottom: 2rem;

	display: flex;
	justify-content: space-between;

	h2 {
		font-size: 2rem;
		font-weight: 500;
	}
`;

export const CartItemsContainer = styled.div`
	width: 100%;
	max-width: 27.75rem;

	.total-price {
		margin-top: 1rem;
		font-size: 1.25rem;
		font-weight: 500;
	}
`;

export const CartItems = styled.div`
	width: 100%;
	margin-top: 2rem;
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;

export const AddressContainer = styled.div`
	width: 100%;
	max-width: 33.125rem;
`;

export const FormAddressContainer = styled.form`
	width: 100%;
	margin-top: 2rem;

	display: flex;
	flex-direction: column;
	gap: 1rem;
`;

export const FormInput = styled.div`
	width: 100%;

	display: flex;
	flex-direction: column;
	gap: 0.2rem;

	label {
		color: ${props => props.theme.span};
		font-size: 0.875rem;
	}

	input {
		width: 90%;
		height: 3rem;

		background-color: transparent;
		color: ${props => props.theme.white};
		border: 1px solid ${props => props.theme.white};
		border-radius: 5px;
		padding: 1rem 0.875rem;

		&::placeholder {
			color: ${props => props.theme.placeholder};
			font-size: 0.875rem;
		}

		&:focus {
			outline: none;
		}

		/* Hide arrows of number inputs */
		&::-webkit-outer-spin-button,
		&::-webkit-inner-spin-button {
			-webkit-appearance: none;
			margin: 0;
		}

		&[type='number'] {
			-moz-appearance: textfield;
		}
	}
`;

export const DoubleInput = styled.div`
	width: 90%;
	display: flex;
	align-items: center;
	gap: 1rem;

	div {
		width: 100%;
	}

	input {
		width: 100%;
	}
`;

export const FinishOrderButton = styled.button`
	width: 90%;
	height: 3rem;
	margin-top: 1rem;
	padding: 1rem 2rem;

	display: flex;
	align-items: center;
	justify-content: center;

	background-color: ${props => props.theme.blue};
	color: ${props => props.theme.white};
	border: 1px solid transparent;
	border-radius: 5px;
	text-decoration: none;
	font-weight: 500;
	font-size: 1rem;

	&:hover {
		filter: brightness(90%);
	}
`;