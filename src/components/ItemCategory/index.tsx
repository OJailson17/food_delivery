import { Item } from '../Item';
import { CategoryContent, ItemCategoryContainer } from './styles';

export const ItemCategory = () => {
	return (
		<ItemCategoryContainer>
			<h2>Pratos principais</h2>

			<CategoryContent>
				<Item />
				<Item />
				<Item />
				<Item />
				<Item />
				<Item />
				<Item />
				<Item />
			</CategoryContent>
		</ItemCategoryContainer>
	);
};
