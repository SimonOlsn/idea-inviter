import React from 'react';
import { Zap, Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center">
              <Zap className="h-8 w-8 text-blue-400" />
              <span className="ml-2 text-2xl font-bold">Gfiex</span>
            </div>
            <p className="mt-4 text-gray-400">
              Revolutionizing electrical infrastructure with smart, safe, and connected solutions.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Gus Smart Outlet</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Spot Faceplate</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Toby Smart Switch</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Nanook Panel Hub</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Technology</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Patents</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Careers</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-blue-400 mr-2" />
                <a href="mailto:info@gfiex.com" className="text-gray-400 hover:text-white">
                  info@gfiex.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-blue-400 mr-2" />
                <a href="tel:+1-888-GFIEX" className="text-gray-400 hover:text-white">
                  1-888-GFIEX
                </a>
              </li>
              <li className="flex items-center">
                <MapPin className="h-5 w-5 text-blue-400 mr-2" />
                <span className="text-gray-400">
                  Silicon Valley, CA
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Gfiex. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};