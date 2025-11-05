import React, { useState } from 'react';
import { useCart } from './CartContext';
import '../styles/productDetail.css';


const ProductDetail = ({ product }) => {
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Por favor selecciona un talle antes de agregar al carrito.");
      return;
    }

    const productToAdd = {
      ...product,
      size: selectedSize,
      quantity,
    };

    addToCart(productToAdd);
  };

  return (
    <section className="product-detail-container">

      {/* Imagen del producto */}
      <article className="left">
        <img src={product.img} alt={product.name} className="product-img" />
      </article>

      {/* Detalles del producto */}
      <article className="right">
        <h2>{product.name}</h2>
        <h3>${product.price}</h3>

        {/* Selección de talle */}
        <div className="size">
          <span>Talle</span>
          <ul className="list-size">
            {["sm", "m", "l", "xl", "xxl"].map((size) => (
              <li key={size}>
                <button
                  className={`item-list-button ${
                    selectedSize === size ? "active-size" : ""
                  }`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Cantidad */}
        <div className="quantity-container">
          <span>Cantidad</span>
          <div className="quantity-box">
            <button onClick={() => quantity > 1 && setQuantity(quantity - 1)}>
              -
            </button>
            <span>{quantity}</span>
            <button onClick={() => setQuantity(quantity + 1)}>+</button>
          </div>
        </div>

        <button className="add-btn" onClick={handleAddToCart}>
          Agregar al carrito
        </button>
      </article>
    </section>
  );
};


export default ProductDetail;
