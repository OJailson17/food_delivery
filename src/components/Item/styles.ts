import styled from 'styled-components';
import { device } from '../../styles/breakpoint';

export const ItemContainer = styled.div`
	width: 100%;
	min-width: 18.75rem;
	min-height: 32rem;
	padding: 3.5rem 0 2.5rem;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-align: center;

	background-color: #00000032;
	border-radius: 8px;

	.item-title {
		width: 90%;
		font-size: 1.5rem;
		font-weight: bold;
		margin-top: 1rem;
		/* white-space: normal; */
	}

	.item-description {
		width: 90%;
		margin-top: 1rem;
		font-size: 0.875rem;
		font-weight: 400;
		white-space: normal;

		color: ${props => props.theme.span};
	}

	.item-price {
		margin-top: 1rem;
		font-size: 2rem;
		font-weight: 400;
		color: ${props => props.theme.blue100};
	}
`;

export const ItemImage = styled.div`
	width: 11rem;
	height: 11rem;
	border-radius: 50%;

	img {
		border-radius: inherit;
	}
`;

export const ItemActions = styled.div`
	width: 80%;
	margin-top: 1rem;

	display: flex;
	align-items: center;
	justify-content: space-between;

	/* background-color: green; */

	div {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.875rem;

		button {
			display: flex;
			align-items: center;
			justify-content: center;

			background-color: transparent;
			border: 1px solid transparent;
			color: ${props => props.theme.white};
		}

		div {
			width: 1.5rem;
			display: flex;
			align-items: center;
			justify-content: center;

			font-size: 1.25rem;
			font-weight: 500;
			/* background-color: orange; */
		}
	}
`;

export const IncludeButton = styled.button`
	width: 5.75rem;
	height: 3rem;

	display: flex;
	align-items: center;
	justify-content: center;

	font-size: 0.875rem;
	font-weight: 500;
	color: ${props => props.theme.white};
	background-color: ${props => props.theme.blue};
	border: none;
	border-radius: 5px;

	&:hover {
		transition: filter 0.2s;
		filter: brightness(80%);
	}
`;
