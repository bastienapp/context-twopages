import { useState } from 'react';

const { createContext } = require('react');

export const ItemsContext = createContext({
  items: [],
  setItems: () => {},
});

function ItemsContextProvider(props) {
  const localItems = localStorage.getItem('items')
    ? JSON.parse(localStorage.getItem('items'))
    : [];

  const [items, setItems] = useState(localItems);

  return (
    <ItemsContext.Provider value={{ items: items, setItems: setItems }}>
      {props.children}
    </ItemsContext.Provider>
  );
}

export default ItemsContextProvider;
