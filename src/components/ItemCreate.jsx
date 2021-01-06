import React, { useContext, useState } from 'react';
import { ItemsContext } from '../contexts/ItemsContextProvider';

const ItemCreate = () => {
  const [title, setTitle] = useState('');
  const { items, setItems } = useContext(ItemsContext);

  return (
    <div>
      <ul>
        {items.map((item) => (
          <li>{item.title}</li>
        ))}
      </ul>
      <div>
        <input
          type='text'
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <br />
        <input
          type='submit'
          onClick={(event) => {
            event.preventDefault();
            const newItems = [{ title: title }, ...items];
            localStorage.setItem('items', JSON.stringify(newItems));
            setItems([{ title: title }, ...items]);
            setTitle('');
          }}
        />
      </div>
    </div>
  );
};

export default ItemCreate;
