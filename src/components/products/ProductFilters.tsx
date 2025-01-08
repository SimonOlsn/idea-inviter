import React from 'react';
import { ProductCategory, ProductFilter } from '../../types/products';

interface ProductFiltersProps {
  filters: ProductFilter;
  onFilterChange: (filters: ProductFilter) => void;
}

export const ProductFilters: React.FC<ProductFiltersProps> = ({
  filters,
  onFilterChange,
}) => {
  const categories: ProductCategory[] = ['outlet', 'switch', 'doorbell', 'panel', 'faceplate'];

  return (
    <div className="mb-8">
      <div className="flex flex-col sm:flex-row gap-4">
        <input
          type="text"
          placeholder="Search products..."
          className="px-4 py-2 border rounded-lg"
          value={filters.searchTerm || ''}
          onChange={(e) => onFilterChange({ ...filters, searchTerm: e.target.value })}
        />
        <select
          className="px-4 py-2 border rounded-lg"
          value={filters.category || ''}
          onChange={(e) => onFilterChange({ 
            ...filters, 
            category: e.target.value as ProductCategory || undefined 
          })}
        >
          <option value="">All Categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};