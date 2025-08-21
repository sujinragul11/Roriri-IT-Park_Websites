  import React from 'react';
  import { Link, useLocation } from 'react-router-dom';
  import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Home, ArrowUp, Youtube } from 'lucide-react';

  const Footer = () => {
    const currentYear = new Date().getFullYear();
    const location = useLocation();
    
    // Check if we're not on the home page to show back to home button
    const isNotHomePage = location.pathname !== '/' && location.pathname !== '/home';

    const businesses = [
      { name: 'Nexgen IT Academy', href: '/ITAcademy' },
      { name: 'Rithish Farms', href: '/rithishfarms' },
      { name: 'Roshan Tiles', href: '/roshantiles' },
      { name: 'Industrial Visits', href: '/IndustrialVisits' },
      { name: 'Roririsoft', href: '/roririsoft' },
    ];

    const serviceLinks = [
      { name: 'ERP Solutions', href: '/erp-solutions' },
      { name: 'Web Development', href: '/web-development' },
      { name: 'Mobile App Development', href: '/mobile-app-development' },
      { name: 'Internship', href: '/digital-marketing' },
      { name: 'IT Training', href: '/it-training' },
    ];

    const policyLinks = [
      { 
        name: 'Privacy Policy', 
        href: '/privacy-policy',
        description: 'Learn how we collect and protect your data'
      },
      { 
        name: 'Terms of Service', 
        href: '/terms-of-service',
        description: 'Understand our service conditions and agreements'
      },
      { 
        name: 'Refund Policy', 
        href: '/refund-policy',
        description: 'Our policies regarding returns and refunds'
      },
      { 
        name: 'Cookie Policy', 
        href: '/cookie-policy',
        description: 'Information about our use of cookies'
      },
    ];

    const socialLinks = [
      { icon: Facebook, href: 'https://www.facebook.com/share/1AwRCwxgMT/', label: 'Facebook' },
      { icon: Youtube, href: 'http://www.youtube.com/@Roriri_soft', label: 'Youtube' },
      { icon: Instagram, href: 'https://www.instagram.com/roriri_it_park/', label: 'Instagram' },
      { icon: Linkedin, href: 'https://www.linkedin.com/company/roriri-software-solutions-pvt-ltd/', label: 'LinkedIn' },
    ];

    const contactInfo = [
      {
        icon: Phone,
        content: '(+91) 7338941579',
        href: 'tel:+917338941579'
      },
      {
        icon: Mail,
        content: 'admin@roririsoft.com',
        href: 'mailto:admin@roririsoft.com'
      },
      {
        icon: MapPin,
        content: (
          <>
            RORIRI IT PARK,<br />
            NALLANATHAPURAM,<br />
            KALAKAD
          </>
        )
      }
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
              <h3 className="text-lg font-semibold mb-4">Our Organizations</h3>
              <ul className="space-y-2">
                {businesses.map((business) => (
                  <li key={business.name}>
                    <Link
                      to={business.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-sm flex items-start group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-200">
                        {business.name}
                      </span>
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
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-sm flex items-start group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-200">
                        {service.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <div className="space-y-3">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="flex items-start space-x-3 text-sm text-gray-400">
                    <contact.icon className="h-4 w-4 flex-shrink-0 mt-1" />
                    {contact.href ? (
                      <a href={contact.href} className="hover:text-white transition-colors">
                        {contact.content}
                      </a>
                    ) : (
                      <span>{contact.content}</span>
                    )}
                  </div>
                ))}
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
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 mt-4 sm:mt-0">
              {/* Back to Home Button - Only show when not on home page */}
              {isNotHomePage && (
                <Link 
                  to="/" 
                  className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200 text-sm font-medium"
                >
                  <Home className="h-4 w-4" />
                  <span>Back to Home</span>
                </Link>
              )}
              
              {/* Policies */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {policyLinks.map((policy) => (
                  <Link 
                    key={policy.name}
                    to={policy.href} 
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-200 flex flex-col"
                    title={policy.description}
                  >
                    <span>{policy.name}</span>
                    <span className="text-xs text-gray-500">{policy.description}</span>
                  </Link>
                ))}
              </div>
              
              {/* Scroll to Top */}
              
            </div>
          </div>
        </div>
      </footer>
    );
  };

  export default Footer;