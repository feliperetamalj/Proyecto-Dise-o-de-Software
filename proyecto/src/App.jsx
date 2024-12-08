import React from 'react';
import AppRouter from './router';

import  {UserProvider}  from './context/UserContext'; // Corrected import path

export default function App() {
  return (
    <>
    <UserProvider>
      <AppRouter />
    </UserProvider>
    </>
  );
}