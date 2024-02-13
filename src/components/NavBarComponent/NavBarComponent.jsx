import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';
import { useGetCategories } from '../../hooks/useProducts';

const NavbarComponent = () => {
    const { categories } = useGetCategories();
    /* const categorias =  [{categoria: "Cama"}, {categoria: "Baño"}, {categoria: "Complemento"}]; */

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>
                <Link to='/'>Beds & Dreams</Link>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100p' }}
                        navbarScroll
                    >
                        <Nav.Link href="#inicio">Inicio</Nav.Link>
                        <Nav.Link href="#quienes-somos">¿Quiénes Somos?</Nav.Link>
                        <Nav.Link href="#tienda-online">Tienda Online</Nav.Link>
                        <Nav.Link href="#hoteles">Hoteles</Nav.Link>
                        <Nav.Link href="#contacto">Contácto</Nav.Link>
                        <NavDropdown title="Categorías y Productos" id="navbarScrollingDropdown">
                            {categories.map((category, index) => {
                                /* const category = cat.categoria */
                                return (
                                    <NavDropdown.Item key={index}>
                                        <Link key={index} to={`/category/${category}`}>{category}</Link>
                                    </NavDropdown.Item>
                                )
                            })}
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action8">
                                <Link to='/'>
                                    Todas las Categorias
                                </Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action10">
                                <Link to='create-product'>Crear Nuevo Producto</Link>
                            </NavDropdown.Item>
                        </NavDropdown>

                    </Nav>
                    
                </Navbar.Collapse>
                <Nav.Link href="#action9" >
                    <div>
                        <CartWidget />
                    </div>
                </Nav.Link>
            </Container>
        </Navbar>
    );
};

export default NavbarComponent;

