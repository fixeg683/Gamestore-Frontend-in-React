import React from 'react';
import { Header } from './components/Header';
import { GameGrid } from './components/GameGrid';
import { Cart } from './components/Cart';
import { games } from './data/games';
import { useCart } from './hooks/useCart';

function App() {
  const { items, addToCart, removeFromCart } = useCart();

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <GameGrid games={games} onAddToCart={addToCart} />
          <div className="lg:col-span-1">
            <Cart items={items} onRemove={removeFromCart} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;