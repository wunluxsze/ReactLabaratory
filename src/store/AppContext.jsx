import { createContext, useState } from 'react';
import uuid from 'react-uuid';

const AppContext = createContext();

const { Provider } = AppContext;

const AppProvider = ({ children }) => {
  const [albums, setAlbums] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [authState, setAuthState] = useState(false);
  const [order, setOrder] = useState([]);

  const [users, setUsers] = useState([
    { id: uuid(), name: 'adminadmin', password: 'adminadmin' },
    { id: uuid(), name: 'тыыы', password: '88888' },
    { id: uuid(), name: 'оннн', password: 'никогданевзломают' },
  ]);

  return (
    <Provider
      value={{
        albums,
        setAlbums,
        favorites,
        setFavorites,
        authState,
        setAuthState,
        users,
        setUsers,
        order,
        setOrder,
      }}>
      {children}
    </Provider>
  );
};

export { AppProvider, AppContext };
