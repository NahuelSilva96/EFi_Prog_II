import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import {Container, Nav, Navbar} from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';


function NavBar() {
    const navigate = useNavigate();
    const [verItems, setVerItems] = useState(null)

    const toggleMenu = (megaMenu) => {
        setVerItems(verItems === megaMenu ? null : megaMenu)
    };

    return (
        <Navbar className="barra p-3" expand="lg">        
                <Container>
                <Navbar.Brand onClick={()=> navigate('/')} style={{ cursor: "pointer" }}
                    className='d-flex align-items-center gap-3'>
                    <img src='/src/assets/IMG/logo.png' className='icon align-top'/>
                    <span className='text-white'> Periodistas FC </span>
                </Navbar.Brand>
                {/* btn hamburguesa */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className='ms-auto'>

                        {/* inicio */}
                        <Nav.Link onClick={()=> navigate('/')} className="d-flex flex-column align-items-center align-lg-items-center gap-1 m-4 text-white">
                            <img src='/src/assets/IMG/inicio.png' className='icon'/>
                            <span className='d-flex justify-content-center gap-3 text-white'> Inicio </span>
                        </Nav.Link>

                        {/* noticias con menu interior*/}
                        <div className='nav-item noticias-mega m-2'>
                            <div className='nav-link d-flex flex-column align-items-center text-white' onClick={() => toggleMenu('noticias')}>
                                <img src="/src/assets/IMG/noticias.png" alt="noticias" className='icon'/>
                                Noticias
                            </div>

                            {verItems === 'noticias' && (
                                <div className='mega-menu'>
                                     <div onClick={() => navigate('/noticias')}>Titulos</div>
                                          <div onClick={() => navigate('/noticias')}>Novedades</div>
                                          <div onClick={() => navigate('/fixture')}>Fixture</div>
                                          <div onClick={() => navigate('/noticias')}>Tabla de posiciones</div>
                                </div>
                            )}
                        </div>

                        {/* plantel */}
                        <Nav.Link onClick={()=> navigate('/plantel')} className="d-flex flex-column align-items-center align-lg-items-center gap-1 m-4 text-white">
                            <img src='/src/assets/IMG/plantel.png' className='icon'/> 
                            <span htmlFor="inicio" className='d-flex justify-content-center gap-3 text-white'> Plantel </span>
                        </Nav.Link>

                        {/* sorteo */}
                        <Nav.Link onClick={()=> navigate('/sorteo')} className="d-flex flex-column align-items-center align-lg-items-center gap-1 m-4 text-white">
                            <img src='/src/assets/IMG/sorteo.png'  className='icon' /> 
                            <span htmlFor="inicio" className='d-flex justify-content-center gap-3 text-white'> Sorteo </span> 
                        </Nav.Link>

                        {/* tienda */}
                        <Nav.Link onClick={()=> navigate('/tienda')} className="d-flex flex-column align-items-center align-lg-items-center gap-1 m-4 text-white">
                            <img src='/src/assets/IMG/tienda.png' className='icon'/> 
                            <span htmlFor="inicio" className='d-flex justify-content-center gap-3 text-white'> Tienda </span> 
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Container>
        </Navbar>

    );
}

export default NavBar;
