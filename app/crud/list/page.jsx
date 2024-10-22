'use client'; // Ensure this is a client-side component

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'; // To navigate to the Edit page
import axios from 'axios';
import Create from '../create/page'; // Import the Create component

const List = () => {
  const [items, setItems] = useState([]);
  const router = useRouter(); // For navigation to the Edit page

  // Function to fetch items from the API
  const refreshItems = async () => {
    try {
      const response = await axios.get('https://next-crud-server.vercel.app/api/items');
      setItems(response.data);
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };

  // Load items on component mount
  useEffect(() => {
    refreshItems();
  }, []);

  // Function to delete an item
  const deleteItem = async (id) => {
    try {
      await axios.delete(`https://next-crud-server.vercel.app/api/items/${id}`);
      refreshItems(); // Refresh the list after deletion
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  // Function to handle edit button click and navigate to the edit page
  const handleEdit = (id) => {
    router.push(`/crud/edit/${id}`); // Navigate to the edit page
  };

  return (
    <div className="p-4">
      {/* <h2 className="text-2xl font-bold mb-4">Item List</h2> */}
      <Create refreshItems={refreshItems} /> {/* Include Create component */}
      <ul className="space-y-4">
        {items.map((item) => (
          <li
            key={item._id}
            className="bg-white shadow-md rounded-lg p-4 flex flex-col md:flex-row items-start md:items-center justify-between"
          >
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
              <p className="text-gray-600 mb-2">{item.description}</p>
            </div>
            <div className="flex space-x-4 mt-4 md:mt-0">
              {/* Edit Item Button */}
              <button
                onClick={() => handleEdit(item._id)}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Edit
              </button>

              {/* Delete Button */}
              <button
                onClick={() => deleteItem(item._id)}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
