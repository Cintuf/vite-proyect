import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css'
function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" id='barra' >
      <Container>
        <Link to={'/'}><a href='/'><img id='logoDrink'src="/drinkstore.png" alt="logo" /></a></Link>
        <Navbar.Brand to="/" id='tituloPrincipal'></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <NavLink className="navBarLinks" to="/category/Destilados">Licores</NavLink>
            <NavLink className="navBarLinks" to="/category/Cervezas">Cervezas</NavLink>
            <NavLink className='navBarLinks' to="/cart"><CartWidget /></NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
