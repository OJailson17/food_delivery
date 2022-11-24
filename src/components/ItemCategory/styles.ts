import styled from 'styled-components';
import { device } from '../../styles/breakpoint';

export const ItemCategoryContainer = styled.div`
	width: 100%;
	margin: 0 auto;
	margin-top: 3.875rem;

	h2 {
		font-size: 2rem;
		font-weight: 500;
	}
`;

export const CategoryContent = styled.div`
	width: auto;
	margin-top: 2.4rem;

	display: flex;
	align-items: center;
	gap: 1.7rem;

	overflow-x: auto;
	overflow-y: hidden;
	white-space: nowrap;

	&::-webkit-scrollbar {
		height: 0.7rem;
	}

	&::-webkit-scrollbar-track {
		box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
	}

	&::-webkit-scrollbar-thumb {
		background-color: ${props => props.theme.blue600};
		outline: 1px solid ${props => props.theme.blue700};
	}
`;
