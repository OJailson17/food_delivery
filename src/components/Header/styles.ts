import Link from 'next/link';
import styled from 'styled-components';
import { device } from '../../styles/breakpoint';

export const HeaderContainer = styled.header`
	width: 100%;
	height: 6.5rem;
	padding: 0 7.688rem;

	display: flex;
	align-items: center;
	justify-content: space-between;

	background-color: ${props => props.theme.blue800};

	img {
		width: 12.3rem;
		height: 1.88rem;
	}

	@media ${device.mobileS} and (max-width: 767px) {
		padding: 0 1rem;
	}

	@media ${device.tablet} and (max-width: 1023px) {
		padding: 0 3rem;
	}

	@media ${device.laptop} and (max-width: 1300px) {
		padding: 0 4rem;
	}
`;

export const HeaderNavContent = styled.nav`
	width: 100%;
	max-width: 45rem;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	gap: 2rem;

	@media ${device.mobileS} and (max-width: 374px) {
		/* background-color: red; */
		gap: 0.5rem;
	}

	@media ${device.tablet} and (max-width: 1023px) {
		width: 55%;
		gap: 1rem;
	}
`;

export const SearchInputForm = styled.form`
	width: 100%;
	max-width: 25.625rem;
	height: 3rem;
	padding: 0.75rem 0.875rem;

	display: flex;
	align-items: center;
	gap: 0.875rem;

	background: ${props => props.theme.blue600};
	border-radius: 5px;

	input {
		flex: 1;

		background-color: transparent;
		color: ${props => props.theme.white};
		border: 1px solid transparent;

		&:focus {
			outline: none;
		}

		&::placeholder {
			color: ${props => props.theme.placeholder};
		}
	}

	@media ${device.mobileS} and (max-width: 1023px) {
		display: none;
	}

	@media ${device.laptop} and (max-width: 1300px) {
		width: 50%;
	}
`;

interface ICartContainer {
	cartitems: number;
}

export const CartContainer = styled(Link)<ICartContainer>`
	width: 100%;
	max-width: 13.6rem;
	height: 3rem;
	padding: 1rem 2rem;

	display: flex;
	align-items: center;
	justify-content: center;
	gap: 0.688rem;

	background-color: ${props => props.theme.blue};
	border-radius: 5px;
	text-decoration: none;
	font-weight: 500;
	font-size: 0.875rem;

	svg {
		width: 2rem;
		height: 2rem;
	}

	&:hover {
		filter: brightness(90%);
	}
	@media ${device.mobileS} and (max-width: 374px) {
		width: 2rem;
		height: 2rem;

		svg {
			width: 1.5rem;
			height: 1.5rem;
		}
	}

	@media ${device.mobileS} and (max-width: 767px) {
		width: 50%;
		padding: 0.5rem 0.5rem;

		span {
			display: none;
		}
	}

	@media ${device.mobileM} and (max-width: 767px) {
		&::after {
			content: '(${({ cartitems = 0 }) => cartitems})';
			font-size: 1rem;
		}

		svg {
			width: 2rem;
			height: 2rem;
		}
	}

	@media ${device.laptop} and (max-width: 1300px) {
		width: 50%;
	}
`;

export const SignButton = styled.button`
	width: max-content;
	height: max-content;

	display: flex;
	align-items: center;
	justify-content: center;

	background-color: transparent;
	border: 1px solid transparent;

	svg {
		color: ${props => props.theme.white};
		width: 2rem;
		height: 2rem;
	}

	&:hover {
		transform: scale(1.1);
	}

	@media ${device.mobileM} and (max-width: 767px) {
		svg {
			width: 1.7rem;
			height: 1.7rem;
		}
	}
`;
