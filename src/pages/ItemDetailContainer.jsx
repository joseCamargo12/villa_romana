
import Card from 'react-bootstrap/Card';
import { useGetProductById } from '../hooks/useProducts';
import { useParams } from 'react-router-dom';
import ItemCount from '../components/itemCount';
import '../styles/styles.css';
import { Button } from 'react-bootstrap';



const ItemDetailContainer = () => {

  const {id} = useParams()

  const { productData } = useGetProductById('products',id);


  if (!productData) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="item-detail-container">
      <Card key={productData.id} className="custom-card">
        {productData.thumbnail && <Card.Img variant="top" src={productData.thumbnail} />}
        <Card.Body>
          <Card.Title>{productData.title}</Card.Title>
          <Card.Text>{productData.description}</Card.Text>
          <div className="price">${productData.price}</div>
          <ItemCount productId={productData.id} />
          <div className="buttons-container">
            <Button variant="primary" href={`/update-product/${productData.id}`}>
              Editor
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ItemDetailContainer;
