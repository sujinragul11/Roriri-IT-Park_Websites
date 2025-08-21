// src/pages/RoshanTiles.js
import { useState } from 'react';
import { Link } from 'react-scroll';
import { Helmet } from 'react-helmet-async';
import { Home } from 'lucide-react';
import Logo from '../Assets/ROSHAN TILES LOGO (1).png';
import WorkerImage from '../Assets/Worker.jpg';
import LoadmanImage from '../Assets/Loadman.jpg';
import RNImage from '../Assets/RN.jpg';
import MachineImage from '../Assets/Mechine.jpg';
import RoomImage from '../Assets/Room.jpg';
import CloseImage from '../Assets/close.jpg';
import FaceImage from '../Assets/Face.jpg';
import CountImage from '../Assets/Count.jpg';

const RoshanTiles = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('all');

  // Product data showcasing your brick manufacturing excellence
  const products = [
    {
      id: 1,
      name: 'Classic Red Bricks',
      category: 'standard',
      description: 'Our signature bricks with perfect clay composition for superior strength and durability',
      price: '₹8 per brick (bulk discounts available)',
      image: WorkerImage,
      features: ['Weather-resistant', 'Low water absorption', 'Uniform shape']
    },
    {
      id: 2,
      name: 'Industrial Grade Bricks',
      category: 'special',
      description: 'Engineered for heavy-duty construction projects and industrial applications',
      price: '₹14 per brick',
      image: LoadmanImage,
      features: ['High compressive strength', 'Thermal resistant', 'Long lifespan']
    },
    {
      id: 3,
      name: 'Eco Bricks',
      category: 'eco',
      description: 'Sustainable bricks made with recycled materials and energy-efficient production',
      price: '₹12 per brick',
      image: RNImage,
      features: ['30% lower carbon footprint', 'LEED certified', 'Same strength as conventional']
    },
    {
      id: 4,
      name: 'Precision Pavers',
      category: 'premium',
      description: 'Architectural-grade bricks for stunning walkways, patios, and landscaping',
      price: '₹18 per brick',
      image: MachineImage,
      features: ['Colorfast', 'Slip-resistant', 'Designer finishes available']
    },
    {
      id: 5,
      name: 'Jumbo Construction Blocks',
      category: 'special',
      description: 'Oversized bricks that accelerate construction while maintaining quality',
      price: '₹22 per brick',
      image: RoomImage,
      features: ['30% faster construction', 'Reduced mortar needs', 'Excellent load-bearing']
    },
    {
      id: 6,
      name: 'Heritage Collection',
      category: 'premium',
      description: 'Artisanal bricks that combine traditional craftsmanship with modern quality control',
      price: '₹25 per brick',
      image: CloseImage,
      features: ['Hand-finishing available', 'Authentic textures', 'Historical color palette']
    }
  ];

  const filteredProducts = activeTab === 'all' 
    ? products 
    : products.filter(product => product.category === activeTab);

  const navItems = [
    { name: 'Home', to: 'home' },
    { name: 'Products', to: 'products' },
    { name: 'Our Process', to: 'process' },
    { name: 'Why Choose Us', to: 'why-us' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <>
      <Helmet>
        <title>Roshan Bricks | Premium Clay Brick Manufacturers Since 1995</title>
        <meta name="description" content="Family-owned brick manufacturer producing premium quality clay bricks using traditional techniques and modern technology. Serving builders and architects across the region." />
      </Helmet>
      
      <div className="font-sans bg-gray-50">
        {/* Header */}
        <header className="bg-white shadow-md fixed w-full z-10">
          <div className="container mx-auto px-4 py-3 flex justify-between items-center">
            <div className="flex items-center">
              <img 
                src={Logo} 
                alt="Roshan Bricks Logo" 
                className="h-16"
              />
            </div>

            <nav className="hidden md:block">
              <ul className="flex space-x-8">
                {navItems.map((item) => (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      smooth={true}
                      duration={500}
                      className="text-gray-700 hover:text-orange-600 cursor-pointer font-medium transition-colors"
                      activeClass="text-orange-600 border-b-2 border-orange-600"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="flex items-center space-x-4">
              <a
                href="/"
                className="flex items-center space-x-2 px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-lg transition-colors duration-200 font-medium shadow-md"
              >
                <Home className="h-5 w-5" />
                <span className="hidden sm:inline">Home</span>
              </a>
              
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

          {isMenuOpen && (
            <div className="md:hidden bg-white py-2 px-4 shadow-lg">
              <ul className="flex flex-col space-y-3">
                {navItems.map((item) => (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      smooth={true}
                      duration={500}
                      className="block py-2 text-gray-700 hover:text-orange-600 cursor-pointer transition-colors"
                      activeClass="text-orange-600 font-bold"
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
        <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-orange-800 to-orange-600 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">Building Dreams With Every Brick</h1>
              <p className="text-xl mb-8 opacity-90">Three generations of brick-making expertise poured into every product we create</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="products"
                  smooth={true}
                  duration={500}
                  className="bg-white hover:bg-gray-100 text-orange-700 font-bold py-3 px-6 rounded-lg text-center transition duration-300 shadow-lg cursor-pointer hover:cursor-pointer"
                >
                  Explore Our Bricks
                </Link>
                <Link 
                  to="contact"
                  smooth={true}
                  duration={500}
                  className="bg-transparent hover:bg-orange-700 border-2 border-white text-white font-bold py-3 px-6 rounded-lg text-center transition duration-300 cursor-pointer hover:cursor-pointer"
                >
                  Request Samples
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section id="products" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="text-orange-600 font-semibold">OUR PRODUCTS</span>
              <h2 className="text-3xl font-bold mt-2 text-gray-900">Bricks Built to Last Generations</h2>
              <p className="max-w-2xl mx-auto mt-4 text-gray-600">
                Each brick tells our story of craftsmanship, quality, and dedication to the building arts
              </p>
            </div>
            
            <div className="flex justify-center mb-8 flex-wrap gap-2">
              {['all', 'standard', 'special', 'eco', 'premium'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-full capitalize transition-colors ${activeTab === tab ? 'bg-orange-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                >
                  {tab === 'all' ? 'All Products' : tab.replace('-', ' ')}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <div key={product.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300 border border-gray-100">
                  <div className="h-64 overflow-hidden relative">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    {product.category === 'premium' && (
                      <span className="absolute top-3 right-3 bg-orange-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                        Premium
                      </span>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start">
                      <h3 className="text-xl font-bold text-gray-900">{product.name}</h3>
                      <span className="bg-orange-100 text-orange-800 text-xs font-medium px-2.5 py-0.5 rounded">
                        {product.category.toUpperCase()}
                      </span>
                    </div>
                    <p className="text-gray-600 my-3">{product.description}</p>
                    <div className="space-y-2 mb-4">
                      {product.features.map((feature, index) => (
                        <div key={index} className="flex items-center">
                          <svg className="w-4 h-4 mr-2 text-orange-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-between items-center mt-4">
                      <span className="font-bold text-orange-600">{product.price}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Manufacturing Process Section */}
        <section id="process" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="text-orange-600 font-semibold">OUR PROCESS</span>
              <h2 className="text-3xl font-bold mt-2 text-gray-900">Where Clay Becomes Legacy</h2>
              <p className="max-w-2xl mx-auto mt-4 text-gray-600">
                Our time-honored techniques ensure every brick meets our exacting standards
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">The Art & Science of Brickmaking</h3>
                <p className="text-gray-700 mb-6">
                  At Roshan Bricks, we've perfected our 7-step manufacturing process over three decades. 
                  It begins with selecting the finest local clay deposits, which we test for purity and 
                  composition before production begins.
                </p>
                
                <div className="space-y-6">
                  <div className="flex">
                    <div className="flex-shrink-0 mr-4">
                      <div className="flex items-center justify-center h-10 w-10 rounded-full bg-orange-100 text-orange-600 font-bold">
                        1
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">Clay Preparation</h4>
                      <p className="text-gray-600">
                        Our clay is aged for optimal plasticity, then precisely mixed with additives for strength and color consistency
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0 mr-4">
                      <div className="flex items-center justify-center h-10 w-10 rounded-full bg-orange-100 text-orange-600 font-bold">
                        2
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">Molding</h4>
                      <p className="text-gray-600">
                        Skilled craftsmen shape each brick using both modern extrusion methods and traditional hand-molding techniques
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0 mr-4">
                      <div className="flex items-center justify-center h-10 w-10 rounded-full bg-orange-100 text-orange-600 font-bold">
                        3
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">Drying</h4>
                      <p className="text-gray-600">
                        Computer-controlled drying chambers remove moisture gradually to prevent cracking and ensure uniform density
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="rounded-xl overflow-hidden shadow-xl">
                <img 
                  src={FaceImage} 
                  alt="Master brickmaker inspecting quality" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="mt-16 grid sm:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <div className="text-orange-600 mb-3">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="font-bold text-lg mb-2 text-gray-900">Quality Assurance</h3>
                <p className="text-gray-600">
                  Every production batch undergoes 12 quality checks before leaving our facility
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <div className="text-orange-600 mb-3">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-bold text-lg mb-2 text-gray-900">Fast Firing</h3>
                <p className="text-gray-600">
                  Our energy-efficient kilns reach optimal temperatures in half the industry standard time
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <div className="text-orange-600 mb-3">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="font-bold text-lg mb-2 text-gray-900">Secure Storage</h3>
                <p className="text-gray-600">
                  Climate-controlled warehouses protect finished bricks until delivery
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section id="why-us" className="py-16 bg-orange-600 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="font-semibold opacity-90">WHY CHOOSE US</span>
              <h2 className="text-3xl font-bold mt-2">The Roshan Bricks Difference</h2>
              <p className="max-w-2xl mx-auto mt-4 opacity-90">
                What sets our bricks apart is what goes into them - decades of expertise and uncompromising standards
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="rounded-xl overflow-hidden shadow-2xl">
                <img 
                  src={CountImage} 
                  alt="Brick quality inspection" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div>
                <div className="space-y-8">
                  <div className="flex">
                    <div className="flex-shrink-0 mr-4">
                      <div className="flex items-center justify-center h-12 w-12 rounded-full bg-white text-orange-600 font-bold text-xl">
                        01
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Generational Expertise</h3>
                      <p className="opacity-90">
                        Our family has been perfecting brick-making techniques since 1995, combining traditional knowledge with modern innovations
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0 mr-4">
                      <div className="flex items-center justify-center h-12 w-12 rounded-full bg-white text-orange-600 font-bold text-xl">
                        02
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Local Materials, Global Standards</h3>
                      <p className="opacity-90">
                        We source clay from sustainable local deposits but adhere to international quality benchmarks
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0 mr-4">
                      <div className="flex items-center justify-center h-12 w-12 rounded-full bg-white text-orange-600 font-bold text-xl">
                        03
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Consistency You Can Build On</h3>
                      <p className="opacity-90">
                        Our precision manufacturing ensures every brick meets exact dimensional tolerances for perfect alignment
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="text-orange-600 font-semibold">BUILDER TESTIMONIALS</span>
              <h2 className="text-3xl font-bold mt-2 text-gray-900">Trusted by Construction Professionals</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold mr-4">
                    AK
                  </div>
                  <div>
                    <h4 className="font-bold">Arun Kumar</h4>
                    <p className="text-sm text-gray-600">Kumar Builders</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "We've used Roshan Bricks for over 15 projects because of their consistent quality. Their bricks have perfect edges that make masonry work faster and cleaner."
                </p>
                <div className="flex mt-4 text-orange-500">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold mr-4">
                    PS
                  </div>
                  <div>
                    <h4 className="font-bold">Priya Shah</h4>
                    <p className="text-sm text-gray-600">GreenSpace Architects</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "The color consistency of Roshan's bricks is unmatched. For our luxury projects where aesthetics matter as much as structure, they're our first choice."
                </p>
                <div className="flex mt-4 text-orange-500">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold mr-4">
                    RM
                  </div>
                  <div>
                    <h4 className="font-bold">Rajesh Menon</h4>
                    <p className="text-sm text-gray-600">Heritage Restoration Co.</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "When restoring century-old buildings, we need bricks that match historical specifications. Roshan can custom produce bricks that blend seamlessly with original construction."
                </p>
                <div className="flex mt-4 text-orange-500">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="text-orange-600 font-semibold">GET IN TOUCH</span>
              <h2 className="text-3xl font-bold mt-2 text-gray-900">Let's Build Something Together</h2>
              <p className="max-w-2xl mx-auto mt-4 text-gray-600">
                Whether you need standard bricks or custom solutions, our team is ready to assist
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Our Brick Yard</h3>
                <p className="text-gray-700 mb-6">
                  Visit our manufacturing facility to see our process firsthand and select bricks for your project
                </p>
                
                <div className="space-y-6">
                  <div className="flex">
                    <div className="flex-shrink-0 mr-4 text-orange-600">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">Factory Address</h4>
                      <p className="text-gray-600">
                        RORIRI IT PARK, NALLANATHAPURAM,<br />
                        KALAKAD, TAMIL NADU - 627602
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0 mr-4 text-orange-600">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">Contact Numbers</h4>
                      <p className="text-gray-600">
                        Sales: (+91) 7338941579<br />
                        Office: (+91) 1234567890
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0 mr-4 text-orange-600">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">Email</h4>
                      <p className="text-gray-600">
                        sales@roshanbricks.com<br />
                        support@roshanbricks.com
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0 mr-4 text-orange-600">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">Working Hours</h4>
                      <p className="text-gray-600">
                        Monday - Saturday: 8:00 AM - 6:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <form className="bg-white p-8 rounded-xl shadow-md border border-gray-200">
                  <h3 className="text-xl font-bold mb-6 text-gray-900">Send Us a Message</h3>
                  
                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name *</label>
                      <input 
                        type="text" 
                        id="name" 
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-gray-700 font-medium mb-2">Company</label>
                      <input 
                        type="text" 
                        id="company" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email *</label>
                      <input 
                        type="email" 
                        id="email" 
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone *</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subject *</label>
                    <select
                      id="subject"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    >
                      <option value="">Select a subject</option>
                      <option value="product-enquiry">Product Enquiry</option>
                      <option value="bulk-order">Bulk Order</option>
                      <option value="custom-bricks">Custom Bricks</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message *</label>
                    <textarea 
                      id="message" 
                      rows="4" 
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 shadow-md"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <img 
                  src={Logo} 
                  alt="Roshan Bricks Logo" 
                  className="h-16 mb-4"
                />
                <p className="text-gray-400">
                  Crafting premium quality bricks using time-honored techniques and modern technology since 1995
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-bold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  {navItems.map((item) => (
                    <li key={item.to}>
                      <Link
                        to={item.to}
                        smooth={true}
                        duration={500}
                        className="text-gray-400 hover:text-orange-500 cursor-pointer transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-bold mb-4">Products</h3>
                <ul className="space-y-2">
                  {['standard', 'special', 'eco', 'premium'].map((category) => (
                    <li key={category}>
                      <button
                        onClick={() => {
                          setActiveTab(category);
                          // Scroll to products section
                          document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="text-gray-400 hover:text-orange-500 transition-colors capitalize cursor-pointer"
                      >
                        {category.replace('-', ' ')} Bricks
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-bold mb-4">Connect With Us</h3>
                <div className="flex space-x-4 mb-4">
                  <a 
                    href="https://www.facebook.com/share/1AwRCwxgMT/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-orange-500 transition-colors"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                    </svg>
                  </a>
                  <a 
                    href="https://www.instagram.com/roriri_it_park/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-orange-500 transition-colors"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.023.047 1.351.058 3.807.058h.468c2.456 0 2.784-.011 3.807-.058.975-.045 1.504-.207 1.857-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.047-1.023.058-1.351.058-3.807v-.468c0-2.456-.011-2.784-.058-3.807-.045-.975-.207-1.504-.344-1.857a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                    </svg>
                  </a>
                  <a 
                    href="http://www.youtube.com/@Roriri_soft" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-orange-500 transition-colors"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                    </svg>
                  </a>
                  <a 
                    href="https://www.linkedin.com/company/roriri-software-solutions-pvt-ltd/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-orange-500 transition-colors"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                </div>
                <p className="text-gray-400">
                  Follow us on social media for the latest updates and offers
                </p>
              </div>
            </div>
            
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>
                &copy; {new Date().getFullYear()} Roshan Bricks. All rights reserved. 
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default RoshanTiles;