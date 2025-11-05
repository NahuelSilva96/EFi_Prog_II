import React from 'react';
import ProductCard from '../components/ProductCard';
import products from "../data/products";
import '../styles/store.css';
import { useCart } from '../components/CartContext';

const Store = () => {
  const { addToCart } = useCart();

  return (
    <div>

      <div className='foto-equipo'>
        <img src="./img/equiporecor.png" alt="equipo de periodistas" />
      </div>

      <div className="store-container">
        {products.map(product => (
          <ProductCard
          key={product.id}
          product={product}
          addToCart={addToCart}
          />
        ))}
      </div>

      <div className='gift-card'>
        <img src="/img/giftcard.png" alt="" style={{backgroundColor: 'gray'}}/>
      </div>
    </div>
  );
};

export default Store;
