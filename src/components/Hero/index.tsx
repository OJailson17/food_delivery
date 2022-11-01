import Image from 'next/image';
import React from 'react';

import heroImg from '../../assets/hero-image.svg';
import { HeroContainer, HeroContent } from './styles';

export const Hero = () => {
	return (
		<HeroContainer>
			<HeroContent>
				<Image src={heroImg} alt='' priority />

				<div>
					<p>Sabores inigualáveis</p>
					<span>Sinta o cuidado do preparo com ingredientes selecionados</span>
				</div>
			</HeroContent>
		</HeroContainer>
	);
};
