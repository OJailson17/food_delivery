import Image from 'next/image';

import { FooterContainer } from './styles';

import logoImg from '../../assets/secondary-logo.svg';

export const Footer = () => {
	return (
		<FooterContainer>
			<Image src={logoImg} alt='' />

			<p>&copy; 2022 - Todos os direitos reservados</p>
		</FooterContainer>
	);
};
