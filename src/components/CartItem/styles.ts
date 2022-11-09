import styled from 'styled-components';

export const CartItemContainer = styled.div`
	width: 90%;
	height: 6.5rem;

	display: flex;
	align-items: center;
	gap: 0.8125rem;
	/* background-color: green; */

	img {
		width: 6.25rem;
		height: 6.25rem;
		border-radius: 50%;
	}

	.item-info-container {
		div {
			display: flex;
			align-items: center;
			/* background-color: red; */
			justify-content: center;
			gap: 10px;

			p {
				font-size: 1.125rem;
				font-weight: 500;
			}

			span {
				font-size: 0.75rem;
				color: ${props => props.theme.span};
			}
		}

		button {
			width: max-content;
			height: max-content;
			color: ${props => props.theme.blue100};
			background-color: transparent;
			border: 1px solid transparent;
			border-radius: 2px;

			&:hover {
				text-decoration: underline;
			}
		}
	}
`;
