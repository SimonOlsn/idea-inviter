import React, { useState } from 'react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { Shield, Zap, LineChart, ArrowRight } from 'lucide-react';
import { Product } from '../types/products';
import { ProductModal } from '../components/products/ProductModal';
import { products } from '../data/products';

export const ProductsPage: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Transform Your Home's Electrical Infrastructure
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Experience the future of electrical safety and smart home technology with our innovative product line.
              </p>
              <div className="flex space-x-4">
                <button 
                  onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  View Products
                </button>
                <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                  Watch Demo
                </button>
              </div>
            </div>
            <div className="hidden lg:block">
              <img 
                src="https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=1200"
                alt="Smart Home"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Key Benefits */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Why Choose Gfiex?</h2>
            <p className="mt-4 text-xl text-gray-600">Industry-leading technology meets unparalleled safety</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="inline-block p-4 bg-blue-100 rounded-full mb-4">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Advanced Protection</h3>
              <p className="text-gray-600">State-of-the-art GFCI/AFCI technology keeping your home safe</p>
            </div>
            <div className="text-center p-6">
              <div className="inline-block p-4 bg-blue-100 rounded-full mb-4">
                <Zap className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Smart Integration</h3>
              <p className="text-gray-600">Seamless connectivity with your existing smart home ecosystem</p>
            </div>
            <div className="text-center p-6">
              <div className="inline-block p-4 bg-blue-100 rounded-full mb-4">
                <LineChart className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Energy Insights</h3>
              <p className="text-gray-600">Real-time monitoring and analytics for optimal power usage</p>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div id="products" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Our Product Line</h2>
            <p className="mt-4 text-xl text-gray-600">Complete smart electrical solutions for your home</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <div 
                key={product.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all cursor-pointer"
                onClick={() => setSelectedProduct(product)}
              >
                <div className="h-48 relative">
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
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-blue-600">{product.price}</span>
                    <button className="text-blue-600 hover:text-blue-700 flex items-center">
                      Learn more <ArrowRight className="ml-2 h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to upgrade your home?</h2>
          <p className="text-xl text-blue-200 mb-8">
            Join thousands of homeowners who trust Gfiex for their electrical safety
          </p>
          <button className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors">
            Get Started Today
          </button>
        </div>
      </div>

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
      
      <Footer />
    </div>
  );
};