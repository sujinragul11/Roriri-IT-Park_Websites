// src/pages/RoshanTiles.js
import { useState } from 'react';
import { Link } from 'react-scroll';
import { Helmet } from 'react-helmet-async';
import { Home } from 'lucide-react';
import Logo from '../assets/ROSHAN TILES LOGO (1).png'; // Make sure this path is correct

const RoshanTiles = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('all');

  // Sample product data
  const products = [
    {
      id: 1,
      name: 'Marble Effect Tiles',
      category: 'floor',
      description: 'Premium marble look tiles for elegant flooring',
      price: '$3.50/sq ft',
      image: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    },
    {
      id: 2,
      name: 'Wooden Look Tiles',
      category: 'floor',
      description: 'Durable wooden aesthetic tiles for any space',
      price: '$4.20/sq ft',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    },
    {
      id: 3,
      name: 'Subway Wall Tiles',
      category: 'wall',
      description: 'Classic subway tiles for kitchen and bathrooms',
      price: '$2.80/sq ft',
      image: 'https://images.unsplash.com/photo-1600566752228-1d0f5a0b5a3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    },
    {
      id: 4,
      name: 'Mosaic Tiles',
      category: 'decor',
      description: 'Artistic mosaic patterns for feature walls',
      price: '$5.50/sq ft',
      image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    },
    {
      id: 5,
      name: 'Outdoor Porcelain Tiles',
      category: 'outdoor',
      description: 'Weather-resistant tiles for patios and gardens',
      price: '$4.80/sq ft',
      image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    },
    {
      id: 6,
      name: 'Bathroom Wall Tiles',
      category: 'wall',
      description: 'Waterproof tiles perfect for bathrooms',
      price: '$3.20/sq ft',
      image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    }
  ];

  // Filter products based on active tab
  const filteredProducts = activeTab === 'all' 
    ? products 
    : products.filter(product => product.category === activeTab);

  // Nav items
  const navItems = [
    { name: 'Home', to: 'home' },
    { name: 'Products', to: 'products' },
    { name: 'Manufacturing', to: 'manufacturing' },
    { name: 'About', to: 'about' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <>
      <Helmet>
        <title>Roshan Tiles - Premium Quality Tiles for Every Space</title>
        <meta name="description" content="Manufacturing and selling high-quality tiles for residential and commercial spaces since 1995. Explore our wide range of floor, wall, and decorative tiles." />
      </Helmet>
      
      <div className="font-sans">
        {/* Header */}
        <header className="bg-white shadow-md fixed w-full z-10">
          <div className="container mx-auto px-4 py-3 flex justify-between items-center">
            <div className="flex items-center">
              <img 
                src={Logo} 
                alt="Roshan Tiles Logo" 
                className="h-12" // Adjust height as needed
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:block">
              <ul className="flex space-x-8">
                {navItems.map((item) => (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      smooth={true}
                      duration={500}
                      className="text-gray-700 hover:text-orange-500 cursor-pointer font-medium"
                      activeClass="text-orange-500"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Back to Home Button - Top Right Corner */}
            <div className="flex items-center space-x-4">
              <a
                href="/"
                className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200 font-medium"
              >
                <Home className="h-5 w-5" />
                <span className="hidden sm:inline">	𝐇𝐨𝐦𝐞 </span>
              </a>
              
              {/* Mobile Menu Button */}
              <button
                className="md:hidden focus:outline-none"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <svg
                  className="w-6 h-6 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-white py-2 px-4 shadow-lg">
              <ul className="flex flex-col space-y-3">
                {navItems.map((item) => (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      smooth={true}
                      duration={500}
                      className="block py-2 text-gray-700 hover:text-orange-500 cursor-pointer"
                      activeClass="text-orange-500"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </header>

        {/* Hero Section */}
        <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Premium Quality Tiles</h1>
              <p className="text-xl mb-8">Manufacturing and selling high-quality tiles for residential and commercial spaces since 1995.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="products"
                  smooth={true}
                  duration={500}
                  className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg text-center transition duration-300"
                >
                  View Products
                </Link>
                <Link 
                  to="contact"
                  smooth={true}
                  duration={500}
                  className="bg-transparent hover:bg-white hover:text-blue-900 border-2 border-white text-white font-bold py-3 px-6 rounded-lg text-center transition duration-300"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section id="products" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">Our Tile Collections</h2>
            
            {/* Category Tabs */}
            <div className="flex justify-center mb-8 flex-wrap gap-2">
              <button
                onClick={() => setActiveTab('all')}
                className={`px-4 py-2 rounded-lg ${activeTab === 'all' ? 'bg-orange-500 text-white' : 'bg-white text-gray-700'}`}
              >
                All Products
              </button>
              <button
                onClick={() => setActiveTab('floor')}
                className={`px-4 py-2 rounded-lg ${activeTab === 'floor' ? 'bg-orange-500 text-white' : 'bg-white text-gray-700'}`}
              >
                Floor Tiles
              </button>
              <button
                onClick={() => setActiveTab('wall')}
                className={`px-4 py-2 rounded-lg ${activeTab === 'wall' ? 'bg-orange-500 text-white' : 'bg-white text-gray-700'}`}
              >
                Wall Tiles
              </button>
              <button
                onClick={() => setActiveTab('outdoor')}
                className={`px-4 py-2 rounded-lg ${activeTab === 'outdoor' ? 'bg-orange-500 text-white' : 'bg-white text-gray-700'}`}
              >
                Outdoor Tiles
              </button>
              <button
                onClick={() => setActiveTab('decor')}
                className={`px-4 py-2 rounded-lg ${activeTab === 'decor' ? 'bg-orange-500 text-white' : 'bg-white text-gray-700'}`}
              >
                Decorative Tiles
              </button>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-blue-900">{product.name}</h3>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-orange-500">{product.price}</span>
                      <button className="bg-blue-900 hover:bg-blue-800 text-white px-4 py-2 rounded-lg transition duration-300">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Manufacturing Section */}
        <section id="manufacturing" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">Our Manufacturing Process</h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-blue-900">State-of-the-Art Production</h3>
                <p className="text-gray-700 mb-6">
                  At Roshan Tiles, we combine traditional craftsmanship with modern technology to produce tiles of exceptional quality. 
                  Our manufacturing facility spans over 50,000 square feet and is equipped with the latest Italian machinery.
                </p>
                <p className="text-gray-700 mb-6">
                  We source only the finest raw materials and subject every batch to rigorous quality control checks at multiple 
                  stages of production.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-orange-500 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Fully automated production line</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-orange-500 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Eco-friendly manufacturing processes</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-orange-500 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>ISO 9001 certified quality management</span>
                  </li>
                </ul>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1581093450021-4a7360e9a3e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                  alt="Tile manufacturing" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">About Roshan Tiles</h2>
            
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-gray-700 mb-6">
                Founded in 1995, Roshan Tiles has grown from a small workshop to one of the region's leading tile manufacturers. 
                Our commitment to quality, innovation, and customer satisfaction has been the cornerstone of our success.
              </p>
              <p className="text-gray-700 mb-6">
                Today, we supply tiles to over 500 retailers across the country and have completed projects for major residential 
                and commercial developments. Our team of 150+ skilled professionals ensures that every tile meets our exacting standards.
              </p>
              <div className="grid sm:grid-cols-3 gap-8 mt-12">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="text-4xl font-bold text-orange-500 mb-2">25+</div>
                  <div className="text-gray-700">Years in Business</div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="text-4xl font-bold text-orange-500 mb-2">500+</div>
                  <div className="text-gray-700">Retail Partners</div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="text-4xl font-bold text-orange-500 mb-2">10M+</div>
                  <div className="text-gray-700">Tiles Produced Annually</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">Contact Us</h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-blue-900">Get in Touch</h3>
                <p className="text-gray-700 mb-6">
                  Have questions about our products or manufacturing capabilities? Our team is ready to assist you.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-orange-500 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <h4 className="font-bold text-gray-800">Factory Address</h4>
                      <p className="text-gray-600">123 Industrial Area, Tile City, TC 12345</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-orange-500 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div>
                      <h4 className="font-bold text-gray-800">Phone</h4>
                      <p className="text-gray-600">+1 (123) 456-7890 (Sales)</p>
                      <p className="text-gray-600">+1 (123) 456-7891 (Support)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-orange-500 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <h4 className="font-bold text-gray-800">Email</h4>
                      <p className="text-gray-600">sales@roshantiles.com</p>
                      <p className="text-gray-600">info@roshantiles.com</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <form className="bg-gray-50 p-6 rounded-lg shadow-md">
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                      placeholder="Your email"
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subject</label>
                    <input 
                      type="text" 
                      id="subject" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                      placeholder="Subject"
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                    <textarea 
                      id="message" 
                      rows="4" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                      placeholder="Your message"
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default RoshanTiles;