import React, { useState } from 'react';
import '../styles/store.css';
import { Button } from 'primereact/button';

const ProductCard = ({ product, addToCart }) => {  
  const [selectedSize, setSelectedSize] = useState(null);

  if (!product) return null; 

  return (
      <div className="card">
        <div className="image_container" style={{ cursor: 'pointer' }}>
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
          <Button 
          className="cart-button" 
          onClick={(e) => addToCart({ ...product, size: selectedSize}, e.currentTarget.blur()) 
          } >
            <i className='pi pi-shopping-cart'></i>
            <span>Add to cart</span>
          </Button>
        </div>
      </div>
  );
}

export default ProductCard;
