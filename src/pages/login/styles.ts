import styled from 'styled-components';

export const LoginMainContainer = styled.main`
	width: 100%;
	height: 100vh;

	display: flex;
	align-items: center;
	justify-content: center;
`;

export const LoginContentContainer = styled.div`
	width: 80%;
	height: 90%;

	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const LoginFormContainer = styled.div`
	width: 100%;
	max-width: 29.75rem;
	padding: 4rem;
	text-align: center;

	background-color: ${props => props.theme.blue800};
	border-radius: 16px;

	h2 {
		text-align: center;
		font-size: 2rem;
		font-weight: 500;
	}

	span {
		display: block;
		text-align: center;
		margin-top: 0.5rem;
	}

	a {
		text-decoration: none;

		&:hover {
			text-decoration: underline;
		}
	}
`;

export const LoginForm = styled.form`
	margin-top: 2rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 2rem;

	div {
		width: 100%;
		text-align: left;
	}

	input {
		width: 100%;
		height: 3rem;
		padding: 16px 14px;

		background: transparent;
		border-radius: 5px;
		border: 1px solid ${props => props.theme.white};
		color: ${props => props.theme.white};

		&:focus {
			outline: none;
		}
	}

	button {
		width: 100%;
		height: 3rem;

		display: flex;
		align-items: center;
		justify-content: center;

		background-color: ${props => props.theme.blue};
		border: none;
		border-radius: 5px;
		color: ${props => props.theme.white};
		font-size: 0.875rem;
		font-weight: 500;

		&:hover {
			transform: all 0.2s;
			filter: brightness(90%);
		}
	}
`;

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
