import React from 'react';
import { useParams } from 'react-router-dom';

function MedicineDetails({ cart, setCart }) {
  const { id } = useParams();
  const medicine = {
    id: 1,
    name: 'Paracetamol',
    price: 50,
    stock: 100,
    image: 'https://via.placeholder.com/150',
    description: 'Used for pain relief and fever reduction.',
    dosage: '1 tablet every 6 hours',
    sideEffects: 'Nausea, rash',
    seller: { name: 'ABC Pharmacy', location: 'Nairobi', contact: '0700 123 456' },
  };

  const addToCart = () => {
    const existing = cart.find((item) => item.id === medicine.id);
    if (existing) {
      setCart(cart.map((item) => (item.id === medicine.id ? { ...item, quantity: item.quantity + 1 } : item)));
    } else {
      setCart([...cart, { ...medicine, quantity: 1 }]);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row gap-4">
        <img src={medicine.image} alt={medicine.name} className="w-full md:w-1/3 h-64 object-cover" loading="lazy" />
        <div>
          <h2 className="text-2xl font-bold">{medicine.name}</h2>
          <p className="text-xl">{medicine.price} KES</p>
          <p>{medicine.stock > 0 ? 'In Stock' : 'Out of Stock'}</p>
          <p>{medicine.description}</p>
          <p><strong>Dosage:</strong> {medicine.dosage}</p>
          <p><strong>Side Effects:</strong> {medicine.sideEffects}</p>
          <p><strong>Seller:</strong> {medicine.seller.name}, {medicine.seller.location}</p>
          <button onClick={addToCart} className="bg-blue-500 text-white p-2 mt-4 rounded">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default MedicineDetails;