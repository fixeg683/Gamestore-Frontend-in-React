import React from 'react';
import { ShoppingBag, X } from 'lucide-react';
import { Game } from '../types/game';

interface CartProps {
  items: Game[];
  onRemove: (gameId: number) => void;
}

export const Cart: React.FC<CartProps> = ({ items, onRemove }) => {
  const total = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg">
      <div className="flex items-center mb-4">
        <ShoppingBag className="w-6 h-6 text-indigo-600 mr-2" />
        <h2 className="text-xl font-bold">Your Cart</h2>
      </div>
      {items.length === 0 ? (
        <p className="text-gray-500">Your cart is empty</p>
      ) : (
        <>
          {items.map((item) => (
            <div key={item.id} className="flex items-center justify-between py-2 border-b">
              <div>
                <h3 className="font-medium">{item.title}</h3>
                <p className="text-gray-600">${item.price}</p>
              </div>
              <button
                onClick={() => onRemove(item.id)}
                className="text-red-500 hover:text-red-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          ))}
          <div className="mt-4 pt-4 border-t">
            <div className="flex justify-between items-center mb-4">
              <span className="font-bold">Total:</span>
              <span className="font-bold text-xl">${total.toFixed(2)}</span>
            </div>
            <button className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-colors">
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};