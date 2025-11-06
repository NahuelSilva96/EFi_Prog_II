import React from 'react';
import ProductCard from './ProductCard';
import './store.css';

const products = [
  { id: 1, name: 'Camiseta Oficial', price: '$50', image: '/img/camiseta.png' },
  { id: 2, name: 'campera y Pantalon entrenamiento', price: '$20', image: '/img/conjunto_azul.jpeg' },
  { id: 3, name: 'Gorra', price: '$15', image: '/img/gorranegra.png' },
  { id: 4, name: 'Conjunto invierno', price: '$10', image: '/img/camperaypantalonazul.png' },
];

const Store = () => {
  return (
    <div>
      <div className='foto-equipo'>
        <img src="./img/equiporecor.png" alt="equipo de periodistas" />
      </div>
      <div className="store-container">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className='gift-card'>
        <img src="/img/giftcard.png" alt="" style={{backgroundColor: 'gray'}}/>
      </div>
    </div>
  );
};

export default Store;
