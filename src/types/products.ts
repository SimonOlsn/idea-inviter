export interface Product {
  id: string;
  name: string;
  codename: string;
  description: string;
  features: string[];
  imageUrl: string;
  category: 'outlet' | 'switch' | 'doorbell' | 'panel' | 'faceplate';
  price?: string;
  specs?: {
    [key: string]: string;
  };
}

export type ProductCategory = Product['category'];

export interface ProductFilter {
  category?: ProductCategory;
  searchTerm?: string;
}