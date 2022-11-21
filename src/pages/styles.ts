import styled from 'styled-components';
import { device } from '../styles/breakpoint';

export const MainContentContainer = styled.main`
	width: 100%;
	margin: 0 auto;
	padding: 0 7.688rem;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	@media ${device.mobileM} and (max-width: 1023px) {
		padding: 0 1rem;
	}

	@media ${device.tablet} and (max-width: 1023px) {
		padding: 0 3rem;
	}

	@media ${device.laptop} and (max-width: 1300px) {
		padding: 0 4rem;
	}
`;
