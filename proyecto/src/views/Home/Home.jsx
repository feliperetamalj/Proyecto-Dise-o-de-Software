import React from 'react';
import { useTranslation } from 'react-i18next';
import './Home.css';
import vidalImage from '../../assets/vidal.png'; // Importa la imagen

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="home-container">
      /* Header */
      <header className="header">
        <div className="header-text">
          <h1 className="header-title">{t('home.storeTitle')}</h1>
          <p className="header-slogan">{t('home.slogan')}</p>
        </div>
       
      </header>

   
      <main className="main">
        <div className="camisetas">
          <div className="camiseta">
            <img src="https://sinergiastore.cl/wp-content/uploads/2024/07/Photoroom_000_20240806_191224.jpg" alt={t('home.barcelonaAlt')} className="camiseta-img" />
            <div className="camiseta-info">
              <h3 className="camiseta-title">{t('home.jersey')} FC Barcelona</h3>
              <p className="camiseta-season">{t('home.season')} 2024/2025</p>
              <p className="camiseta-price">$80.000</p>
            </div>
          </div>

          <div className="camiseta">
            <img src="https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCL/132181422_01/w=1500,h=1500,fit=pad" alt={t('home.madridAlt')} className="camiseta-img" />
            <div className="camiseta-info">
              <h3 className="camiseta-title">{t('home.jersey')} Real Madrid</h3>
              <p className="camiseta-season">{t('home.season')} 2024/2025</p>
              <p className="camiseta-price">$85.000</p>
            </div>
          </div>

          <div className="camiseta">
            <img src="https://assets-es.imgfoot.com/media/cache/800x800/psg-away-2010-2011.jpg" alt={t('home.psgAlt')} className="camiseta-img" />
            <div className="camiseta-info">
              <h3 className="camiseta-title">{t('home.jersey')} Paris Saint-Germain</h3>
              <p className="camiseta-season">{t('home.season')} 2024/2025</p>
              <p className="camiseta-price">$75.000</p>
            </div>
          </div>

          <div className="camiseta">
            <img src="https://sinergiastore.cl/wp-content/uploads/2024/07/Photoroom_038_20240702_233434.jpg" alt={t('home.unitedAlt')} className="camiseta-img" />
            <div className="camiseta-info">
              <h3 className="camiseta-title">{t('home.jersey')} Manchester United</h3>
              <p className="camiseta-season">{t('home.season')} 2024/2025</p>
              <p className="camiseta-price">$90.000</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;