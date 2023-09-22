import CartWidget from './CartWidget'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'

const NavBar = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="#inicio">StoreGaming</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#inicio">Inicio</Nav.Link>
                    <Nav.Link href="#productos">Productos</Nav.Link>
                </Nav>
                <Nav className="d-flex">
                    <Nav.Link href="#carrito"><CartWidget /></Nav.Link>

                </Nav>
                <Form className="d-flex">
                    <FormControl
                        type="search"
                        placeholder="Buscar"
                        className="me-2"
                        aria-label="Search"
                    />
                    <Button variant="outline-secondary">Buscar</Button>
                </Form>
            </Container>
        </Navbar>
    )
};

export default NavBar;
