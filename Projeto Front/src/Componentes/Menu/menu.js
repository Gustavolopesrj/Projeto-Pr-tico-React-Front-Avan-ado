import { Navbar, Nav } from 'react-bootstrap'
import { Link, withRouter } from 'react-router-dom'
import './menu.css'
// import '../imagens/fullstack-logo.png'
function BaseMenu(props) {
    const {location} = props;
    return (
        <div >
            <Navbar className='navbar-danger' bg='danger' variant='white'expand='lg' fixed='top'>
            
                <Navbar.Brand className=' logo text-white'id='logo'>
                    FullStack Eletro
                    
                </Navbar.Brand>
                <Navbar.Toggle className='navbar-light 'aria-controls='item-menu ' />
                <Navbar.Collapse id='item-menu'>
                    <Nav activeKey={location.pathname} className='ml-auto mr-3 menu-topo'>
                        <Nav.Item>
                            <Nav.Link as={Link} href='/' to='/' className='menu-topo'>Página inicial</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={Link} href='/Produtos' to='/Produtos' className='menu-topo'>Produtos</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={Link} href='/Formulario' to='/Formulario' className='menu-topo'>Contato</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={Link} href='/Lojas' to='/Lojas' className='menu-topo'>Nossas Lojas</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>


            </Navbar>
        </div>
    )
 }
const Menu = withRouter(BaseMenu);
export default Menu;