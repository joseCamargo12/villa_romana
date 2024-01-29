import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';
import { useGetCategories } from '../hooks/useProducts';

const NavBar = () => {

    const {categories} = useGetCategories()
    
    return (
      <Container fluid>
          <Navbar expand="lg" className="bg-body-tertiary" style={{ maxWidth: '100%', margin: '0 auto' }}>
              <Link to="/" style={{color: 'black'}}>Villa Romana</Link>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                  <Nav
                      className="mx-auto my-2 my-lg-1"
                      style={{ maxHeight: '100px' }}
                      navbarScroll
                  >
                      <Nav.Link as={Link} to="/" style={{ marginRight: '15px' }}>Inicio</Nav.Link>
                      <NavDropdown title="Categorias" id="basic-nav-dropdown">
                          {categories.map((category, index) => (
                              <NavDropdown.ItemText key={index}>
                                  <Link to={`/category/${category}`}>{category}</Link>
                              </NavDropdown.ItemText>
                          ))}
                      </NavDropdown>
                      <Nav.Link href="#action3" style={{ marginRight: '15px' }}>Nosotros</Nav.Link>
                      <Nav.Link href="#action2" style={{ marginRight: '15px' }}>Contacto</Nav.Link>
                  </Nav>
              </Navbar.Collapse>
  
              {/* <Link to="/create-product">Crear producto</Link> */}
              <CartWidget />
          </Navbar>
      </Container>
  );
}

export default NavBar;