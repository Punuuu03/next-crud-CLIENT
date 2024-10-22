'use client'; // This marks the file as a client-side component

import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useParams } from 'next/navigation'; // Import useParams for dynamic route parameters

const Edit = () => {
  const router = useRouter();
  const { id } = useParams(); // Dynamically get the item ID from the URL
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Fetch the item details when the component mounts
  useEffect(() => {
    const fetchItem = async () => {
      if (!id) return; // Exit early if there's no ID

      try {
        setLoading(true); // Start loading
        const response = await axios.get(`https://next-crud-server.vercel.app/api/items/${id}`);
        setName(response.data.name);
        setDescription(response.data.description);
      } catch (err) {
        setError('Failed to fetch item details.');
      } finally {
        setLoading(false); // End loading
      }
    };

    fetchItem();
  }, [id]); // Only re-run the effect if the ID changes

  // Handle form submission for editing the item
  const handleEdit = async () => {
    try {
      await axios.put(`https://next-crud-server.vercel.app/api/items/${id}`, { name, description });
      router.push('/'); // Redirect after successful update
    } catch (err) {
      setError('Failed to update the item. Please try again.');
    }
  };

  if (loading) return <p>Loading item details...</p>;

  return (
    <div className="mt-2">
      <div className="space-y-2">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border border-gray-300 rounded p-2 w-full"
          placeholder="Name"
        />
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border border-gray-300 rounded p-2 w-full"
          placeholder="Description"
        />
        <button
          onClick={handleEdit}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Save
        </button>
      </div>
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
};

export default Edit;
