
import Card from 'react-bootstrap/Card';
import { useGetProductById } from '../hooks/useProducts';
import { useParams } from 'react-router-dom';
import ItemCount from '../components/itemCount';


const ItemDetailContainer = () => {

  const {id} = useParams()

  const { productData } = useGetProductById('products',id);


  if (!productData) {
    return <div>Cargando...</div>;
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Card key={productData.id} style={{ width: '40rem' }}>
      {productData.thumbnail && (
        <Card.Img variant="top" src={productData.thumbnail} />
      )}
      <Card.Body>
        <Card.Title>{productData.title}</Card.Title>
        <Card.Text>{productData.description}</Card.Text>
        <div>${productData.price}</div>
        <ItemCount productId={productData.id} />
        <a href={`/update-product/${productData.id}`}>Editor</a>
      </Card.Body>
    </Card>
    </div>
  );
};

export default ItemDetailContainer;
