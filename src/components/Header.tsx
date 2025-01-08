import React from 'react';
import { Zap } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Zap className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-2xl font-bold text-gray-900">Gfiex</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#products" className="text-gray-600 hover:text-gray-900">Products</a>
            <a href="#technology" className="text-gray-600 hover:text-gray-900">Technology</a>
            <a href="#about" className="text-gray-600 hover:text-gray-900">About</a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a>
          </nav>
        </div>
      </div>
    </header>
  );
};