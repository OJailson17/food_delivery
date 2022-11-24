import Image from 'next/image';
import { CaretLeft, Minus, Plus } from 'phosphor-react';
import { Header } from '../../../components/Header';

import foodImg from '../../../../public/assets/salada-ravanello.png';
import { IncludeButton, ItemActions } from '../../../components/Item/styles';
import {
	BackBtn,
	ItemContentContainer,
	ItemDetailMainContainer,
	ItemInfo,
	ItemInfoActionsContainer,
} from './styles';
import { Footer } from '../../../components/Footer';

const ItemDetailsPage = () => {
	return (
		<>
			<Header />

			<ItemDetailMainContainer>
				<BackBtn href='/'>
					<CaretLeft size={32} />
					<span>Voltar</span>
				</BackBtn>

				<ItemContentContainer>
					<Image src={foodImg} alt='' />

					<ItemInfo>
						<h2>Salada Ravanello</h2>
						<p>
							Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.
						</p>

						<ItemInfoActionsContainer>
							<p>R$ 25,90</p>
							<ItemActions>
								<div>
									<button>
										<Minus size={24} />
									</button>
									<div>0</div>
									<button>
										<Plus size={24} />
									</button>
								</div>

								<IncludeButton>incluir</IncludeButton>
							</ItemActions>
						</ItemInfoActionsContainer>
					</ItemInfo>
				</ItemContentContainer>
			</ItemDetailMainContainer>

			<Footer />
		</>
	);
};

export default ItemDetailsPage;
