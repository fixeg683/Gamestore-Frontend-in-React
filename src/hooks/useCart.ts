import { useState } from 'react';
import { Game } from '../types/game';

export const useCart = () => {
  const [items, setItems] = useState<Game[]>([]);

  const addToCart = (game: Game) => {
    setItems([...items, game]);
  };

  const removeFromCart = (gameId: number) => {
    setItems(items.filter(item => item.id !== gameId));
  };

  const getTotal = () => {
    return items.reduce((sum, item) => sum + item.price, 0);
  };

  return {
    items,
    addToCart,
    removeFromCart,
    getTotal,
  };
};