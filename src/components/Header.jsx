import NavBar from './NavBar',
import LogoStore from './LogoStore',
import Container from 'react-bootstrap/Container',
import Row from 'react-bootstrap/Row',
import Col from 'react-bootstrap/Col',

const Header = () => {
    return (
        <header id="contenido-header">
            <Container>
                <Row>
                    <Col md={2} className="columna-header"><a href="#inicio"><LogoStore/></a></Col>
                    <Col md={10} className="columna-header" id="contenedor-titulo"><h1>StoreGaming</h1></Col>
                </Row>
                <NavBar />
            </Container>
        </header>
    ),
},

export default Header,
