import React from 'react';
import { Gamepad2 } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="bg-indigo-600 text-white py-4 px-6 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Gamepad2 className="w-8 h-8" />
          <h1 className="text-2xl font-bold">GameStore</h1>
        </div>
      </div>
    </header>
  );
};