// Home.jsx
import React from 'react';
import './Home.css';

function Home() {
  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white transition-colors duration-300 min-h-screen">
        <header className="header bg-green-700 text-white p-5 text-center w-full sm:p-8 md:p-10 dark:bg-gray-800">
          <h1 className="text-xl sm:text-3xl md:text-4xl leading-tight sm:leading-snug md:leading-normal dark:text-green-300">Camiseta Store</h1>
          <p className="text-sm sm:text-base md:text-lg dark:text-gray-400">Encuentra las mejores camisetas de tus equipos favoritos a los mejores precios</p>
        </header>
        <main className="main p-4 sm:p-6 md:p-10 w-full">
          <div className="camisetas grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 justify-items-center">
            {/* Cada camiseta */}
            <div className="camiseta bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-xs transform transition-transform hover:scale-105 dark:bg-gray-800 dark:text-white">
              <img src="https://sinergiastore.cl/wp-content/uploads/2024/07/Photoroom_000_20240806_191224.jpg" alt="Camiseta FC Barcelona" className="w-full" />
              <div className="camiseta-info p-2 sm:p-3 md:p-4 text-center">
                <h3 className="text-sm sm:text-lg md:text-xl text-blue-700 mb-1 sm:mb-2 dark:text-blue-400">Camiseta FC Barcelona</h3>
                <p className="text-xs sm:text-sm md:text-base text-gray-800 dark:text-gray-300">Temporada 2024/2025</p>
                <p className="precio text-red-600 text-sm sm:text-base md:text-lg font-bold dark:text-red-400">$80.000</p>
              </div>
            </div>
            <div className="camiseta bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-xs transform transition-transform hover:scale-105 dark:bg-gray-800 dark:text-white">
              <img src="https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCL/132181422_01/w=1500,h=1500,fit=pad" alt="Camiseta Real Madrid" className="w-full" />
              <div className="camiseta-info p-2 sm:p-3 md:p-4 text-center">
                <h3 className="text-sm sm:text-lg md:text-xl text-blue-700 mb-1 sm:mb-2 dark:text-blue-400">Camiseta Real Madrid</h3>
                <p className="text-xs sm:text-sm md:text-base text-gray-800 dark:text-gray-300">Temporada 2024/2025</p>
                <p className="precio text-red-600 text-sm sm:text-base md:text-lg font-bold dark:text-red-400">$85.000</p>
              </div>
            </div>
            <div className="camiseta bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-xs transform transition-transform hover:scale-105 dark:bg-gray-800 dark:text-white">
              <img src="https://assets-es.imgfoot.com/media/cache/800x800/psg-away-2010-2011.jpg" alt="Camiseta PSG" className="w-full" />
              <div className="camiseta-info p-2 sm:p-3 md:p-4 text-center">
                <h3 className="text-sm sm:text-lg md:text-xl text-blue-700 mb-1 sm:mb-2 dark:text-blue-400">Camiseta Paris Saint-Germain</h3>
                <p className="text-xs sm:text-sm md:text-base text-gray-800 dark:text-gray-300">Temporada 2024/2025</p>
                <p className="precio text-red-600 text-sm sm:text-base md:text-lg font-bold dark:text-red-400">$75.000</p>
              </div>
            </div>
            <div className="camiseta bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-xs transform transition-transform hover:scale-105 dark:bg-gray-800 dark:text-white">
              <img src="https://sinergiastore.cl/wp-content/uploads/2024/07/Photoroom_038_20240702_233434.jpg" alt="Camiseta Manchester United" className="w-full" />
              <div className="camiseta-info p-2 sm:p-3 md:p-4 text-center">
                <h3 className="text-sm sm:text-lg md:text-xl text-blue-700 mb-1 sm:mb-2 dark:text-blue-400">Camiseta Manchester United</h3>
                <p className="text-xs sm:text-sm md:text-base text-gray-800 dark:text-gray-300">Temporada 2024/2025</p>
                <p className="precio text-red-600 text-sm sm:text-base md:text-lg font-bold dark:text-red-400">$90.000</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default Home;



