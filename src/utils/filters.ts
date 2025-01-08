import { Product, ProductFilter } from '../types/products';

export const filterProducts = (products: Product[], filters: ProductFilter): Product[] => {
  return products.filter(product => {
    const matchesCategory = !filters.category || product.category === filters.category;
    const matchesSearch = !filters.searchTerm || 
      product.name.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(filters.searchTerm.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });
};