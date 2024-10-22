'use client'; // Add this at the top

import { useEffect, useState } from 'react';
import axios from 'axios';
// import Create from './crud/create/page';
import List from './crud/list/page';

const Page = () => {
  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const response = await axios.get('https://next-crud-server.vercel.app/api/items');
    setItems(response.data);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div>
      {/* <h1 className="text-3xl font-bold">Item iuioiuoi  List</h1> */}
      {/* <Create refreshItems={fetchItems} /> */}
      <br></br>
      <List items={items} refreshItems={fetchItems} />
    </div>
  );
};

export default Page;
