import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [search, setSearch] = useState('');
  const featuredMedicines = [
    { id: 1, name: 'Paracetamol', price: 50, image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Amoxicillin', price: 200, image: 'https://via.placeholder.com/150' },
  ];

  return (
    <div className="container mx-auto p-4">
      <input
        type="text"
        placeholder="Search medicines..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-2 mb-4 rounded border dark:bg-gray-800 dark:text-white"
      />
      <h2 className="text-xl font-bold mb-4">Featured Medicines</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {featuredMedicines.map((medicine) => (
          <Link to={`/medicine/${medicine.id}`} key={medicine.id}>
            <div className="border p-4 rounded hover:shadow-lg">
              <img src={medicine.image} alt={medicine.name} className="w-full h-32 object-cover" loading="lazy" />
              <h3 className="font-semibold">{medicine.name}</h3>
              <p>{medicine.price} KES</p>
            </div>
          </Link>
        ))}
      </div>
      <h2 className="text-xl font-bold mt-6">Categories</h2>
      <div className="flex space-x-4">
        <Link to="/shop" className="bg-blue-500 text-white p-2 rounded">Pain Relief</Link>
        <Link to="/shop" className="bg-blue-500 text-white p-2 rounded">Antibiotics</Link>
      </div>
    </div>
  );
}

export default Home;