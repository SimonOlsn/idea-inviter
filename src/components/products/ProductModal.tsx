import React from 'react';
import { X } from 'lucide-react';
import { Product } from '../../types/products';

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-2xl font-bold text-gray-900">{product.name}</h3>
              <p className="text-blue-600 font-medium">Codename: {product.codename}</p>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-500"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          
          <div className="mt-6">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>

          <div className="mt-6">
            <p className="text-gray-600">{product.description}</p>
            
            <div className="mt-6">
              <h4 className="font-semibold text-lg mb-2">Key Features</h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {product.specs && (
              <div className="mt-6">
                <h4 className="font-semibold text-lg mb-2">Specifications</h4>
                <dl className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(product.specs).map(([key, value]) => (
                    <div key={key}>
                      <dt className="text-gray-600">{key}</dt>
                      <dd className="font-medium text-gray-900">{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            )}

            {product.price && (
              <div className="mt-6 pt-6 border-t">
                <p className="text-2xl font-bold text-gray-900">{product.price}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};