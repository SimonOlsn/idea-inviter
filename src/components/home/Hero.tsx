import React from 'react';
import { Shield, Wifi, Home } from 'lucide-react';
import { FeatureCard } from './FeatureCard';

export const Hero: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            The Future of Smart Electrical Infrastructure
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-blue-100 max-w-3xl mx-auto">
            Transform your space with intelligent power solutions that protect, connect, and innovate.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <FeatureCard
              icon={Shield}
              title="Advanced Protection"
              description="State-of-the-art GFCI/AFCI safety features keep your property secure"
            />
            <FeatureCard
              icon={Wifi}
              title="Smart Connectivity"
              description="Seamless mesh network for complete device integration"
            />
            <FeatureCard
              icon={Home}
              title="Complete Solution"
              description="Comprehensive suite of smart electrical products for your entire space"
            />
          </div>
        </div>
      </div>
    </div>
  );
};