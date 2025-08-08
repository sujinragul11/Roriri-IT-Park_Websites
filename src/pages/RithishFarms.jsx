import React, { useState, useEffect, useRef } from 'react';
import { Leaf, MapPin, Clock, Users, Star, Heart, Camera, Calendar, Utensils, Sun, ChevronRight, Wind, Flower, TreePine, Home } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import RithishLogo from '../Assets/Rithisforms.jpeg'; // Import your logo

const RithishFarms = () => {
  const [gallery, setGallery] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [events, setEvents] = useState([]);
  const [diningOptions, setDiningOptions] = useState([]);
  const [activeSection, setActiveSection] = useState('gallery');
  const [loading, setLoading] = useState(true);
  const [hoveredCard, setHoveredCard] = useState(null);

  // Refs for scrolling to sections
  const galleryRef = useRef(null);
  const eventsRef = useRef(null);
  const diningRef = useRef(null);
  const contactRef = useRef(null);

  // Floating particles animation variants
  const floatingParticle = {
    animate: {
      y: [-20, -60, -20],
      x: [-10, 10, -10],
      rotate: [0, 180, 360],
      opacity: [0.3, 0.8, 0.3],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const leafAnimation = {
    animate: {
      rotate: [0, 10, -10, 0],
      y: [0, -5, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const waveAnimation = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  // Static content for farm features
  const farmFeatures = [
    {
      title: "Organic Vegetable Farming",
      description: "We grow over 50 varieties of seasonal vegetables using completely organic methods.",
      image: "https://images.pexels.com/photos/2131784/pexels-photo-2131784.jpeg"
    },
    {
      title: "Fruit Orchards",
      description: "Explore our orchards with mango, guava, pomegranate, and other fruit trees.",
      image: "https://images.pexels.com/photos/2484208/pexels-photo-2484208.jpeg"
    },
    {
      title: "Dairy Farm",
      description: "Meet our happy cows and learn about sustainable dairy farming practices.",
      image: "https://images.pexels.com/photos/735968/pexels-photo-735968.jpeg"
    },
    {
      title: "Herb Garden",
      description: "Discover medicinal and culinary herbs grown in our specialized garden.",
      image: "https://images.pexels.com/photos/1458694/pexels-photo-1458694.jpeg"
    },
    {
      title: "Bee Keeping",
      description: "Learn about the importance of bees and taste our farm-fresh honey.",
      image: "https://images.pexels.com/photos/1172019/pexels-photo-1172019.jpeg"
    },
    {
      title: "Composting Unit",
      description: "See how we turn farm waste into nutrient-rich compost for our fields.",
      image: "https://images.pexels.com/photos/5473955/pexels-photo-5473955.jpeg"
    }
  ];

  useEffect(() => {
    // Simulate API loading with static data
    const loadData = async () => {
      try {
        // Simulate gallery data
        setGallery([
          {
            id: 1,
            image_url: "https://images.pexels.com/photos/974314/pexels-photo-974314.jpeg",
            title: "Farm Sunset",
            description: "Beautiful sunset over our farm fields"
          },
          {
            id: 2,
            image_url: "https://images.pexels.com/photos/2131784/pexels-photo-2131784.jpeg",
            title: "Organic Vegetables",
            description: "Freshly harvested organic produce"
          },
          {
            id: 3,
            image_url: "https://images.pexels.com/photos/735968/pexels-photo-735968.jpeg",
            title: "Happy Cows",
            description: "Our dairy cows grazing in pasture"
          },
          {
            id: 4,
            image_url: "https://images.pexels.com/photos/1172019/pexels-photo-1172019.jpeg",
            title: "Bee Hives",
            description: "Sustainable bee keeping on our farm"
          },
          {
            id: 5,
            image_url: "https://images.pexels.com/photos/2484208/pexels-photo-2484208.jpeg",
            title: "Fruit Orchards",
            description: "Seasonal fruits grown with care"
          },
          {
            id: 6,
            image_url: "https://images.pexels.com/photos/5473955/pexels-photo-5473955.jpeg",
            title: "Composting",
            description: "Turning waste into nutrients"
          }
        ]);

        // Simulate testimonials
        setTestimonials([
          {
            id: 1,
            name: "Rahul Sharma",
            comment: "The farm tour was educational and fun for our whole family. The kids loved picking vegetables!",
            rating: 5,
            date: "2023-05-15"
          },
          {
            id: 2,
            name: "Priya Patel",
            comment: "The farm-to-table lunch was incredible. You can taste the difference with fresh ingredients!",
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
        ]);

        // Simulate events
        setEvents([
          {
            id: 1,
            title: "Harvest Festival",
            description: "Celebrate the season with farm activities, live music, and fresh produce.",
            date: "2023-11-18",
            image_url: "https://images.pexels.com/photos/1112080/pexels-photo-1112080.jpeg"
          },
          {
            id: 2,
            title: "Farmers Market",
            description: "Weekly market featuring our organic produce and local artisans.",
            date: "2023-10-28",
            image_url: "https://images.pexels.com/photos/3980373/pexels-photo-3980373.jpeg"
          },
          {
            id: 3,
            title: "Kids Farm Camp",
            description: "3-day camp where children learn about farming and nature.",
            date: "2023-12-15",
            image_url: "https://images.pexels.com/photos/939700/pexels-photo-939700.jpeg"
          }
        ]);

        // Simulate dining options
        setDiningOptions([
          {
            id: 1,
            title: "Farm Breakfast",
            description: "Freshly prepared breakfast with farm eggs, milk, and seasonal fruits"
          },
          {
            id: 2,
            title: "Organic Lunch Buffet",
            description: "Daily changing menu featuring vegetables harvested that morning"
          },
          {
            id: 3,
            title: "Seasonal Specials",
            description: "Chef's creations highlighting what's fresh from the farm"
          },
          {
            id: 4,
            title: "Farmers Platter",
            description: "Sampling of our best produce, cheeses, and breads"
          }
        ]);

      } catch (error) {
        console.error('Failed to load data:', error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
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

  const scrollToSection = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop - 80,
      behavior: 'smooth'
    });
  };

  const features = [
    {
      icon: Leaf,
      title: 'Organic Farming',
      description: 'Experience sustainable and chemical-free agriculture practices'
    },
    {
      icon: Heart,
      title: 'Farm-to-Table',
      description: 'Enjoy fresh, organic meals prepared with farm-grown ingredients'
    },
    {
      icon: Users,
      title: 'Family Friendly',
      description: 'Perfect activities for visitors of all ages and families'
    },
    {
      icon: Camera,
      title: 'Scenic Beauty',
      description: 'Capture beautiful moments in our picturesque countryside setting'
    }
  ];

  const farmNavItems = [
    { name: 'Gallery', icon: Camera, href: '#gallery', ref: galleryRef },
    { name: 'Events', icon: Sun, href: '#events', ref: eventsRef },
    { name: 'Dining', icon: Utensils, href: '#dining', ref: diningRef },
    { name: 'Contact', icon: MapPin, href: '#contact', ref: contactRef }
  ];

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-emerald-50 to-lime-50 relative overflow-hidden">
        {/* Floating nature elements during loading */}
        <motion.div
          variants={floatingParticle}
          animate="animate"
          className="absolute top-20 left-20 text-green-400"
        >
          <Leaf className="w-8 h-8" />
        </motion.div>
        <motion.div
          variants={floatingParticle}
          animate="animate"
          style={{ animationDelay: '2s' }}
          className="absolute top-40 right-20 text-emerald-400"
        >
          <Flower className="w-6 h-6" />
        </motion.div>
        <motion.div
          variants={floatingParticle}
          animate="animate"
          style={{ animationDelay: '4s' }}
          className="absolute bottom-20 left-1/4 text-lime-400"
        >
          <TreePine className="w-10 h-10" />
        </motion.div>
        
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 1.5,
            repeat: Infinity,
            ease: "linear"
          }}
          className="rounded-full h-16 w-16 border-t-4 border-b-4 border-green-600"
        ></motion.div>
      </div>
    );
  }

  return (
    <>
      {/* Floating Nature Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Floating leaves */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-green-200"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            variants={leafAnimation}
            animate="animate"
            transition={{ delay: i * 0.5 }}
          >
            <Leaf className="w-4 h-4 opacity-30" />
          </motion.div>
        ))}
        
        {/* Floating flowers */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-pink-200"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: i * 0.8,
              ease: "easeInOut"
            }}
          >
            <Flower className="w-3 h-3" />
          </motion.div>
        ))}
      </div>

      {/* Farm Navigation Bar */}
      <motion.div 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="sticky top-0 z-40 bg-white/90 backdrop-blur-md shadow-sm border-b border-green-100"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3">
            {/* Logo on the left */}
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center mr-6"
            >
              <img 
                src={RithishLogo} 
                alt="Rithish Farms Logo" 
                className="h-10 w-30" 
              />
            </motion.div>
            
            <div className="flex overflow-x-auto space-x-6">
              {farmNavItems.map((item, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setActiveSection(item.href.substring(1));
                    scrollToSection(item.ref);
                  }}
                  className={`flex flex-col items-center min-w-max px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg ${
                    activeSection === item.href.substring(1)
                      ? 'text-green-600 bg-green-50 shadow-sm'
                      : 'text-gray-700 hover:text-green-600 hover:bg-green-50'
                  }`}
                >
                  <motion.div
                    animate={{ rotate: activeSection === item.href.substring(1) ? 360 : 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <item.icon className="h-5 w-5 mb-1" />
                  </motion.div>
                  <span>{item.name}</span>
                </motion.button>
              ))}
            </div>
            
            {/* Back to Home Button - Top Right Corner */}
            <motion.a
              href="/"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 px-2 py-2 bg-green-400 hover:bg-green-500 text-white rounded-lg transition-colors duration-200 font-medium shadow-md"
            >
              <Home className="h-5 w-5" />
              <span className="hidden sm:inline">	𝐇𝐨𝐦𝐞 </span>
            </motion.a>
          </div>
        </div>
      </motion.div>

      {/* Hero Section with Enhanced Background */}
      <section className="relative bg-gradient-to-br from-green-800 via-green-700 to-emerald-800 text-white py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/974314/pexels-photo-974314.jpeg')`,
            backgroundAttachment: 'fixed'
          }}
        ></div>
        
        {/* Animated overlay pattern */}
        <div className="absolute inset-0 opacity-20">
          <motion.div
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%']
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'linear'
            }}
            className="w-full h-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12 12-5.373 12-12zm12 0c0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12 12-5.373 12-12z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '60px 60px'
            }}
          ></motion.div>
        </div>
        
        {/* Floating nature elements in hero */}
        <motion.div
          variants={floatingParticle}
          animate="animate"
          className="absolute top-20 left-10 text-green-300"
        >
          <Wind className="w-12 h-12 opacity-60" />
        </motion.div>
        <motion.div
          variants={leafAnimation}
          animate="animate"
          className="absolute top-32 right-16 text-lime-300"
        >
          <TreePine className="w-16 h-16 opacity-40" />
        </motion.div>
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-20 left-1/4 text-emerald-300"
        >
          <Flower className="w-10 h-10 opacity-50" />
        </motion.div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6"
          >
            <motion.div 
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center space-x-2 bg-green-600 bg-opacity-20 backdrop-blur-sm rounded-full px-6 py-2 mb-4 border border-green-400/30"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <Leaf className="h-5 w-5" />
              </motion.div>
              <span className="text-sm font-medium">100% Organic & Sustainable</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold"
            >
              <motion.span
                animate={{ 
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{
                  background: 'linear-gradient(45deg, #ffffff, #a7f3d0, #ffffff)',
                  backgroundSize: '200% 200%',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                Rithish Farms
              </motion.span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-xl sm:text-2xl text-green-100 max-w-3xl mx-auto leading-relaxed"
            >
              Discover the beauty of sustainable agriculture and experience farm life 
              in our peaceful countryside setting.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(34, 197, 94, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setActiveSection('gallery');
                  scrollToSection(galleryRef);
                }}
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold shadow-lg transition-all duration-300 border-2 border-transparent hover:border-green-400"
              >
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  View Gallery
                </motion.span>
              </motion.button>
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "rgba(255, 255, 255, 0.9)",
                  color: "#065f46"
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setActiveSection('contact');
                  scrollToSection(contactRef);
                }}
                className="border-2 border-white text-white hover:bg-white hover:text-green-800 px-8 py-4 rounded-lg font-semibold transition-all duration-300"
              >
                Book a Visit
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Quick Info Bar with Wave Animation */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="bg-gradient-to-r from-green-700 via-green-600 to-emerald-700 text-white py-4 relative overflow-hidden"
      >
        {/* Animated wave background */}
        <motion.div
          animate={{
            x: ['-100%', '100%']
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'linear'
          }}
          className="absolute inset-0 opacity-20"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
            width: '200%'
          }}
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <motion.div 
              variants={waveAnimation}
              animate="animate"
              className="flex items-center justify-center space-x-2"
            >
              <MapPin className="h-5 w-5" />
              <span>RORIRI IT PARK, NALLANATHAPURAM, Kalakkad, Keela Karuvelankulam, Tamil Nadu 627502</span>
            </motion.div>
            <motion.div 
              variants={waveAnimation}
              animate="animate"
              transition={{ delay: 0.5 }}
              className="flex items-center justify-center space-x-2"
            >
              <Clock className="h-5 w-5" />
              <span>Open Daily 8AM - 6PM</span>
            </motion.div>
            <motion.div 
              variants={waveAnimation}
              animate="animate"
              transition={{ delay: 1 }}
              className="flex items-center justify-center space-x-2"
            >
              <Calendar className="h-5 w-5" />
              <span>Bookings Available Year-Round</span>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Features Section with Enhanced Background */}
      <section className="py-20 bg-gradient-to-br from-white via-green-50 to-emerald-50 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <motion.div
            animate={{
              rotate: 360
            }}
            transition={{
              duration: 60,
              repeat: Infinity,
              ease: 'linear'
            }}
            className="absolute top-20 right-20 w-64 h-64 border-2 border-green-300 rounded-full"
          />
          <motion.div
            animate={{
              rotate: -360
            }}
            transition={{
              duration: 45,
              repeat: Infinity,
              ease: 'linear'
            }}
            className="absolute bottom-20 left-20 w-48 h-48 border-2 border-emerald-300 rounded-full"
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <motion.h2 
              className="text-3xl font-bold text-gray-900 mb-4"
              animate={{
                color: ['#111827', '#059669', '#111827']
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            >
              Why Choose Rithish Farms?
            </motion.h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience authentic farm life with our carefully curated programs and activities.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 20px 40px rgba(34, 197, 94, 0.1)"
                }}
                className="text-center p-6 rounded-xl border hover:shadow-lg transition-all duration-300 bg-white/80 backdrop-blur-sm"
              >
                <motion.div 
                  className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-100 to-emerald-100 text-green-600 rounded-full mb-4"
                  whileHover={{ 
                    scale: 1.2,
                    rotate: 360,
                    background: "linear-gradient(45deg, #dcfce7, #a7f3d0)"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <feature.icon className="h-8 w-8" />
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Farm Features Section with Nature Background */}
      <section className="py-20 bg-gradient-to-br from-green-50 via-emerald-50 to-lime-50 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-opacity='0.1'%3E%3Cpolygon fill='%2322c55e' points='50 0 60 40 100 50 60 60 50 100 40 60 0 50 40 40'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '100px 100px'
          }}
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Farm Features</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore the diverse aspects of our sustainable farming operation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {farmFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.02,
                  rotateY: 5
                }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                className="relative overflow-hidden rounded-xl shadow-md group"
              >
                <motion.img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-64 object-cover transition-transform duration-700"
                  animate={{
                    scale: hoveredCard === index ? 1.1 : 1,
                    filter: hoveredCard === index ? 'brightness(1.1)' : 'brightness(1)'
                  }}
                />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-6"
                  initial={{ opacity: 0.8 }}
                  whileHover={{ opacity: 1 }}
                >
                  <motion.h3 
                    className="text-xl font-bold text-white mb-2"
                    initial={{ y: 10 }}
                    whileHover={{ y: 0 }}
                  >
                    {feature.title}
                  </motion.h3>
                  <motion.p 
                    className="text-green-100"
                    initial={{ y: 10, opacity: 0.8 }}
                    whileHover={{ y: 0, opacity: 1 }}
                  >
                    {feature.description}
                  </motion.p>
                </motion.div>
                
                {/* Floating leaf on hover */}
                <AnimatePresence>
                  {hoveredCard === index && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0, x: 50, y: 50 }}
                      animate={{ 
                        opacity: 1, 
                        scale: 1, 
                        x: 20, 
                        y: 20,
                        rotate: [0, 10, -10, 0]
                      }}
                      exit={{ opacity: 0, scale: 0 }}
                      transition={{ duration: 0.5 }}
                      className="absolute top-4 right-4 text-green-300"
                    >
                      <Leaf className="w-6 h-6" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section with Enhanced Animations */}
      <section id="gallery" ref={galleryRef} className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-green-50 relative overflow-hidden">
        {/* Animated background pattern */}
        <motion.div
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%']
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'linear'
          }}
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2322c55e' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '40px 40px'
          }}
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <motion.h2 
              className="text-3xl font-bold text-gray-900 mb-4"
              animate={{
                textShadow: [
                  '0 0 0px rgba(34, 197, 94, 0)',
                  '0 0 20px rgba(34, 197, 94, 0.3)',
                  '0 0 0px rgba(34, 197, 94, 0)'
                ]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            >
              Farm Gallery
            </motion.h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Take a visual tour of our beautiful farm and see what awaits you.
            </p>
          </motion.div>

          {gallery.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {gallery.map((image, index) => (
                <motion.div
                  key={image.id}
                  initial={{ opacity: 0, scale: 0.9, rotateY: 45 }}
                  whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ 
                    scale: 1.03,
                    rotateY: 5,
                    boxShadow: "0 25px 50px rgba(0,0,0,0.2)"
                  }}
                  className="group relative aspect-w-16 aspect-h-12 rounded-xl overflow-hidden shadow-md cursor-pointer"
                >
                  <motion.img
                    src={image.image_url}
                    alt={image.alt_text || image.title}
                    className="w-full h-64 object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.7 }}
                  />
                  {image.title && (
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ y: 20 }}
                      whileHover={{ y: 0 }}
                    >
                      <div className="absolute bottom-4 left-4 text-white">
                        <motion.h3 
                          className="font-semibold"
                          initial={{ x: -20, opacity: 0 }}
                          whileHover={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.1 }}
                        >
                          {image.title}
                        </motion.h3>
                        {image.description && (
                          <motion.p 
                            className="text-sm text-gray-300"
                            initial={{ x: -20, opacity: 0 }}
                            whileHover={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                          >
                            {image.description}
                          </motion.p>
                        )}
                      </div>
                    </motion.div>
                  )}
                  
                  {/* Camera icon animation on hover */}
                  <motion.div
                    className="absolute top-4 right-4 text-white opacity-0 group-hover:opacity-100"
                    initial={{ scale: 0, rotate: -180 }}
                    whileHover={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Camera className="w-6 h-6" />
                  </motion.div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <motion.p 
                className="text-gray-500"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                No gallery images available at the moment.
              </motion.p>
            </div>
          )}
        </div>
      </section>

      {/* Events Section with Nature Animations */}
      <section id="events" ref={eventsRef} className="py-20 bg-gradient-to-br from-white via-yellow-50 to-orange-50 relative overflow-hidden">
        {/* Floating sun rays */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute opacity-20"
            style={{
              left: `${20 + i * 15}%`,
              top: `${10 + (i % 2) * 20}%`,
            }}
            animate={{
              rotate: 360,
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: 8 + i,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Sun className="w-8 h-8 text-yellow-400" />
          </motion.div>
        ))}
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Upcoming Farm Events</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join us for special activities and seasonal celebrations
            </p>
          </motion.div>

          {events.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {events.map((event, index) => (
                <motion.div 
                  key={event.id}
                  initial={{ opacity: 0, y: 30, rotateX: 45 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ 
                    y: -10,
                    rotateY: 5,
                    boxShadow: "0 25px 50px rgba(0,0,0,0.15)"
                  }}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-500 group"
                >
                  <div className="relative aspect-w-16 aspect-h-9 overflow-hidden">
                    <motion.img
                      src={event.image_url || 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg'}
                      alt={event.title}
                      className="w-full h-64 object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.7 }}
                    />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-green-600/20 to-transparent opacity-0 group-hover:opacity-100"
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                  <div className="p-6">
                    <motion.div 
                      className="flex items-center text-sm text-gray-500 mb-2"
                      whileHover={{ x: 5 }}
                    >
                      <motion.div
                        animate={{ rotate: [0, 5, -5, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <Calendar className="h-4 w-4 mr-1" />
                      </motion.div>
                      {new Date(event.date).toLocaleDateString('en-US', {
                        weekday: 'short',
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </motion.div>
                    <h3 className="font-semibold text-xl text-gray-900 mb-2">{event.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{event.description}</p>
                    <motion.button
                      whileHover={{ scale: 1.05, x: 5 }}
                      whileTap={{ scale: 0.95 }}
                      className="text-green-600 hover:text-green-700 font-medium text-sm inline-flex items-center group"
                    >
                      Learn More
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <ChevronRight className="w-4 h-4 ml-1" />
                      </motion.div>
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <motion.p 
                className="text-gray-500"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                No upcoming events scheduled. Check back later!
              </motion.p>
            </div>
          )}
        </div>
      </section>

      
      {/* Testimonials Section */}
      {testimonials.length > 0 && (
        <section className="py-20 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 relative overflow-hidden">
          {/* Floating testimonial elements */}
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute opacity-20"
              style={{
                left: `${10 + i * 25}%`,
                top: `${20 + (i % 2) * 40}%`,
              }}
              animate={{
                y: [-20, 20, -20],
                rotate: [0, 180, 360],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 6 + i,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Heart className="w-6 h-6 text-pink-400" />
            </motion.div>
          ))}
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Visitor Experiences</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                What our visitors say about their time at Rithish Farms
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div 
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ 
                    y: -10,
                    scale: 1.02,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                  }}
                  className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-500"
                >
                  <div className="flex items-center mb-4">
                    <motion.div 
                      className="flex-shrink-0"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <div className="h-12 w-12 rounded-full bg-gradient-to-br from-green-100 to-emerald-100 flex items-center justify-center">
                        <Users className="h-6 w-6 text-green-600" />
                      </div>
                    </motion.div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: index * 0.1 + i * 0.1, duration: 0.3 }}
                          >
                            <Star
                              className={`h-4 w-4 ${i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                            />
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <motion.p 
                    className="text-gray-600 italic"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    "{testimonial.comment}"
                  </motion.p>
                  <div className="mt-4 text-sm text-gray-500">
                    {new Date(testimonial.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Location & Contact Section with Map Animation */}
      <section id="contact" ref={contactRef} className="py-20 bg-gradient-to-br from-green-800 via-green-700 to-emerald-800 text-white relative overflow-hidden">
        {/* Animated background elements */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1],
            rotate: 360
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-10 right-10 w-64 h-64 border border-white/20 rounded-full"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.2, 0.1],
            rotate: -360
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-10 left-10 w-48 h-48 border border-white/20 rounded-full"
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-6">Visit Our Farm</h2>
              <p className="text-lg text-green-100 mb-8">
                Located in the heart of countryside, our farm offers a peaceful retreat 
                from city life. Come experience the beauty of sustainable agriculture 
                and connect with nature.
              </p>
              
              <div className="space-y-4">
                {[
                  { icon: MapPin, text: "RORIRI IT PARK, NALLANATHAPURAM, Kalakkad, Keela Karuvelankulam, Tamil Nadu 627502" },
                  { icon: Clock, text: "Open daily 8:00 AM - 6:00 PM" },
                  { icon: Calendar, text: "Weekend tours require advance booking" }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 10, scale: 1.02 }}
                  >
                    <motion.div
                      animate={{ 
                        rotate: [0, 10, -10, 0],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ 
                        duration: 3, 
                        repeat: Infinity, 
                        delay: index * 0.5 
                      }}
                    >
                      <item.icon className="h-5 w-5 text-green-300" />
                    </motion.div>
                    <span>{item.text}</span>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <motion.a
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(255, 255, 255, 0.2)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  href="tel:+1234567890"
                  className="bg-white hover:bg-gray-100 text-green-800 px-8 py-4 rounded-lg font-semibold shadow-lg text-center transition-all duration-300"
                >
                  <motion.span
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    Call Now
                  </motion.span>
                </motion.a>
                <motion.a
                  whileHover={{ 
                    scale: 1.05,
                    backgroundColor: "rgba(255, 255, 255, 0.9)",
                    color: "#065f46"
                  }}
                  whileTap={{ scale: 0.95 }}
                  href="mailto:farm@roriri.com"
                  className="border-2 border-white text-white hover:bg-white hover:text-green-800 px-8 py-4 rounded-lg font-semibold text-center transition-all duration-300"
                >
                  Email Us
                </motion.a>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30, rotateY: 45 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <motion.div
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 25px 50px rgba(0,0,0,0.3)"
                }}
                className="aspect-w-16 aspect-h-12 rounded-xl overflow-hidden shadow-xl relative"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3945.7316047800564!2d77.580824!3d8.5254176!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b04692c8b82209f%3A0xa00060055fec4e1!2sRORIRI%20SOFTWARE%20SOLUTIONS%20PVT.LTD.!5e0!3m2!1sta!2sin!4v1754287507696!5m2!1sta!2sin" 
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Farm Location Map"
                  className="rounded-xl"
                ></iframe>
                
                {/* Map overlay with floating pin */}
                <motion.div
                  animate={{
                    y: [-5, 5, -5],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg"
                >
                  <MapPin className="w-6 h-6 text-green-600" />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
        
        {/* Floating contact elements */}
        <motion.div
          animate={{
            rotate: 360,
            y: [-20, 20, -20]
          }}
          transition={{
            rotate: { duration: 25, repeat: Infinity, ease: "linear" },
            y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute bottom-20 right-20 text-green-300 opacity-30"
        >
          <Heart className="w-8 h-8" />
        </motion.div>
      </section>

      {/* Final floating nature elements overlay */}
      <div className="fixed bottom-0 left-0 w-full h-32 pointer-events-none z-30 overflow-hidden">
        <motion.div
          animate={{
            x: ['-100%', '100%']
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear'
          }}
          className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent opacity-50"
        />
        
        {/* Grass-like elements at bottom */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bottom-0"
            style={{ left: `${i * 5}%` }}
            animate={{
              scaleY: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.1,
              ease: "easeInOut"
            }}
          >
            <div 
              className="bg-green-400 opacity-40"
              style={{
                width: '2px',
                height: `${20 + Math.random() * 20}px`,
                transformOrigin: 'bottom'
              }}
            />
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default RithishFarms;