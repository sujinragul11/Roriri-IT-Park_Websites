import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Home, ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  
  // Check if we're not on the home page to show back to home button
  const isNotHomePage = location.pathname !== '/' && location.pathname !== '/home';

  const businesses = [
    { name: 'Nexgen IT Academy', href: '/nexgen' },
    { name: 'Rithish Farms', href: '/rithishfarms' },
    { name: 'Roshan Tiles', href: '/roshantiles' },
    { name: 'Industrial Visits', href: '/industrial-visits' },
    { name: 'Roririsoft', href: '/roririsoft' },
  ];

  const serviceLinks = [
    { name: 'ERP Solutions', href: '/erp-solutions' },
    { name: 'Web Development', href: '/web-development' },
    { name: 'Mobile App Development', href: '/mobile-app-development' },
    { name: 'Digital Marketing', href: '/digital-marketing' },
    { name: 'IT Training', href: '/it-training' },
  ];

  const policyLinks = [
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms of Service', href: '/terms-of-service' },
    { name: 'Refund Policy', href: '/refund-policy' },
    { name: 'Cookie Policy', href: '/cookie-policy' },
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/roririsoft', label: 'Facebook' },
    { icon: Twitter, href: 'https://twitter.com/roririsoft', label: 'Twitter' },
    { icon: Instagram, href: 'https://www.instagram.com/roririsoft', label: 'Instagram' },
    { icon: Linkedin, href: 'https://www.linkedin.com/company/roririsoft', label: 'LinkedIn' },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">R</span>
              </div>
              <div>
                <div className="text-xl font-bold">RoririItPark</div>
                <div className="text-sm text-gray-400">Where Intelligence meets Innovation</div>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your one-stop destination for IT training, organic farming experiences, 
              premium tiles, industrial visits, and software solutions.
            </p>
            <div className="pt-2">
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

          {/* Our Businesses */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Businesses</h3>
            <ul className="space-y-2">
              {businesses.map((business) => (
                <li key={business.name}>
                  <Link
                    to={business.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {business.name}
                  </Link>
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
                  <Link
                    to={service.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {service.name}
                  </Link>
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
                <span>(+91) 7338941579</span>
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
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
            <p className="text-sm text-gray-400">
              © {currentYear} Roriri. All rights reserved.
            </p>
            <p className="text-xs text-gray-500">
             
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 mt-4 sm:mt-0">
            {/* Back to Home Button - Only show when not on home page */}
            {isNotHomePage && (
              <Link 
                to="/" 
                className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200 text-sm font-medium"
              >
                <Home className="h-4 w-4" />
                <span>	𝐇𝐨𝐦𝐞 </span>
              </Link>
            )}
            <div className="flex space-x-6">
              {policyLinks.map((policy) => (
                <Link 
                  key={policy.name}
                  to={policy.href} 
                  className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                >
                  {policy.name}
                </Link>
              ))}
              <button 
                onClick={scrollToTop}
                className="text-sm text-gray-400 hover:text-white transition-colors duration-200 flex items-center"
              >
                <ArrowUp className="h-4 w-4 mr-1" />
                Go To Top
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;