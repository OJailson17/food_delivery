import { HeroContainer, HeroContent } from './styles';

import Image from 'next/image';

import heroImg from '../../assets/hero-image.png';

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
