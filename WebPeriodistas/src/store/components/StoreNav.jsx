import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';
import { useCart } from './CartContext';
import Cart from './Cart';

const StoreNavbar = () => {
  let navigate = useNavigate();
  const { cartCount } = useCart();
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <div>
    <nav className="store-navbar">

      {/* LOGO */}
      <div className='top-nav'>
        <section className='left-nav'>
          <article className='container-logo'>
            <img 
            src='/img/logot.png'
            alt='periodistas'
            className='logo-nav'
            onClick={ () => navigate("/")} />
          </article>
          <span>Tienda Oficial Periodistas FC </span>
        </section>

          <article className='nav-scu'>
            {/* Buscar */}
            <div className="input-wrapper">
              <button className="icon"> 
                <span className="pi pi-search" style={{ color: 'white'}}></span>
              </button>
              <input placeholder="search.." className="input" name="text" type="text" />
            </div>
            {/* Carrito */}
            <div className="input-wrapper" onClick={() => setCartOpen(true)}>
              <button className="icon"> 
                <span className="pi pi-shopping-bag boton-scu"></span>
                { cartCount > 0 && (
                  <span className='cart-badge'>{ cartCount }</span>
                )}
              </button>
            </div>
            {/* Usuario */}
            <div className="input-wrapper">
              <button className="icon"> 
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

    <Cart isOpen={cartOpen} onClose={() => setCartOpen(false)}/>
    </div>
  );
};

export default StoreNavbar;
