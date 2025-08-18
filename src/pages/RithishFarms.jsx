import React, { useState, useEffect, useRef } from 'react';
import { Leaf, MapPin, Clock, Users, Star, Heart, Camera, Calendar, Utensils, Sun, ChevronRight, Wind, Flower, TreePine, Home, Phone, Mail, Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const RithishFarms = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [loading, setLoading] = useState(true);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const navigate = useNavigate();
  
  // Refs for sections
  const heroRef = useRef(null);
  const galleryRef = useRef(null);
  const eventsRef = useRef(null);
  const diningRef = useRef(null);
  const contactRef = useRef(null);

  // Your farm images from the assets folder
  const farmImages = [
    '/src/Assets/RithisForms/Beauty.jpg',
    '/src/Assets/RithisForms/CoconutTree.jpg',
    '/src/Assets/RithisForms/Mountain.jpg',
    '/src/Assets/RithisForms/PalmTree.jpg',
    '/src/Assets/RithisForms/NeemTree.jpg',
    '/src/Assets/RithisForms/House.jpg'
  ];

  // Gallery data with your actual images
  const gallery = [
    {
      id: 1,
      image_url: '/src/Assets/RithisForms/Banana.jpg',
      title: "Organic Banana Plantation",
      description: "Fresh, organically grown bananas in natural environment"
    },
    {
      id: 2,
      image_url: '/src/Assets/RithisForms/CoconutTree.jpg',
      title: "Coconut Groves",
      description: "Traditional coconut trees providing natural shade"
    },
    {
      id: 3,
      image_url: '/src/Assets/RithisForms/SmallCoconut.jpg',
      title: "Young Coconut Trees",
      description: "New generation coconut saplings growing strong"
    },
    {
      id: 4,
      image_url: '/src/Assets/RithisForms/PalmTree.jpg',
      title: "Palm Tree Garden",
      description: "Beautiful palm trees creating tropical atmosphere"
    },
    {
      id: 5,
      image_url: '/src/Assets/RithisForms/NeemTree.jpg',
      title: "Neem Trees",
      description: "Natural medicinal neem trees for organic farming"
    },
    {
      id: 6,
      image_url: '/src/Assets/RithisForms/Pottry.jpg',
      title: "Traditional Pottery",
      description: "Handcrafted pottery showcasing local artisan skills"
    },
    {
      id: 7,
      image_url: '/src/Assets/RithisForms/House.jpg',
      title: "Farm House",
      description: "Traditional farm house amidst nature"
    },
    {
      id: 8,
      image_url: '/src/Assets/RithisForms/Home.jpg',
      title: "Farm Home",
      description: "Comfortable accommodation for visitors"
    },
    {
      id: 9,
      image_url: '/src/Assets/RithisForms/Beauty.jpg',
      title: "Natural Beauty",
      description: "Scenic landscapes of our organic farm"
    }
  ];

  // Events data
  const events = [
    {
      id: 1,
      title: "Harvest Festival",
      description: "Celebrate the season with farm activities, live music, and fresh produce.",
      date: "2024-11-18",
      image_url: '/src/Assets/RithisForms/Grouph.jpg'
    },
    {
      id: 2,
      title: "Farmers Market",
      description: "Weekly market featuring our organic produce and local artisans.",
      date: "2024-10-28",
      image_url: '/src/Assets/RithisForms/Walk.jpg'
    },
    {
      id: 3,
      title: "Nature Walk",
      description: "Guided nature walks through our organic farm trails.",
      date: "2024-12-15",
      image_url: '/src/Assets/RithisForms/Way.jpg'
    }
  ];

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      name: "Rahul Sharma",
      comment: "The farm tour was educational and fun for our whole family. The kids loved picking fruits!",
      rating: 5,
      date: "2023-05-15"
    },
    {
      id: 2,
      name: "Priya Patel",
      comment: "The farm-to-table experience was incredible. You can taste the difference with fresh ingredients!",
      rating: 5,
      date: "2023-06-22"
    },
    {
      id: 3,
      name: "Anil Kumar",
      comment: "Great weekend getaway from the city. Peaceful environment and knowledgeable staff.",
      rating: 4,
      date: "2023-04-10"
    }
  ];

  const features = [
    {
      icon: Leaf,
      title: 'Organic Farming',
      description: 'Experience sustainable and chemical-free agriculture practices',
      color: 'from-green-400 to-emerald-600'
    },
    {
      icon: Heart,
      title: 'Farm-to-Table',
      description: 'Enjoy fresh, organic meals prepared with farm-grown ingredients',
      color: 'from-pink-400 to-rose-600'
    },
    {
      icon: Users,
      title: 'Family Friendly',
      description: 'Perfect activities for visitors of all ages and families',
      color: 'from-blue-400 to-indigo-600'
    },
    {
      icon: Camera,
      title: 'Scenic Beauty',
      description: 'Capture beautiful moments in our picturesque countryside setting',
      color: 'from-purple-400 to-violet-600'
    }
  ];

  const farmNavItems = [
   ,
    { name: 'Gallery', icon: Camera, ref: galleryRef, id: 'gallery' },
    { name: 'Events', icon: Sun, ref: eventsRef, id: 'events' },
    { name: 'Dining', icon: Utensils, ref: diningRef, id: 'dining' },
    { name: 'Contact', icon: MapPin, ref: contactRef, id: 'contact' }
  ];

  // Mouse tracking
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Scroll tracking
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Update active section based on scroll
      const sections = [
        { id: 'hero', ref: heroRef },
        { id: 'gallery', ref: galleryRef },
        { id: 'events', ref: eventsRef },
        { id: 'dining', ref: diningRef },
        { id: 'contact', ref: contactRef }
      ];

      for (const section of sections) {
        if (section.ref.current) {
          const rect = section.ref.current.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Image carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % farmImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Loading simulation
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Extreme Loading Animation
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-emerald-900 to-teal-900 relative overflow-hidden">
        {/* Floating particles */}
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-ping"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          >
            <div className="w-1 h-1 bg-emerald-400 rounded-full opacity-60" />
          </div>
        ))}
        
        {/* Central loader */}
        <div className="relative">
          <div className="w-32 h-32 border-4 border-transparent border-t-emerald-400 border-r-emerald-300 rounded-full animate-spin" />
          <div className="absolute inset-4 w-24 h-24 border-4 border-transparent border-b-teal-400 border-l-teal-300 rounded-full animate-spin animation-delay-150" />
          <div className="absolute inset-8 w-16 h-16 border-4 border-transparent border-t-green-400 border-r-green-300 rounded-full animate-spin animation-delay-300" />
          <div className="absolute inset-0 flex items-center justify-center">
            <Leaf className="w-12 h-12 text-emerald-400 animate-pulse" />
          </div>
        </div>
        
        <div className="absolute bottom-20 text-center">
          <h2 className="text-2xl font-bold text-white animate-pulse mb-2">Loading Farm Experience</h2>
          <div className="w-64 h-2 bg-gray-700 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full animate-pulse" 
                 style={{ width: '100%', animation: 'loading 2s ease-in-out' }} />
          </div>
        </div>
        
        <style jsx>{`
          @keyframes loading {
            0% { width: 0% }
            100% { width: 100% }
          }
          .animation-delay-150 { animation-delay: 0.15s }
          .animation-delay-300 { animation-delay: 0.3s }
        `}</style>
      </div>
    );
  }

  return (
    <div className="bg-gray-900 text-white overflow-hidden">
      {/* Cursor follower */}
      <div 
        className="fixed w-4 h-4 pointer-events-none z-50 mix-blend-difference"
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
          transition: 'all 0.1s ease-out'
        }}
      >
        <div className="w-full h-full bg-white rounded-full animate-pulse" />
      </div>

      {/* Back to Home Button */}
     <button
  onClick={() => navigate('/')}
  
  className="fixed top-6 right-6 z-50 w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
  title="Back to Home"
>
  <Home className="w-5 h-5 text-white" />
</button>

      {/* Enhanced Navigation */}
      <nav className={`fixed top-0 w-full z-40 transition-all duration-500 ${
        scrollY > 50 
          ? 'bg-gray-900/90 backdrop-blur-xl shadow-2xl' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div 
  className="flex items-center space-x-3 transform hover:scale-105 transition-transform duration-300 cursor-pointer"
  onClick={scrollToTop}
>
  <img 
    src="/src/Assets/RithisForms.jpeg" 
    alt="Rithish Farms Logo" 
    className="w-30 h-12 border-2 border-emerald-400"
  />
  <span className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
    {/* Your text here if needed */}
  </span>
</div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-1">
              {farmNavItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.ref)}
                  className={`relative px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 ${
                    activeSection === item.id
                      ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-500/25'
                      : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                  }`}
                  style={{
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  <div className="flex items-center space-x-2">
                    <item.icon className="w-4 h-4" />
                    <span className="font-medium">{item.name}</span>
                  </div>
                  {activeSection === item.id && (
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-400 to-teal-400 opacity-20 animate-pulse" />
                  )}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden absolute top-full left-0 w-full bg-gray-900/95 backdrop-blur-xl transition-all duration-500 ${
          mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}>
          <div className="px-4 py-2 space-y-1">
            {farmNavItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => {
                  scrollToSection(item.ref);
                  setMobileMenuOpen(false);
                }}
                className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 flex items-center space-x-3 ${
                  activeSection === item.id
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white'
                    : 'text-gray-300 hover:text-white hover:bg-gray-800'
                }`}
                style={{
                  animationDelay: `${index * 0.05}s`
                }}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.name}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section 
        ref={heroRef} 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Dynamic background */}
        <div className="absolute inset-0">
          <div 
            key={currentImageIndex}
            className="absolute inset-0 transition-opacity duration-1000"
            style={{
              backgroundImage: `url(${farmImages[currentImageIndex]})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              transform: `scale(${1.1 + scrollY * 0.0001}) translateY(${scrollY * 0.5}px)`
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70" />
        </div>

        {/* Floating elements */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          >
            {i % 4 === 0 ? <Leaf className="w-6 h-6 text-emerald-400/30" /> :
             i % 4 === 1 ? <Flower className="w-4 h-4 text-pink-400/30" /> :
             i % 4 === 2 ? <TreePine className="w-8 h-8 text-green-400/30" /> :
             <Wind className="w-5 h-5 text-blue-400/30" />}
          </div>
        ))}

        {/* Hero content */}
        <div className="relative z-10 text-center max-w-6xl px-4 sm:px-6 lg:px-8">
          <div 
            className="inline-flex items-center space-x-2 bg-emerald-500/20 backdrop-blur-sm rounded-full px-6 py-2 mb-8 border border-emerald-400/30"
            style={{
              transform: `translateY(${scrollY * -0.2}px)`
            }}
          >
            <Leaf className="w-5 h-5 animate-spin-slow" />
            <span className="text-sm font-medium">100% Organic & Sustainable</span>
          </div>

          <h1 
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 bg-gradient-to-r from-white via-emerald-200 to-teal-200 bg-clip-text text-transparent"
            style={{
              transform: `translateY(${scrollY * -0.3}px)`,
              backgroundSize: '200% 200%',
              animation: 'gradient-shift 4s ease-in-out infinite'
            }}
          >
            Rithish Farms
          </h1>

          <p 
            className="text-xl md:text-2xl text-emerald-100 max-w-4xl mx-auto leading-relaxed mb-12"
            style={{
              transform: `translateY(${scrollY * -0.1}px)`
            }}
          >
            Discover the beauty of sustainable agriculture and experience farm life in our peaceful countryside setting in Tamil Nadu.
          </p>

          <div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            style={{
              transform: `translateY(${scrollY * -0.05}px)`
            }}
          >
            <button
              onClick={() => scrollToSection(galleryRef)}
              className="group relative px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-emerald-500/25 transition-all duration-500 transform hover:scale-105 overflow-hidden"
            >
              <span className="relative z-10 flex items-center space-x-2">
                <Camera className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                <span>Explore Gallery</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
            </button>

            <button
              onClick={() => scrollToSection(contactRef)}
              className="group px-8 py-4 border-2 border-white/80 rounded-full font-semibold text-lg hover:bg-white hover:text-emerald-900 transition-all duration-500 transform hover:scale-105 backdrop-blur-sm"
            >
              <span className="flex items-center space-x-2">
                <MapPin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>Visit Us</span>
              </span>
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronRight className="w-6 h-6 rotate-90 text-white/60" />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Why Choose Us?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the perfect blend of tradition and innovation in sustainable farming
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                }}
              >
                <div className={`relative h-80 rounded-2xl p-8 transition-all duration-500 transform ${
                  hoveredCard === index 
                    ? 'rotate-y-12 scale-105 shadow-2xl shadow-emerald-500/20' 
                    : 'hover:scale-102'
                } bg-gradient-to-br ${feature.color} hover:shadow-xl`}>
                  
                  {/* Icon */}
                  <div className="mb-6 relative">
                    <div className={`w-20 h-20 rounded-full flex items-center justify-center transition-all duration-500 ${
                      hoveredCard === index 
                        ? 'bg-white/20 rotate-12 scale-110' 
                        : 'bg-white/10'
                    }`}>
                      <feature.icon className="w-10 h-10 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-white/90 leading-relaxed">{feature.description}</p>

                  {/* Floating particles */}
                  {hoveredCard === index && (
                    <>
                      {[...Array(8)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute animate-ping"
                          style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${i * 0.1}s`
                          }}
                        >
                          <div className="w-1 h-1 bg-white rounded-full" />
                        </div>
                      ))}
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section ref={galleryRef} className="py-20 bg-gray-800 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Farm Gallery</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Take a visual journey through our sustainable farming paradise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gallery.map((item, index) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-2xl cursor-pointer"
                style={{
                  animation: `slideInUp 0.6s ease-out ${index * 0.1}s both`
                }}
              >
                <div className="aspect-w-16 aspect-h-12 relative">
                  <img
                    src={item.image_url}
                    alt={item.title}
                    className="w-full h-80 object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="text-xl font-bold text-white mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        {item.title}
                      </h3>
                      <p className="text-gray-200 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Camera icon */}
                  <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-300">
                    <Camera className="w-5 h-5 text-white" />
                  </div>

                  {/* Glow effect */}
                  <div className="absolute inset-0 ring-4 ring-emerald-400/0 group-hover:ring-emerald-400/50 rounded-2xl transition-all duration-500" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section ref={eventsRef} className="py-20 bg-gradient-to-br from-gray-900 via-emerald-900/20 to-gray-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Upcoming Events
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join us for unforgettable farm experiences and seasonal celebrations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <div
                key={event.id}
                className="group relative bg-gray-800 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-500 transform hover:-translate-y-2"
                style={{
                  animation: `fadeInScale 0.6s ease-out ${index * 0.2}s both`
                }}
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={event.image_url}
                    alt={event.title}
                    className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />
                  
                  {/* Date badge */}
                  <div className="absolute top-4 left-4 bg-emerald-500 rounded-full px-3 py-1 text-sm font-semibold flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(event.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {event.description}
                  </p>
                  
                  
                </div>

                {/* Hover glow */}
                <div className="absolute inset-0 ring-2 ring-emerald-400/0 group-hover:ring-emerald-400/50 rounded-2xl transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dining Section */}
      <section ref={diningRef} className="py-20 bg-gray-800 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Farm-to-Table Dining
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Savor the freshest ingredients harvested directly from our fields
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Fresh Breakfast", desc: "Start your day with farm-fresh produce and organic ingredients", icon: "🌅" },
              { title: "Organic Lunch", desc: "Daily changing menu featuring morning-harvested vegetables and fruits", icon: "🥗" },
              { title: "Traditional Meals", desc: "Authentic Tamil Nadu cuisine prepared with farm-grown ingredients", icon: "🍛" },
              { title: "Farm Tours", desc: "Guided tours with tastings of fresh coconuts, bananas and seasonal fruits", icon: "🚜" }
            ].map((item, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl p-6 hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-500 transform hover:-translate-y-3"
                style={{
                  animation: `bounceIn 0.6s ease-out ${index * 0.1}s both`
                }}
              >
                <div className="text-4xl mb-4 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {item.desc}
                </p>

                {/* Floating sparkles on hover */}
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animation: `sparkle 2s ease-in-out ${i * 0.2}s infinite`
                    }}
                  >
                    <div className="w-1 h-1 bg-emerald-400 rounded-full animate-ping" />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 via-emerald-900/10 to-gray-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              What Our Visitors Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real experiences from real people who've discovered our farm
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="group relative bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-500 transform hover:scale-105"
                style={{
                  animation: `slideInLeft 0.6s ease-out ${index * 0.2}s both`
                }}
              >
                {/* Quote mark */}
                <div className="text-6xl text-emerald-400/20 font-bold mb-4 group-hover:text-emerald-400/40 transition-colors">
                  "
                </div>

                {/* Content */}
                <p className="text-gray-300 italic mb-6 leading-relaxed text-lg">
                  {testimonial.comment}
                </p>

                {/* Author info */}
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-white group-hover:text-emerald-400 transition-colors">
                      {testimonial.name}
                    </h4>
                    <div className="flex items-center mt-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-500'}`}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="text-gray-400 text-sm">
                    {new Date(testimonial.date).toLocaleDateString()}
                  </div>
                </div>

                {/* Hover effect border */}
                <div className="absolute inset-0 ring-2 ring-emerald-400/0 group-hover:ring-emerald-400/30 rounded-2xl transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} className="py-20 bg-gray-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Visit Our Farm
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the beauty of sustainable agriculture in person
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="space-y-6">
                {[
                  { 
                    icon: MapPin, 
                    title: "Location", 
                    content: "RORIRI IT PARK, NALLANATHAPURAM, Kalakkad, Keela Karuvelankulam, Tamil Nadu 627502",
                    color: "from-emerald-400 to-teal-400"
                  },
                  { 
                    icon: Clock, 
                    title: "Hours", 
                    content: "Open daily 8:00 AM - 6:00 PM",
                    color: "from-blue-400 to-indigo-400"
                  },
                  { 
                    icon: Phone, 
                    title: "Phone", 
                    content: "+91 1234567890",
                    color: "from-green-400 to-emerald-400"
                  },
                  { 
                    icon: Mail, 
                    title: "Email", 
                    content: "info@rithishfarms.com",
                    color: "from-purple-400 to-pink-400"
                  }
                ].map((item, index) => (
                  <div
                    key={index}
                    className="group flex items-start space-x-4 p-6 rounded-2xl bg-gray-800/50 hover:bg-gray-800 transition-all duration-500 transform hover:scale-105 hover:shadow-xl"
                    style={{
                      animation: `fadeInRight 0.6s ease-out ${index * 0.1}s both`
                    }}
                  >
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {item.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                
              </div>
            </div>

            {/* Interactive Map */}
            <div className="relative">
              <div className="aspect-w-16 aspect-h-12 rounded-2xl overflow-hidden shadow-2xl hover:shadow-emerald-500/20 transition-all duration-500 transform hover:scale-105">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3945.7316047800564!2d77.580824!3d8.5254176!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b04692c8b82209f%3A0xa00060055fec4e1!2sRORIRI%20SOFTWARE%20SOLUTIONS%20PVT.LTD.!5e0!3m2!1sta!2sin!4v1754287507696!5m2!1sta!2sin"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Farm Location Map"
                  className="rounded-2xl"
                />
              </div>
              
              {/* Floating map pin */}
              <div className="absolute top-4 right-4 w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                <MapPin className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 border-t border-gray-700 py-16 relative overflow-hidden">
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            >
              <div className="w-1 h-1 bg-emerald-400 rounded-full" />
            </div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <img 
                  src="/src/Assets/RithisForms/CoconutTree.jpg" 
                  alt="Rithish Farms Logo" 
                  className="w-10 h-10 rounded-full border-2 border-emerald-400"
                />
                <h3 className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                  Rithish Farms
                </h3>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
                Experience sustainable agriculture and reconnect with nature at our organic farm in Tamil Nadu. 
                Where tradition meets innovation in farming excellence.
              </p>
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
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-bold text-white mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {farmNavItems.map((item, index) => (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollToSection(item.ref)}
                      className="text-gray-300 hover:text-emerald-400 transition-all duration-300 transform hover:translate-x-2 flex items-center space-x-2"
                    >
                      <item.icon className="w-4 h-4" />
                      <span>{item.name}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-xl font-bold text-white mb-6">Contact Us</h4>
              <div className="space-y-4 text-gray-300">
                <div>
                  <p>RORIRI IT PARK,</p>
                  <p>NALLANATHAPURAM,</p>
                  <p>KALAKAD</p>
                </div>
                <div>
                  <p>admin@roririsoft.com</p>
                </div>
                <div>
                  <p>(+91) 7338941579</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Rithish Farms. All rights reserved. | Located in Tamil Nadu, India
            </p>
            
          </div>
        </div>

        {/* Go to top button */}
        <button 
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 w-12 h-12 bg-emerald-500 hover:bg-emerald-600 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 transform hover:scale-110"
          aria-label="Go to top"
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </footer>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(50px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.8) rotateY(45deg);
          }
          to {
            opacity: 1;
            transform: scale(1) rotateY(0deg);
          }
        }
        
        @keyframes bounceIn {
          0% {
            opacity: 0;
            transform: scale(0.3) translateY(50px);
          }
          50% {
            opacity: 1;
            transform: scale(1.05) translateY(-10px);
          }
          70% {
            transform: scale(0.95) translateY(5px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        
        @keyframes sparkle {
          0%, 100% {
            opacity: 0;
            transform: scale(0);
          }
          50% {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes gradient-shift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin 3s linear infinite;
        }
        
        .rotate-y-12 {
          transform: rotateY(12deg);
        }
        
        .rotate-y-0 {
          transform: rotateY(0deg);
        }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: #1f2937;
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #10b981, #14b8a6);
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #059669, #0f766e);
        }
        
        /* Smooth scroll behavior */
        html {
          scroll-behavior: smooth;
        }
        
        /* Mobile optimizations */
        @media (max-width: 768px) {
          .text-5xl { font-size: 2.5rem; }
          .text-7xl { font-size: 3.5rem; }
          .text-8xl { font-size: 4rem; }
        }
      `}</style>
    </div>
  );
};

export default RithishFarms;