import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { itemsData } from '../../utils/itemsData';
import { Item } from '../Item';
import { CategoryContent, ItemCategoryContainer } from './styles';

interface ItemCategoryProps {
	category: 'Pratos Principais' | 'Sobremesas' | 'Bebidas';
}

export const ItemCategory = ({ category }: ItemCategoryProps) => {
	const filterCategories = itemsData.filter(
		item => item.category === category.toLowerCase(),
	);

	return (
		<ItemCategoryContainer>
			<h2>{category}</h2>

			<CategoryContent>
				{filterCategories.map(item => (
					<Item key={item.id} items={item} />
				))}
			</CategoryContent>
		</ItemCategoryContainer>
	);
};
