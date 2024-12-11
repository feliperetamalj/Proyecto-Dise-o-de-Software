import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import './Camiseta.css'; // Si tienes estilos específicos para este componente
import axios from 'axios';



const Camiseta = ({ id, imgSrc, altText, title, season, price }) => {
  const { t } = useTranslation();

  const handleAddToCart = async () => {
    try {
      // Asume que el ID del usuario está disponible en el contexto o en el estado global
      console.log('id', id)
      const userId = userId; 
      await axios.post(`http://localhost:3000/${userId}/items`, { itemId: id });
      alert(t('cart.addSuccess'));
    } catch (error) {
      console.error('Error adding to cart:', error);
      alert(t('cart.addFailure'));
    }
  };

  return (
    <div className="camiseta">
      <img src={imgSrc} alt={altText} className="camiseta-img" />
      <div className="camiseta-info">
        <h3 className="camiseta-title">{t('home.jersey')} {title}</h3>
        <p className="camiseta-season">{t('home.season')} {season}</p>
        <p className="camiseta-price">${price}.000</p>
        <p className = "camiseta-price">{id}</p>
        <button className="add-to-cart-button" onClick={handleAddToCart}>
          {t('cart.addButton')}
        </button>
      </div>
    </div>
  );
};

Camiseta.propTypes = {
  id: PropTypes.number.isRequired,
  imgSrc: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  season: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default Camiseta;