// src/components/PolicyLayout.js
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

const PolicyLayout = ({ title, children }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <Link 
          to="/" 
          className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200"
        >
          <ChevronLeft className="h-5 w-5" />
          Back to Home
        </Link>
      </div>
      
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="bg-gray-900 text-white px-6 py-4">
          <h1 className="text-2xl font-bold">{title}</h1>
        </div>
        
        <div className="p-6 prose prose-blue max-w-none">
          {children}
        </div>
      </div>
    </div>
  );
};

export default PolicyLayout;