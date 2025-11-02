import React from 'react';
import { Button } from 'primereact/button';
import './store.css';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.price}</p>
      <Button label="Agregar al carrito" icon="pi pi-shopping-cart" className="p-button-success" />
    </div>
  );
};

export default ProductCard;
