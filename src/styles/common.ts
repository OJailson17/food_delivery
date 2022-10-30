import styled from 'styled-components';

export const GoogleButton = styled.button`
	width: 100%;
	height: 2.5rem;
	margin-top: 0.5rem;
	margin-bottom: 1rem;

	display: flex;
	align-items: center;
	justify-content: center;
	gap: 1rem;

	background-color: ${props => props.theme.white};
	border: none;
	border-radius: 20px 20px;
	color: ${props => props.theme.blue800};
	font-size: 0.875rem;
	font-weight: 500;

	&:hover {
		transform: all 0.2s;
		filter: brightness(90%);
	}
`;
