import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Home, ArrowLeft } from 'lucide-react';

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>Page Not Found - RoririItPark</title>
        <meta name="description" content="The page you're looking for doesn't exist." />
      </Helmet>

      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full text-center">
          <div className="space-y-8">
            {/* 404 Illustration */}
            <div className="space-y-4">
              <h1 className="text-9xl font-bold text-blue-600">404</h1>
              <h2 className="text-2xl font-bold text-gray-900">Page Not Found</h2>
              <p className="text-gray-600">
                Sorry, we couldn't find the page you're looking for. 
                It might have been moved, deleted, or you entered the wrong URL.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <Link
                to="/"
                className="inline-flex items-center justify-center w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
              >
                <Home className="h-5 w-5 mr-2" />
                Go to Homepage
              </Link>
              
              <button
                onClick={() => window.history.back()}
                className="inline-flex items-center justify-center w-full border-2 border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
              >
                <ArrowLeft className="h-5 w-5 mr-2" />
                Go back
              </button>
            </div>

            {/* Quick Links */}
            <div className="pt-8 border-t border-gray-200">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Or explore our Organizations:
              </h3>
              <div className="grid grid-cols-1 gap-2">
                <Link
                  to="/nexgen"
                  className="text-blue-600 hover:text-blue-700 transition-colors duration-200"
                >
                  Nexgen IT Academy
                </Link>
                <Link
                  to="/rithishfarms"
                  className="text-blue-600 hover:text-blue-700 transition-colors duration-200"
                >
                  Rithish Farms
                </Link>
                <Link
                  to="/roshantiles"
                  className="text-blue-600 hover:text-blue-700 transition-colors duration-200"
                >
                  Roshan Tiles
                </Link>
                <Link
                  to="/industrial-visits"
                  className="text-blue-600 hover:text-blue-700 transition-colors duration-200"
                >
                  Industrial Visits
                </Link>
                <Link
                  to="/roririsoft"
                  className="text-blue-600 hover:text-blue-700 transition-colors duration-200"
                >
                  Roririsoft
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;