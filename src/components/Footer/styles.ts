import styled from 'styled-components';
import { device } from '../../styles/breakpoint';

export const FooterContainer = styled.footer`
	width: 100%;
	height: 4.8125rem;
	margin-top: 6.125rem;
	padding: 0 7.688rem;

	display: flex;
	align-items: center;
	justify-content: space-between;

	background: ${props => props.theme.blue800};

	p {
		font-size: 0.875rem;
		color: ${props => props.theme['footer-text']};
	}

	@media ${device.mobileS} and (max-width: 767px) {
		padding: 0 1rem;
		flex-direction: column;
		justify-content: center;
		gap: 0.5rem;

		p {
			font-size: 0.75rem;
		}
	}

	@media ${device.tablet} and (max-width: 1023px) {
		padding: 0 3rem;
	}

	@media ${device.laptop} and (max-width: 1300px) {
		padding: 0 4rem;
	}
`;
