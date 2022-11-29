import styled from 'styled-components';
import { device } from '../../styles/breakpoint';

export const LoginMainContainer = styled.main`
	width: 100%;
	height: 100vh;

	display: flex;
	align-items: center;
	justify-content: center;

	@media ${device.mobileS} and (max-width: 767px) {
		height: 100%;
		margin-bottom: 2rem;
	}
`;

export const LoginContentContainer = styled.div`
	width: 80%;
	height: 90%;

	display: flex;
	align-items: center;
	justify-content: space-between;

	@media ${device.tablet} and (max-width: 1023px) {
		width: 90%;
		height: 100%;
		margin-top: 2rem;

		align-items: center;
		flex-direction: column;
		justify-content: flex-start;
		gap: 2rem;

		.logo {
			width: 15.625rem;
		}
	}

	@media ${device.mobileS} and (max-width: 767px) {
		width: 90%;
		margin-top: 2rem;

		flex-direction: column;
		justify-content: center;
		gap: 2rem;

		.logo {
			width: 15.625rem;
		}
	}
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

	@media ${device.tablet} and (max-width: 1023px) {
		padding: 2rem;
		width: 60%;
	}

	@media ${device.mobileS} and (max-width: 767px) {
		padding: 2rem;
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

	span {
		color: ${props => props.theme.danger};
		font-size: 0.875rem;
		text-align: left;
	}

	button.submitButton {
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
