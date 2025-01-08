import { useState, useMemo } from 'react';
import { Product, ProductFilter } from '../types/products';
import { filterProducts } from '../utils/filters';
import { products as initialProducts } from '../data/products';

export const useProducts = () => {
  const [filters, setFilters] = useState<ProductFilter>({});
  
  const filteredProducts = useMemo(() => 
    filterProducts(initialProducts, filters),
    [filters]
  );

  return {
    products: filteredProducts,
    filters,
    setFilters,
  };
};