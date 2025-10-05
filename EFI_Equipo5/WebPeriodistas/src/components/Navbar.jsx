import { useNavigate } from 'react-router-dom';
import React from 'react'; 
import { Button } from 'primereact/button';



function Navbar() {
  let navigate = useNavigate();
  
      return (
        <nav className='nav'>
          <section className='nav-left'>
            <article className='logo'>
              <img 
              src='/src/assets/IMG/logot.png'
              alt='periodistas'
              className='logo-nav'
              onClick={ () => navigate("/")} />
            </article>          
            <ul className='nav-menu'>
              <li className='nav-item' onClick={() => navigate('/noticias')}>Noticias</li>
              <li className='nav-item'>Fixture</li>
              <li className='nav-item'>Club</li>
              <li className='nav-item'>Plantel</li>
            </ul>
          </section>
          <div className='users-links'>
            <Button label="Hacete Socio" icon="pi pi-id-card" iconPos="left" className="btn-hacete-socio p-button-rounded"  onClick={() => navigate('/hacete-socio')} />
            <Button label="Socios" icon="pi pi-user" className="btn-socios" onClick={() => navigate('/socios')} />
            <Button label="Tienda" icon="pi pi-shopping-bag" className="btn-tienda" onClick={() => navigate('/tienda')} />
          </div>
        </nav>
    );
}
    

export default Navbar;
