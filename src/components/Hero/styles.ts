import styled from 'styled-components';

export const HeroContainer = styled.section`
	width: 100%;
	margin-top: 10.25rem;
	padding: 0 7.688rem;
	/* background-color: green; */

	display: flex;
	align-items: center;
	justify-content: center;
	position: absolute;
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
		bottom: 3.9rem;
		left: -4.3rem;
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
`;
