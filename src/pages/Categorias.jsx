import { useParams } from 'react-router-dom';
import ItemListContainer from '../components/ItemListContainer';
import { useGetProductsByCategory } from '../hooks/useProducts';


const Category = () => {

    const { id } = useParams();
    const { poductsData } = useGetProductsByCategory(id);

    return <ItemListContainer productsData={poductsData} />
}

export default Category;