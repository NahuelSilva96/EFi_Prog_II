import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function NavBar() {
    const navigate = useNavigate();

    return (
        <Navbar className="barra p-3">        
            <Container>
                <Navbar.Brand onClick={()=> navigate('/')} style={{ cursor: "pointer" }}>
                    <img src='/src/assets/IMG/logo.png' className='icon align-top'/>
                    <label htmlFor="inicio" className='nav-link text-white'> Periodistas FC </label>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className='ms-auto d-flex'>
                        <Nav.Link onClick={()=> navigate('/')}><img src='/src/assets/IMG/inicio.png' className='icon'/>
                            <label htmlFor="inicio" className='nav-link d-flex justify-content-center text-white'> Inicio </label>
                        </Nav.Link>
                        <Nav.Link onClick={()=> navigate('/noticias')}><img src='/src/assets/IMG/noticias.png' className='icon'/> 
                            <label htmlFor="inicio" className='nav-link d-flex justify-content-center text-white'> Noticias </label> 
                        </Nav.Link>
                        <Nav.Link onClick={()=> navigate('/plantel')}><img src='/src/assets/IMG/plantel.png' className='icon'/> 
                            <label htmlFor="inicio" className='nav-link d-flex justify-content-center text-white'> Plantel </label>
                        </Nav.Link>
                        <Nav.Link onClick={()=> navigate('/fixture')}><img src='/src/assets/IMG/fixture.png' className='icon'/> 
                            <label htmlFor="inicio" className='nav-link d-flex justify-content-center text-white'> Fixture</label> 
                        </Nav.Link>
                        <Nav.Link onClick={()=> navigate('/sorteo')}><img src='/src/assets/IMG/sorteo.png'  className='icon' /> 
                            <label htmlFor="inicio" className='nav-link d-flex justify-content-center text-white'> Sorteo </label> 
                        </Nav.Link>
                        <Nav.Link onClick={()=> navigate('/tienda')}><img src='/src/assets/IMG/tienda.png' className='icon'/> 
                            <label htmlFor="inicio" className='nav-link d-flex justify-content-center text-white'> Tienda </label> 
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
}

export default NavBar;
