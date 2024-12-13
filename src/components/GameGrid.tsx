import React from 'react';
import { GameCard } from './GameCard';
import { Game } from '../types/game';

interface GameGridProps {
  games: Game[];
  onAddToCart: (game: Game) => void;
}

export const GameGrid: React.FC<GameGridProps> = ({ games, onAddToCart }) => {
  return (
    <div className="lg:col-span-3">
      <h2 className="text-2xl font-bold mb-6">Popular Games</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {games.map((game) => (
          <GameCard 
            key={game.id} 
            game={game} 
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </div>
  );
};