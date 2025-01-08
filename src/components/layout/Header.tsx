import React from 'react';
import { Zap } from 'lucide-react';
import { Navigation } from './Navigation';
import { Link } from 'react-router-dom';

export const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center group">
            <Zap className="h-8 w-8 text-blue-600 group-hover:text-blue-700 transition-colors" />
            <span className="ml-2 text-2xl font-bold text-gray-900 group-hover:text-gray-700 transition-colors">Gfiex</span>
          </Link>
          <Navigation />
        </div>
      </div>
    </header>
  );
};