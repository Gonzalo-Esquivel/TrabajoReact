import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {CartWidget} from '../CartWidget/CartWidget'

function BasicExample() {
    return (
    <Navbar bg="light" expand="lg">
        <Container>
        <img
                src="../"
                width="50"
                height="50"
                className="d-inline-block align-top"
                alt="logo"/>
        <Navbar.Brand href="#home">FundaStyle</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link href="#home">Plantillas</Nav.Link>
            <Nav.Link href="#link">Arma Tu Funda</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        <CartWidget/>
        </Container>

    </Navbar>
    );
}

export default BasicExample;