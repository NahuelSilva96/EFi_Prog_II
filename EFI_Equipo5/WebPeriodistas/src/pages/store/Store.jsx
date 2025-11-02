import React from 'react';
import ProductCard from './ProductCard';
import './store.css';

const products = [
  { id: 1, name: 'Camiseta Oficial', price: '$50', image: '/img/' },
  { id: 2, name: 'Pantalon Oficial', price: '$20', image: '/img/' },
  { id: 3, name: 'Gorra', price: '$15', image: '/img/' },
  { id: 4, name: 'Taza', price: '$10', image: '/img/' },
];

const Store = () => {
  return (
    <div className="store-container">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Store;
