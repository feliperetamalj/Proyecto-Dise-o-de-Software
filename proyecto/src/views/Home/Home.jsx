import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import './Home.css';
import Camiseta from '../../components/Items/Camiseta';

const Home = () => {
  const { t } = useTranslation();
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get('http://localhost:3000/items'); // Ajusta la URL según sea necesario
        setItems(response.data);
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    };

    fetchItems();
  }, []);

  return (
    <div className="home-container">
      <header className="header">
        <div className="header-text">
          <h1 className="header-title">{t('home.storeTitle')}</h1>
          <p className="header-slogan">{t('home.slogan')}</p>
        </div>
      </header>

      <main className="main">
        <div className="camisetas">
          {items.map((item) => (
            <Camiseta
              id={item.id}
              imgSrc={item.url}
              altText={item.nombre}
              title={item.nombre}
              season="2024/2025" 
              price={item.precio}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;