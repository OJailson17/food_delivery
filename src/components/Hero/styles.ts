import styled from 'styled-components';
import { device } from '../../styles/breakpoint';

export const HeroContainer = styled.section`
	width: 100%;
	margin-top: 10.25rem;
	padding: 0 7.688rem;
	/* background-color: green; */

	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;

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

export const HeroContent = styled.div`
	width: 100%;
	height: 16.25rem;

	display: flex;
	align-items: center;
	justify-content: center;

	background: ${props => `linear-gradient(${props.theme.blue700}, #00131c)`};
	border-radius: 8px;
	position: relative;

	img {
		position: relative;
		bottom: 4.6rem;
		left: -3.5rem;
	}

	div {
		flex: 1;
		position: relative;
		left: -2rem;
	}

	p {
		font-size: 2.5rem;
		font-weight: 500;
		line-height: 1.4;
	}

	span {
		font-weight: 400;
		font-size: 1rem;
	}

	@media ${device.mobileS} and (max-width: 1023px) {
		text-align: center;
		/* flex-direction: column; */

		img {
			display: none;
		}

		div {
			left: 0;
		}
	}

	@media ${device.laptop} and (max-width: 1300px) {
		/* background-color: green; */

		img {
			width: 35.625rem;
			height: 22.875rem;
			bottom: 3.3rem;
			left: -3rem;
		}

		div {
			left: 0;
		}

		p {
			font-size: 2.4rem;
		}
	}
`;
