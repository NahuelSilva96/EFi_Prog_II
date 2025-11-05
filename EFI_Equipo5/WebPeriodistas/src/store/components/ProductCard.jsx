import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/store.css';
import { Button } from 'primereact/button';
import products from '../data/products';

const ProductCard = ({ product, addToCart }) => {  
  const navigate = useNavigate();
  const [selectedSize, setSelectedSize] = useState(null);

  if (!product) return null; 

  return (
      <div className="card">
        <div className="image_container"onClick={() => navigate(`/tienda/product/${product.id}`)} style={{ cursor: 'pointer' }}>
          <img src={product.img} alt={product.name} />
        </div>
        <div className="title">
          <span>{product.name}</span>
        </div>
        <div className="size">
          <span>Talle:</span>
          <ul className="list-size">
            {product.sizes && product.sizes.map((size, index) => (
              <li key={index}>
                <Button 
                className={`item-list-button ${selectedSize === size ? "active-size" : ""}`}
                onClick={()=> setSelectedSize(size)}
                >{size}</Button>
              </li>
            )) }
          </ul>
        </div>
        <div className="action">
          <div className="price">
            <span>{product.price}</span>
          </div>
          <button className="cart-button" onClick={() => addToCart({ ...product, size: selectedSize})}>
            <i className='pi pi-shopping-cart'></i>
            <span>Add to cart</span>
          </button>
        </div>
      </div>
  );
}

export default ProductCard;
