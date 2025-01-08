import React from 'react';
import { Navigate, Link } from 'react-router-dom';
import { LoginForm } from '../components/auth/LoginForm';
import { useAuthStore } from '../store/authStore';
import { Zap, ArrowLeft } from 'lucide-react';

export const LoginPage: React.FC = () => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <Link 
        to="/" 
        className="absolute top-8 left-8 flex items-center text-gray-600 hover:text-gray-900"
      >
        <ArrowLeft className="h-5 w-5 mr-2" />
        Back to Home
      </Link>

      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <Zap className="h-12 w-12 text-blue-600" />
        </div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Sign in to Gfiex Dashboard
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};