import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthStore } from '../../store/authStore';

const NavLink: React.FC<{ to: string; children: React.ReactNode }> = ({ 
  to, 
  children 
}) => (
  <Link 
    to={to} 
    className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
  >
    {children}
  </Link>
);

export const Navigation: React.FC = () => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  return (
    <nav className="hidden md:flex space-x-8">
      <NavLink to="/products">Products</NavLink>
      <NavLink to="/features">Features</NavLink>
      <NavLink to="/team">Team</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      {isAuthenticated ? (
        <Link 
          to="/dashboard" 
          className="text-blue-600 hover:text-blue-700 transition-colors duration-200"
        >
          Dashboard
        </Link>
      ) : (
        <Link 
          to="/login" 
          className="text-blue-600 hover:text-blue-700 transition-colors duration-200"
        >
          Login
        </Link>
      )}
    </nav>
  );
};