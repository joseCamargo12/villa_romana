import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const ItemListContainer = ({ productsData }) => {
  return (
    <div style={{ display: 'flex', width: '100%', flexWrap: 'wrap', justifyContent: 'space-around', padding: '2rem' }}>
      {
        productsData.map(products => {
          return (
            <Card key={products.id} style={{ width: '30rem', marginBottom: '20px' }}>
              <Link to={`/item/${products.id}`}> <Card.Img variant="top" src={products.thumbnail} /> </Link>
              <Card.Body style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Card.Title>{products.title}</Card.Title>
                <Card.Text>
                  {products.description}
                </Card.Text>
                <div>
                  ${products.price}
                </div>
                <Button variant="primary">Agregar al carrito</Button>
              </Card.Body>
            </Card>
          );
        })}
    </div>
  )
}

export default ItemListContainer