import styled from 'styled-components';
import { device } from '../../styles/breakpoint';

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

	@media ${device.mobileS} and (max-width: 1023px) {
		flex-direction: column;
	}

	@media ${device.mobileS} and (max-width: 767px) {
		padding: 0 1rem;

		h2 {
			font-size: 1.5rem;
			/* background-color: red; */
		}
	}

	@media ${device.tablet} and (max-width: 1023px) {
		padding: 0 3rem;

		h2 {
			font-size: 1.7rem;
		}
	}

	@media ${device.laptop} and (max-width: 1300px) {
		padding: 0 4rem;
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

	@media ${device.mobileS} and (max-width: 1023px) {
		margin-top: 2.5rem;
	}
`;

export const FormAddressContainer = styled.form`
	width: 100%;
	margin-top: 2rem;

	display: flex;
	flex-direction: column;
	gap: 1rem;

	.order-submit {
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

		&:disabled {
			filter: brightness(50%);
			cursor: not-allowed;
		}

		@media ${device.mobileS} and (max-width: 767px) {
			width: 100%;
		}
	}

	@media ${device.mobileS} and (max-width: 767px) {
		align-items: center;
	}
`;

export const FormInput = styled.div`
	width: 100%;

	display: flex;
	flex-direction: column;
	gap: 0.2rem;
	/* background-color: green; */

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

	span {
		color: ${props => props.theme.danger};
		font-size: 0.875rem;
	}

	@media ${device.mobileS} and (max-width: 767px) {
		/* width: 90%; */

		input {
			width: 100%;
		}
	}
`;

export const DoubleInput = styled.div`
	width: 90%;
	display: flex;
	gap: 1rem;

	div {
		width: 100%;
	}

	input {
		width: 100%;
	}

	@media ${device.mobileS} and (max-width: 767px) {
		flex-direction: column;

		width: 100%;
	}
`;

// export const FinishOrderButton = styled.button`
// 	width: 90%;
// 	height: 3rem;
// 	margin-top: 1rem;
// 	padding: 1rem 2rem;

// 	display: flex;
// 	align-items: center;
// 	justify-content: center;

// 	background-color: ${props => props.theme.blue};
// 	color: ${props => props.theme.white};
// 	border: 1px solid transparent;
// 	border-radius: 5px;
// 	text-decoration: none;
// 	font-weight: 500;
// 	font-size: 1rem;

// 	&:hover {
// 		filter: brightness(90%);
// 	}

// 	&:disabled {
// 		filter: brightness(50%);
// 		cursor: not-allowed;
// 	}

// 	@media ${device.mobileS} and (max-width: 767px) {
// 		width: 100%;
// 	}
// `;

export const EmptyCart = styled.div`
	width: 100%;
	margin-top: 2rem;

	display: flex;
	flex-direction: column;
	justify-content: center;

	svg {
		width: 5rem;
		height: 5rem;
		color: ${props => props.theme.placeholder};
	}

	p {
		margin-top: 1rem;
		color: ${props => props.theme.placeholder};
		font-weight: 500;
	}
`;
