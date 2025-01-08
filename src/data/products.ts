import { Product } from '../types/products';

export const products: Product[] = [
  {
    id: 'gus',
    name: 'Gfiex Smart Outlet',
    codename: 'Gus',
    description: 'Our flagship intelligent power outlet with advanced GFCI/AFCI protection and comprehensive monitoring capabilities',
    features: [
      'Advanced GFCI/AFCI Protection',
      'Real-time power monitoring',
      'WiFi connectivity',
      'Mesh network compatibility',
      'Voice assistant integration',
      'Energy usage analytics'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80',
    category: 'outlet',
    price: '$79.99',
    specs: {
      'Voltage Rating': '120V AC',
      'Maximum Load': '15A',
      'Wireless': 'WiFi 6, Bluetooth 5.0',
      'Safety': 'UL Listed'
    }
  },
  {
    id: 'spot',
    name: 'Spot Smart Faceplate',
    codename: 'Spot',
    description: 'Transform your Gus outlet with advanced monitoring capabilities through our modular faceplate system',
    features: [
      'Air quality monitoring',
      'Smoke detection',
      'HD security camera',
      'Motion sensing',
      'Built-in speaker',
      'Ambient light sensor'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1596207891316-23851be3cc20?auto=format&fit=crop&q=80&w=800',
    category: 'faceplate',
    price: '$49.99'
  },
  {
    id: 'toby',
    name: 'Smart Switch Pro',
    codename: 'Toby',
    description: 'Revolutionary smart switch with gesture control and advanced automation capabilities',
    features: [
      'Gesture control',
      'Customizable LED indicators',
      'Scene programming',
      'Energy monitoring',
      'Voice control',
      'Scheduled operations'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1557313501-341d9d6fd40c?auto=format&fit=crop&q=80&w=800',
    category: 'switch',
    price: '$59.99'
  },
  {
    id: 'nanook',
    name: 'Smart Panel Hub',
    codename: 'Nanook',
    description: 'Centralized power management system for complete home electrical control',
    features: [
      'Circuit-level monitoring',
      'Remote breaker control',
      'Power usage analytics',
      'Surge protection',
      'Mobile notifications',
      'Emergency shutdown'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80',
    category: 'panel',
    price: '$299.99'
  }
];