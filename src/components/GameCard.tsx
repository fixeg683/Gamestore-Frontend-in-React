import React from 'react';
import { Star, ShoppingCart } from 'lucide-react';
import { Game } from '../types/game';

interface GameCardProps {
  game: Game;
  onAddToCart: (game: Game) => void;
}

export const GameCard: React.FC<GameCardProps> = ({ game, onAddToCart }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
      <img 
        src={game.imageUrl} 
        alt={game.title} 
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-gray-900">{game.title}</h3>
          <span className="flex items-center text-yellow-500">
            <Star className="w-5 h-5 fill-current" />
            <span className="ml-1">{game.rating}</span>
          </span>
        </div>
        <p className="text-gray-600 text-sm mb-2">{game.description}</p>
        <div className="flex items-center justify-between mt-4">
          <span className="text-xl font-bold text-gray-900">${game.price}</span>
          <button
            onClick={() => onAddToCart(game)}
            className="flex items-center bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            <ShoppingCart className="w-5 h-5 mr-2" />
            Add to Cart
          </button>
        </div>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mt-2">
          {game.genre}
        </span>
      </div>
    </div>
  );
};