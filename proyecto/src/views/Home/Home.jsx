import React from 'react';
import "./Home.css"

function Home() {
  return (
    <>
      <div className="header">
        <h1>Camiseta Store</h1>
        <p>Encuentra las mejores camisetas de tus equipos favoritos a los mejores precios</p>
      </div>

      <div className="main">
        <div className="camisetas">
          <div className="camiseta">
            <img src="https://sinergiastore.cl/wp-content/uploads/2024/07/Photoroom_000_20240806_191224.jpg" alt="Camiseta FC Barcelona" />
            <div className="camiseta-info">
              <h3>Camiseta FC Barcelona</h3>
              <p>Temporada 2024/2025</p>
              <p className="precio">$80.000</p>
            </div>
          </div>

          <div className="camiseta">
            <img src="https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCL/132181422_01/w=1500,h=1500,fit=pad" alt="Camiseta Real Madrid" />
            <div className="camiseta-info">
              <h3>Camiseta Real Madrid</h3>
              <p>Temporada 2024/2025</p>
              <p className="precio">$85.000</p>
            </div>
          </div>

          <div className="camiseta">
            <img src="https://assets-es.imgfoot.com/media/cache/800x800/psg-away-2010-2011.jpg" alt="Camiseta PSG" />
            <div className="camiseta-info">
              <h3>Camiseta Paris Saint-Germain</h3>
              <p>Temporada 2024/2025</p>
              <p className="precio">$75.000</p>
            </div>
          </div>

          <div className="camiseta">
            <img src="https://sinergiastore.cl/wp-content/uploads/2024/07/Photoroom_038_20240702_233434.jpg" alt="Camiseta Manchester United" />
            <div className="camiseta-info">
              <h3>Camiseta Manchester United</h3>
              <p>Temporada 2024/2025</p>
              <p className="precio">$90.000</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
