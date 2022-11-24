import Link from 'next/link';
import styled from 'styled-components';

export const ItemDetailMainContainer = styled.main`
	width: 100%;
	margin-top: 1.5rem;
	padding: 0 7.688rem;
`;

export const BackBtn = styled(Link)`
	width: max-content;
	display: flex;
	align-items: center;
	justify-content: center;

	text-decoration: none;

	span {
		font-size: 1.5rem;
		font-weight: 500;
	}

	&:hover {
		text-decoration: underline;
	}
`;

export const ItemContentContainer = styled.div`
	margin-top: 2.5rem;

	display: flex;
	justify-content: space-between;

	img {
		width: 24.3rem;
		height: 24.3rem;
		border-radius: 50%;
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
`;
