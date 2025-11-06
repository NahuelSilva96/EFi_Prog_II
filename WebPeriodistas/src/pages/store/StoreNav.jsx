import React from 'react';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';

const StoreNavbar = () => {
  let navigate = useNavigate();

  return (
    <nav className="store-navbar">
      {/* LOGO */}
      <div className='top-nav'>
      <article className='container-logo'>
        <img 
        src='/img/logot.png'
        alt='periodistas'
        className='logo-nav'
        onClick={ () => navigate("/")} />
      </article>
      <span>Tienda Oficial Periodistas FC </span>
      <article className='nav-scu'>
        <div class="input-wrapper">
          <button class="icon"> 
            <span className="pi pi-search" style={{ color: 'white'}}></span>
          </button>
          <input placeholder="search.." className="input" name="text" type="text" />
        </div>
        <div class="input-wrapper">
          <button class="icon"> 
            <span className="pi pi-shopping-bag boton-scu"></span>        
          </button>
        </div>
        <div class="input-wrapper">
          <button class="icon"> 
            <span className="pi pi-user boton-scu"></span>        
          </button>
        </div>
      </article>
      </div>
      <div className='linea-shop'></div>
      <div className='bottom-nav'>
      <div className="nav-buttons">
        <Button style={{ color: 'white' }} label="Conjuto Titular" link onClick={() =>  window.open('https://react.dev', '_blank')}/>
        <Button style={{ color: 'white' }} label="Coleccion Invierno" link/>
        <Button style={{ color: 'white' }} label="Entrenamiento" link/>
        <Button style={{ color: 'white' }} label="Niños" link/>

      </div>
      </div>
    </nav>
  );
};

export default StoreNavbar;
