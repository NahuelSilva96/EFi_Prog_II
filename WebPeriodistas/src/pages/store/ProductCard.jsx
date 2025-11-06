import React from 'react';
import { Button } from 'primereact/button';
import './store.css';

const ProductCard = ({ product }) => {
  if (!product) return null; 

  return (
      <div className="card">
        <div className="image_container">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="title">
          <span>{product.name}</span>
        </div>
        <div className="size">
          <span>Size</span>
          <ul className="list-size">
            <li className="item-list"><button className="item-list-button">sm</button></li>
            <li className="item-list"><button className="item-list-button">m</button></li>
            <li className="item-list"><button className="item-list-button">l</button></li>
            <li className="item-list"><button className="item-list-button">xl</button></li>
            <li className="item-list"><button className="item-list-button">xxl</button></li>
          </ul>
        </div>
        <div className="action">
          <div className="price">
            <span>{product.price}</span>
          </div>
          <button className="cart-button">
            <svg className="cart-icon" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" strokeLinejoin="round" strokeLinecap="round" />
            </svg>
            <span>Add to cart</span>
          </button>
        </div>
      </div>
  );
}

export default ProductCard;
