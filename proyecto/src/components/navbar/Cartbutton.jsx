import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import { UserContext } from '../../context/UserContext';
import './CartButton.css';

const CartButton = () => {
  const { t } = useTranslation();
  const { user } = useContext(UserContext);
  const [cartItems, setCartItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (user && isOpen) {
      const fetchCartItems = async () => {
        try {
          const response = await axios.get(`http://localhost:3000/${user.id}/items`);
          setCartItems(response.data);
        } catch (error) {
          console.error('Error fetching cart items:', error);
        }
      };

      fetchCartItems();
    }
  }, [user, isOpen]);

  const toggleCart = () => {
    setIsOpen(!isOpen);
  };

  const handleRemoveItem = async (itemId) => {
    try {
      await axios.delete(`http://localhost:3000/${user.id}/items/${itemId}`);
      setCartItems(cartItems.filter(item => item.id !== itemId));
    } catch (error) {
      console.error('Error removing item from cart:', error);
    }
  };

  return (
    <div className="cart-container">
      <button className="cart-button" onClick={toggleCart}>
        🛒
      </button>
      {isOpen && (
        <div className="cart-dropdown">
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.url} alt={item.nombre} className="cart-item-img" />
                <div className="cart-item-info">
                  <p className="cart-item-title">Camiseta {item.nombre}</p>
                  <p className="cart-item-price">${item.precio}.000</p>
                </div>
                <button className="remove-item-button" onClick={() => handleRemoveItem(item.id)}>
                  🗑️
                </button>
              </div>
            ))
          ) : (
            <p>{t('cart.empty')}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default CartButton;