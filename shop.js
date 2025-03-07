import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MedicineCard from '../components/MedicineCard';

function Shop({ cart, setCart }) {
  const medicines = [
    { id: 1, name: 'Paracetamol', price: 50, stock: 100, image: 'https://via.placeholder.com/150', category: 'Pain Relief' },
    { id: 2, name: 'Amoxicillin', price: 200, stock: 50, image: 'https://via.placeholder.com/150', category: 'Antibiotics' },
    { id: 3, name: 'Vitamin C', price: 150, stock: 200, image: 'https://via.placeholder.com/150', category: 'Vitamins' },
  ];

  const [sort, setSort] = useState('price');
  const sortedMedicines = [...medicines].sort((a, b) => (sort === 'price' ? a.price - b.price : b.stock - a.stock));

  return (
    <div className="container mx-auto p-4">
      <select onChange={(e) => setSort(e.target.value)} className="p-2 mb-4 rounded border dark:bg-gray-800">
        <option value="price">Sort by Price</option>
        <option value="stock">Sort by Availability</option>
      </select>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {sortedMedicines.map((medicine) => (
          <MedicineCard key={medicine.id} medicine={medicine} cart={cart} setCart={setCart} />
        ))}
      </div>
    </div>
  );
}

export default Shop;