'use client'; // Ensure this is a client-side component

import { useState } from 'react';
import axios from 'axios';

const Create = ({ refreshItems }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://next-crud-server.vercel.app/api/items', { name, description });
      setName('');
      setDescription('');
      refreshItems(); // Call refreshItems to update the list after adding a new item
    } catch (error) {
      console.error('Error creating item:', error);
    }
  };

  return (
    <div className="mt-4 p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Create Item</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default Create;
