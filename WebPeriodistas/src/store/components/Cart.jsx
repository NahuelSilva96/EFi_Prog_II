import React from 'react';
import { useCart } from '../components/CartContext';


const CartModal = ({ isOpen, onClose }) => {
  const { cartItems, removeFromCart, clearCart } = useCart();

  if (!isOpen) return null;

  const totalPrice = cartItems.reduce((sum, item) => {
    const priceNumber = Number(item.price);
    return sum + priceNumber * item.quantity;
  }, 0);

  return (
    <div className="cart-modal-overlay" onClick={onClose}>
      <div className="cart-modal" onClick={e => e.stopPropagation()}>
        <h2>Tu Carrito</h2>
        {cartItems.length === 0 ? (
          <p>El carrito está vacío.</p>
        ) : (
          <>
            <ul className="cart-items">
              {cartItems.map(item => (
                <li key={item.id} className="cart-item">
                  <img src={item.img} alt={item.name} />
                  <div>
                    <p>{item.name}</p>
                    <p>Talle: {item.size}</p>
                    <p>{item.quantity} x {item.price}</p>
                  </div>
                  <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
                </li>
              ))}
            </ul>
            <p className="total">Total: ${totalPrice}</p>
            <button className="btn-clear" onClick={clearCart}>Vaciar Carrito</button>
            <button className="btn-close" onClick={onClose}>Cerrar</button>
          </>
        )}
      </div>
    </div>
  );
};

export default CartModal;