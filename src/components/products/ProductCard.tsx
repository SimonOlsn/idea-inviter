import React from 'react';
import { Product } from '../../types/products';
import { ArrowRight } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onSelect }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105">
      <div className="relative h-48">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
          {product.codename}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
        <p className="mt-2 text-gray-600">{product.description}</p>
        <div className="mt-4">
          <button
            onClick={() => onSelect(product)}
            className="inline-flex items-center text-blue-600 hover:text-blue-700"
          >
            Learn more <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};