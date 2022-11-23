import Link from 'next/link';
import styled from 'styled-components';
import { device } from '../../styles/breakpoint';

export const SuccessMainContainer = styled.main`
	width: 100%;
	padding: 0 7.688rem;
	margin-top: 2.125rem;
	text-align: center;

	/* background-color: red; */

	h2 {
		font-size: 2rem;
		font-weight: 500;
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

export const PaymentApproved = styled.div`
	width: 50%;
	margin: 2rem auto;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	color: green;
	/* background-color: green; */

	svg {
		width: 10rem;
		height: 10rem;
		color: green;
	}

	p {
		font-size: 1.5rem;
	}

	@media ${device.mobileS} and (max-width: 767px) {
		width: 100%;

		svg {
			width: 8rem;
			height: 8rem;
		}

		p {
			font-size: 1.2rem;
		}
	}
`;

export const HomePageButton = styled(Link)`
	button {
		width: 8rem;
		height: 2.5rem;
		margin-top: 2rem;

		background-color: ${props => props.theme.blue};
		border: none;
		border-radius: 5px;
		color: ${props => props.theme.white};

		&:hover {
			filter: brightness(90%);
		}
	}
`;
