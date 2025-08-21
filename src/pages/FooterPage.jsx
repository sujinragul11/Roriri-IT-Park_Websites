import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Factory, Users, Calendar, MapPin, Clock, ArrowRight, Phone, Mail, Globe, Star, Home, Facebook, Twitter, Instagram, Linkedin, Youtube, FileText, Code, ArrowLeft, Github } from 'lucide-react';

// Scroll to top utility function
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

// Custom Link component that scrolls to top
const ScrollToTopLink = ({ to, children, ...props }) => {
  const handleClick = () => {
    scrollToTop();
  };

  return (
    <Link to={to} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
};

const FooterPage = () => {
  const currentYear = new Date().getFullYear();
  const phoneNumber = "(+91) 7338941579";
  const location = useLocation();
  
  const businesses = [
    { name: 'Nexgen IT Academy', href: '/itacademy' },
    { name: 'Rithish Farms', href: '/rithishfarms' },
    { name: 'Roshan Tiles', href: '/roshantiles' },
    { name: 'Industrial Visits', href: '/industrialvisits' },
    { name: 'Roririsoft', href: '/roririsoft' },
  ];

  const companyLinks = [
    { name: 'E-Brochure', href: '/e-brochure' },
    { name: 'Careers', href: '/careers' },
    { name: 'Internship', href: '/internship' },
    { name: 'Products', href: '/products' },
    { name: 'Services', href: '/services' },
  ];

  const serviceLinks = [
    { name: 'ERP Solutions', href: '/erp-solutions' },
    { name: 'Web Development', href: '/web-development' },
    { name: 'Mobile App Development', href: '/mobile-app-development' },
    { name: 'Digital Marketing', href: '/digital-marketing' },
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/share/1AwRCwxgMT/', label: 'Facebook' },
    { icon: Youtube, href: 'http://www.youtube.com/@Roriri_soft', label: 'Youtube' },
    { icon: Instagram, href: 'https://www.instagram.com/roriri_it_park/', label: 'Instagram' },
    { icon: Linkedin, href: 'https://www.linkedin.com/company/roriri-software-solutions-pvt-ltd/', label: 'LinkedIn' },
  ];

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
            <ScrollToTopLink
              to="/"
              className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200 font-medium"
            >
              <Home className="h-5 w-5" />
              <span>Home</span>
            </ScrollToTopLink>
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
                <ScrollToTopLink
                  to="/"
                  className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors"
                >
                  <ArrowLeft className="h-4 w-4" />
                  <span>Home</span>
                </ScrollToTopLink>
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

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <ScrollToTopLink to="/" className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">R</span>
                </div>
                <div>
                  <div className="text-xl font-bold">RoririItPark</div>
                  <div className="text-sm text-gray-400">Where Intelligence meets Innovation</div>
                </div>
              </ScrollToTopLink>
              <p className="text-gray-400 text-sm leading-relaxed">
                Your one-stop destination for IT training, organic farming experiences, 
                premium tiles, industrial visits, and software solutions.
              </p>
            </div>

            {/* Our Businesses */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Our Organizations</h3>
              <ul className="space-y-2">
                {businesses.map((business) => (
                  <li key={business.name}>
                    <ScrollToTopLink
                      to={business.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {business.name}
                    </ScrollToTopLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                {serviceLinks.map((service) => (
                  <li key={service.name}>
                    <ScrollToTopLink
                      to={service.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {service.name}
                    </ScrollToTopLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3 text-sm text-gray-400">
                  <Phone className="h-4 w-4 flex-shrink-0 mt-1" />
                  <span>{phoneNumber}</span>
                </div>
                <div className="flex items-start space-x-3 text-sm text-gray-400">
                  <Mail className="h-4 w-4 flex-shrink-0 mt-1" />
                  <span>contact@roririsoft.com</span>
                </div>
                <div className="flex items-start space-x-3 text-sm text-gray-400">
                  <MapPin className="h-4 w-4 flex-shrink-0 mt-1" />
                  <span>
                    RORIRI IT PARK,<br />
                    NALLANATHAPURAM,<br />
                    KALAKAD
                  </span>
                </div>
              </div>
              <div className="mt-4">
                <h4 className="text-sm font-semibold mb-2">Follow Us:</h4>
                <div className="flex space-x-2">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors duration-200"
                      aria-label={social.label}
                    >
                      <social.icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
              <p className="text-sm text-gray-400">
                © {currentYear} Roriri. All rights reserved.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 mt-4 sm:mt-0">
              <div className="flex space-x-6">
                <ScrollToTopLink to="/privacy-policy" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">
                  Privacy Policy
                </ScrollToTopLink>
                <ScrollToTopLink to="/terms-of-service" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">
                  Terms Of Service
                </ScrollToTopLink>
                <ScrollToTopLink to="/refund-policy" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">
                  Refund Policy
                </ScrollToTopLink>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FooterPage;