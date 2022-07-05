import { useState, createContext } from 'react';

export const UserContext = createContext({
  isLoggedIn: false,
  user: null,
  setUser: () => {},
  logout: () => {},
});

export const UserProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const logout = () => {
    setIsLoggedIn(false);
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ isLoggedIn, user, setUser, logout }}>
      {children}
    </UserContext.Provider>
  );
};
