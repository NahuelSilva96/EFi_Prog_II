import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react'; 
import { Button } from 'primereact/button';



function Navbar() {
  let navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  
  useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 0) { 
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      };
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);


    const handleNavigate = (path) => {
    navigate(path);
    setMenuOpen(false); 
  }

      return (
        <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
          
          {/* LOGO */}
          <article className='logo'>
            <img 
            src='/img/logot.png'
            alt='periodistas'
            className='logo-nav'
            onClick={ () => navigate("/")} />
          </article>
          
          {/* MENU DE ESCRITORIO */}
          <div className='desktop-only'>
            <ul className="nav-menu">
              <li className='nav-item' onClick={() => handleNavigate('/noticias')}>Noticias</li>
              <li className='nav-item' onClick={() => handleNavigate('/fixture')}>Fixture</li>
              <li className='nav-item' onClick={() => handleNavigate('/club')}>Club</li>
              <li className='nav-item' onClick={() => handleNavigate('/plantel')}>Plantel</li>
            </ul>
            <section className="users-links desktop-only">
              <Button label="Hacete Socio" icon="pi pi-id-card" iconPos="left" className="btn-hacete-socio p-button-rounded" onClick={() => handleNavigate('/hacete-socio')} />
              <Button label="Socios" icon="pi pi-user" className="btn-socios" onClick={() => handleNavigate('/socios')} />
              <Button label="Tienda" icon="pi pi-shopping-bag" className="btn-tienda" 
                  onClick={() => window.location.href = "/tienda"} />
            </section>
          </div>
          
          <div className="mobile-only hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>

          {/* MENU MOVIL */}
          {menuOpen && (
            <div className="mobile-menu">
              <ul className='nav-menu'>
                <li className='nav-item' onClick={() => { navigate('/noticias'); setMenuOpen(false); }}>Noticias</li>
                <li className='nav-item' onClick={() => { navigate('/fixture'); setMenuOpen(false); }}>Fixture</li>
                <li className='nav-item' onClick={() => { navigate('/club'); setMenuOpen(false); }}>Club</li>
                <li className='nav-item' onClick={() => { navigate('/plantel'); setMenuOpen(false); }}>Plantel</li>
              </ul>

              <section className='users-links'>
                <Button label="Hacete Socio" icon="pi pi-id-card" iconPos="left" className="btn-hacete-socio p-button-rounded"  onClick={() => { navigate('/hacete-socio'); setMenuOpen(false); }} />
                <Button label="Socios" icon="pi pi-user" className="btn-socios" onClick={() => { navigate('/socios'); setMenuOpen(false); }} />
                <Button
                  label="Tienda"
                  icon="pi pi-shopping-bag"
                  className="btn-tienda"
                  onClick={() => window.location.href = "/tienda"}
                />
              </section>
            </div>
        )}
        </nav>
    );
}
    

export default Navbar;
