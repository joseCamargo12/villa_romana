import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';
import { useGetCategories } from '../hooks/useProducts';


const NavBar = () => {

    const {categories} = useGetCategories()
    
    return(
        <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Link to="/">Villa Romana</Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="mx-auto my-2 my-lg-1"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link as={Link} to="/">Inicio</Nav.Link>
              <NavDropdown title="Categorias" id="basic-nav-dropdown">
              {
                categories.map((category, index) => {
                  return(
                    <NavDropdown.ItemText key={index}> 
                      <Link to={`/category/${category}`}>{category}</Link>
                    </NavDropdown.ItemText>
                  )
                })
              }
              </NavDropdown>
              <Nav.Link href="#action3">Nosotros</Nav.Link>
              <Nav.Link href="#action2">Contacto</Nav.Link>
            </Nav>
          </Navbar.Collapse>

          <Link to="/create-product">Crear producto</Link>
          <CartWidget />
        </Container>
      </Navbar>
    )
}

export default NavBar;