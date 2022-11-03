import Image from 'next/image';
import React from 'react';

import logoImg from '../../assets/secondary-logo.svg';
import { FooterContainer } from './styles';

export const Footer = () => {
	return (
		<FooterContainer>
			<Image src={logoImg} alt='' />

			<p>&copy; 2022 - Todos os direitos reservados</p>
		</FooterContainer>
	);
};
