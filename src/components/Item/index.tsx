import Image from 'next/image';
import { IncludeButton, ItemActions, ItemContainer, ItemImage } from './styles';

import torradaImg from '../../assets/torrada-de-parma.png';
import { Minus, Plus } from 'phosphor-react';

export const Item = () => {
	return (
		<ItemContainer>
			{/* image */}
			<ItemImage>
				<Image src={torradaImg} alt='' />
			</ItemImage>

			{/* title */}
			<p className='item-title'>Torradas de Parma &gt;</p>
			<span className='item-description'>
				Presunto de parma e rúcula em um pão com fermentação natural.
			</span>

			{/* price */}
			<p className='item-price'>R$ 25,97</p>

			{/* actions */}
			<ItemActions>
				<div>
					<button>
						<Minus size={24} />
					</button>
					<div>01</div>
					<button>
						<Plus size={24} />
					</button>
				</div>

				<IncludeButton>incluir</IncludeButton>
			</ItemActions>
		</ItemContainer>
	);
};
