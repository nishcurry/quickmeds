import React from 'react';
import { Link } from 'react-router-dom';

function MedicineCard({ medicine, cart, setCart }) {
  const addToCart = () => {
    const existing = cart.find((item) => item.id === medicine.id);
    if (existing) {
      setCart(cart.map((item) => (item.id === medicine.id ? { ...item, quantity: item.quantity + 1 } : item)));
    } else {
      setCart([...cart, { ...medicine, quantity: 1 }]);
    }
  };

  return (
    <div className="border p-4 rounded hover:shadow-lg">
      <Link to={`/medicine/${medicine.id}`}>
        <img src={medicine.image} alt={medicine.name} className="w-full h-32 object-cover" loading="lazy" />
        <h3 className="font-semibold">{medicine.name}</h3>
        <p>{medicine.price} KES</p>
        <p>{medicine.stock > 0 ? 'In Stock' : 'Out of Stock'}</p>
      </Link>
      <button
        onClick={addToCart}
        disabled={medicine.stock === 0}
        className="bg-blue-500 text-white p-2 mt-2 rounded disabled:bg-gray-400"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default MedicineCard;