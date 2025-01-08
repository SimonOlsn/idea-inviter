import React from 'react';
import { Shield, Wifi, Home } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            The Future of Smart Electrical Infrastructure
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-blue-100">
            Transform your space with intelligent power solutions that protect, connect, and innovate.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="flex flex-col items-center">
              <Shield className="h-12 w-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Advanced Protection</h3>
              <p className="text-blue-100">GFCI/AFCI safety features keep your property secure</p>
            </div>
            <div className="flex flex-col items-center">
              <Wifi className="h-12 w-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Smart Connectivity</h3>
              <p className="text-blue-100">Mesh network for seamless device integration</p>
            </div>
            <div className="flex flex-col items-center">
              <Home className="h-12 w-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Complete Solution</h3>
              <p className="text-blue-100">Comprehensive suite of smart electrical products</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};