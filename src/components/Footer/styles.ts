import styled from 'styled-components';

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
`;
