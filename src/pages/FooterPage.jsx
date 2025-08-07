import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, 
         Twitter, Instagram, Linkedin, Home } 
         from 'lucide-react';

const FooterPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with Back to Home Button */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">R</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Footer Page</h1>
                <p className="text-sm text-gray-500">Footer Component Information</p>
              </div>
            </div>
            
            {/* Back to Home Button - Top Right Corner */}
            <Link
              to="/"
              className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200 font-medium"
            >
              <Home className="h-5 w-5" />
              <span>	𝐇𝐨𝐦𝐞 </span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Footer Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Footer Component</h2>
              <p className="text-lg text-gray-600 mb-6">
                This page displays information about the footer component used throughout the Roriri IT Park website.
              </p>
            </div>

            {/* File Information */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center space-x-3 mb-4">
                <FileText className="h-6 w-6 text-blue-600" />
                <h3 className="text-xl font-semibold text-gray-900">File Details</h3>
              </div>
              <div className="space-y-3">
                <div>
                  <span className="font-medium text-gray-700">File Path:</span>
                  <code className="block mt-1 px-3 py-2 bg-gray-100 rounded text-sm font-mono text-gray-800">
                    src/components/Layout/Footer.jsx
                  </code>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Component Name:</span>
                  <p className="text-gray-600">Footer</p>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Export Type:</span>
                  <p className="text-gray-600">Default Export</p>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Footer Features</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center h-5 w-5 rounded-full bg-green-100 text-green-600">
                      <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 8 8">
                        <circle cx="4" cy="4" r="3" />
                      </svg>
                    </div>
                  </div>
                  <span className="ml-3 text-gray-600">Responsive design for all devices</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center h-5 w-5 rounded-full bg-green-100 text-green-600">
                      <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 8 8">
                        <circle cx="4" cy="4" r="3" />
                      </svg>
                    </div>
                  </div>
                  <span className="ml-3 text-gray-600">Conditional back to home button</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center h-5 w-5 rounded-full bg-green-100 text-green-600">
                      <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 8 8">
                        <circle cx="4" cy="4" r="3" />
                      </svg>
                    </div>
                  </div>
                  <span className="ml-3 text-gray-600">Social media links</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center h-5 w-5 rounded-full bg-green-100 text-green-600">
                      <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 8 8">
                        <circle cx="4" cy="4" r="3" />
                      </svg>
                    </div>
                  </div>
                  <span className="ml-3 text-gray-600">Contact information</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center h-5 w-5 rounded-full bg-green-100 text-green-600">
                      <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 8 8">
                        <circle cx="4" cy="4" r="3" />
                      </svg>
                    </div>
                  </div>
                  <span className="ml-3 text-gray-600">Business links and services</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Code Preview */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Code className="h-6 w-6 text-purple-600" />
                <h3 className="text-xl font-semibold text-gray-900">Component Structure</h3>
              </div>
              <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                <pre className="text-sm text-gray-300">
{`import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, 
         Twitter, Instagram, Linkedin, Home } 
         from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  
  // Check if we're not on the home page
  const isNotHomePage = location.pathname !== '/' && 
                       location.pathname !== '/home';

  return (
    <footer className="bg-gray-900 text-white">
      {/* Footer content */}
      {isNotHomePage && (
        <Link to="/" className="back-to-home-btn">
          <Home className="h-4 w-4" />
          <span></span>
        </Link>
      )}
    </footer>
  );
};

export default Footer;`}
                </pre>
              </div>
            </div>

            {/* Usage Information */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Usage</h3>
              <div className="space-y-3">
                <div>
                  <span className="font-medium text-gray-700">Import:</span>
                  <code className="block mt-1 px-3 py-2 bg-gray-100 rounded text-sm font-mono text-gray-800">
                    import Footer from './components/Layout/Footer';
                  </code>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Usage:</span>
                  <code className="block mt-1 px-3 py-2 bg-gray-100 rounded text-sm font-mono text-gray-800">
                    &lt;Footer /&gt;
                  </code>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Conditional Rendering:</span>
                  <p className="text-gray-600 mt-1">
                    The footer automatically shows/hides the "Back to Home" button based on the current route.
                  </p>
                </div>
              </div>
            </div>

            {/* Links */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Quick Links</h3>
              <div className="space-y-3">
                <Link
                  to="/"
                  className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors"
                >
                  <ArrowLeft className="h-4 w-4" />
                  <span>	𝐇𝐨𝐦𝐞 </span>
                </Link>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors"
                >
                  <Github className="h-4 w-4" />
                  <span>View on GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FooterPage; 