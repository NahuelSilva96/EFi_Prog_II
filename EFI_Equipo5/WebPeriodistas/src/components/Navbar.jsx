import { useNavigate } from 'react-router-dom';
import React from 'react'; 



function Navbar() {
  let navigate = useNavigate(); 
      return (
        <nav className='nav'>
          <section className='nav-left'>
            <article className='logo'>
              <img 
              src='/src/assets/IMG/logo.png'
              alt='periodistas'
              className='logo-nav'
              onClick={ () => navigate("/")} />
            </article>          
            <ul className='nav-menu'>
              <li className='nav-item'>Noticias</li>
              <li className='nav-item'>Fixture</li>
              <li className='nav-item'>Club</li>
              <li className='nav-item'>Plantel</li>
            </ul>
          </section>
          <div className='users-links'>
            <a><i className="pi pi-id-card"/><span>Hacete Socio</span></a>
            <a><i className="pi pi-user"/>Socios </a>
            <a><i className="pi pi-shopping-bag"/>Tienda</a>
          </div>
        </nav>
    );
}
    

export default Navbar;
