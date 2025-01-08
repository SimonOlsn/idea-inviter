import React from 'react';
import { ProductGrid } from './ProductGrid';
import { ProductFilters } from './ProductFilters';
import { useProducts } from '../../hooks/useProducts';
import { Product, ProductFilter } from '../../types/products';
import { ProductModal } from './ProductModal';

interface ProductSectionProps {
  selectedProduct: Product | null;
  onProductSelect: (product: Product | null) => void;
}

export const ProductSection: React.FC<ProductSectionProps> = ({
  selectedProduct,
  onProductSelect,
}) => {
  const { products, filters, setFilters } = useProducts();

  const handleFilterChange = (newFilters: ProductFilter) => {
    setFilters(newFilters);
  };

  return (
    <section id="products" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Smart Products</h2>
      <ProductFilters filters={filters} onFilterChange={handleFilterChange} />
      <ProductGrid products={products} onProductSelect={onProductSelect} />
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => onProductSelect(null)}
        />
      )}
    </section>
  );
};