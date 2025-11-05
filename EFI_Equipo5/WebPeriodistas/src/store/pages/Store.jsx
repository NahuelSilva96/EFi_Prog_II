import React from 'react';
import ProductCard from '../components/ProductCard';
import products from "../data/products";
import '../styles/store.css';
import { useCart } from '../components/CartContext';
import { Button } from 'primereact/button';

const Store = () => {
  const { addToCart } = useCart();

  return (
    <div>
      {/* Banner principal */}
      <div className='foto-equipo'>
        <img src="./img/equiporecor.png" alt="equipo de periodistas" />
      </div>
      <h1 className="store-title">Nuestros Productos</h1>
      {/* Productos */}
      <div className="store-container">
        {products.map(product => (
          <ProductCard
          key={product.id}
          product={product}
          addToCart={addToCart}
          />
        ))}
      </div>
      {/* Gift card */}
      <div className='gift-card'>
        <img src="/img/giftcard.png" alt="" />
        <div className='compra-ahora'>
          <span className='gift-text'>
            Perfecta para cualquier ocasión, la Tarjeta Regalo oficial 
            es el obsequio ideal que combina estilo y pasión.</span>
          <Button 
            className="btn-gift"
            severity="secondary"
            label="Comprar Ahora"
            raised 
          />
        </div>
      </div>
    </div>
  );
};

export default Store;
