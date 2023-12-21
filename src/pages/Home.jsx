import { useEffect } from 'react';
import ItemListContainer from '../components/ItemListContainer';
import { useGetProducts } from '../hooks/useProducts';

const Home = () => {

    useEffect(() => {
        document.title = "Villa Romana"
    })

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { poductsData } = useGetProducts(15);

    return <ItemListContainer productsData={poductsData} />
}

export default Home;