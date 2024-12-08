
import React, { createContext, useState } from 'react';
import axios from 'axios';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const fetchUserById = async (id) => {
    try {
      const response = await axios.get(`http://localhost:3000/user/${id}`);
      setUser(response.data);
    } catch (error) {
      console.error('Error fetching user:', error);
    }
  };

  return (
    <UserContext.Provider value={{ user, setUser, fetchUserById }}>
      {children}
    </UserContext.Provider>
  );
};
