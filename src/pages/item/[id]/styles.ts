import Link from 'next/link';
import styled from 'styled-components';
import { device } from '../../../styles/breakpoint';

export const ItemDetailMainContainer = styled.main`
	width: 100%;
	margin-top: 1.5rem;
	padding: 0 7.688rem;

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

export const BackBtn = styled(Link)`
	width: max-content;
	display: flex;
	align-items: center;
	justify-content: center;

	text-decoration: none;

	svg {
		width: 2rem;
		height: 2rem;
	}

	span {
		font-size: 1.5rem;
		font-weight: 500;
	}

	&:hover {
		text-decoration: underline;
	}

	@media ${device.tablet} and (max-width: 1023px) {
		span {
			font-size: 1.2rem;
		}

		svg {
			width: 1.5rem;
			height: 1.5rem;
		}
	}
`;

export const ItemContentContainer = styled.div`
	margin-top: 2.5rem;

	display: flex;
	justify-content: space-between;
	gap: 5rem;

	img {
		width: 24.3rem;
		height: 24.3rem;
		border-radius: 50%;
	}

	@media ${device.mobileS} and (max-width: 1023px) {
		img {
			width: 15rem;
			height: 15rem;
		}
	}

	@media ${device.mobileS} and (max-width: 767px) {
		flex-direction: column;
		align-items: center;
	}

	@media ${device.laptop} and (max-width: 1300px) {
		img {
			width: 20rem;
			height: 20rem;
		}
	}
`;

export const ItemInfo = styled.div`
	h2 {
		font-size: 2.5rem;
		font-weight: 500;
		max-width: 37rem;
	}

	& > p {
		font-size: 1.5rem;
		font-size: normal;
		margin-top: 0.5rem;
		max-width: 37rem;
	}

	@media ${device.mobileS} and (max-width: 374px) {
		h2 {
			font-size: 1.8rem;
			text-align: center;
		}

		& > p {
			font-size: 1rem;
			text-align: center;
		}
	}

	@media ${device.mobileM} and (max-width: 767px) {
		h2 {
			font-size: 1.8rem;
			text-align: center;
		}

		& > p {
			font-size: 1.3rem;
			text-align: center;
		}
	}

	@media ${device.tablet} and (max-width: 1023px) {
		h2 {
			font-size: 2rem;
		}

		p {
			font-size: 1rem;
		}
	}
`;

export const ItemInfoActionsContainer = styled.div`
	max-width: 25rem;
	margin-top: 3.125rem;

	display: flex;
	align-items: center;
	justify-content: center;
	gap: 3.3rem;

	& > p {
		width: 50%;
		font-size: 2rem;
		color: ${props => props.theme.blue100};
	}

	@media ${device.mobileS} and (max-width: 1023px) {
		& > div {
			margin: 0;
			gap: 1rem;
		}
	}

	@media ${device.mobileS} and (max-width: 374px) {
		gap: 1rem;

		& > p {
			font-size: 1.2rem;
		}

		& > div {
			gap: 0.3rem;

			& > div {
				gap: 0.5rem;
			}
		}
	}

	@media ${device.mobileM} and (max-width: 767px) {
		gap: 1.8rem;

		& > p {
			font-size: 1.4rem;
			text-align: center;
		}
	}

	@media ${device.tablet} and (max-width: 1023px) {
		gap: 2rem;

		& > p {
			font-size: 1.5rem;
		}
	}
`;
