import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import { Factory, Users, Calendar, MapPin, Clock, ArrowRight, Phone, Mail, Globe, Star, Home, Moon, Sun, Fish, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const IndustrialVisits = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const oceanRef = useRef(null);
  
  // Footer data
  const currentYear = new Date().getFullYear();
  const phoneNumber = "(+91) 7338941579";
  
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
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  // Mouse tracking for ocean creatures
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 700 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    if (darkMode) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [darkMode, mouseX, mouseY]);

  const visitPrograms = [
    {
      id: 1,
      title: 'IT Company Tour',
      description: 'Dive into the world of top IT companies, explore cutting-edge tech, and vibe with their dynamic work culture!',
      duration: '4 hours',
      icon: <Factory className="h-8 w-8 text-blue-600" />,
      highlights: ['Behind-the-scenes tech action', 'Chat with IT pros', 'Build your network'],
      image: 'https://images.unsplash.com/photo-1516321310762-47d40e73e31b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80'
    },
    {
      id: 2,
      title: 'Startup Ecosystem Visit',
      description: 'Get inspired by innovative startups and learn how to launch your own tech venture!',
      duration: '5 hours',
      icon: <Users className="h-8 w-8 text-green-600" />,
      highlights: ['Meet startup founders', 'Discover growth hacks', 'Learn entrepreneurial skills'],
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2b6e3c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80'
    },
    {
      id: 3,
      title: 'Tech Manufacturing Unit',
      description: 'Witness how tech gadgets are born, from design to production, in state-of-the-art facilities.',
      duration: '6 hours',
      icon: <Factory className="h-8 w-8 text-purple-600" />,
      highlights: ['Tour production lines', 'Explore quality control', 'Peek into R&D labs'],
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80'
    },
    {
      id: 4,
      title: 'Data Center Exploration',
      description: 'Step into the heart of the internet with exclusive access to massive data centers!',
      duration: '3 hours',
      icon: <Factory className="h-8 w-8 text-orange-600" />,
      highlights: ['See server rooms', 'Learn about cybersecurity', 'Understand cloud tech'],
      image: 'https://images.unsplash.com/photo-1544197150-b99a7a8f2356?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80'
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Dr. Sanjay Kumar',
      role: 'Professor, Computer Science',
      quote: 'Roriri IT Park\'s visits are a game-changer for students, blending academics with real-world tech exposure!',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    },
    {
      id: 2,
      name: 'Priya Sharma',
      role: 'Student, MBA Tech',
      quote: 'The data center tour was mind-blowing! Seeing enterprise tech up close was unreal.',
      rating: 4,
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    },
    {
      id: 3,
      name: 'Rahul Mehta',
      role: 'Head of Department, IT',
      quote: 'Super organized and inspiring! These visits spark curiosity and ambition in students.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    }
  ];

  const oceanCreatures = [
    { id: 1, emoji: '🐠', delay: 0.1, distance: 50 },
    { id: 2, emoji: '🐟', delay: 0.2, distance: 80 },
    { id: 3, emoji: '🦈', delay: 0.15, distance: 120 },
    { id: 4, emoji: '🐙', delay: 0.3, distance: 70 },
    { id: 5, emoji: '🦀', delay: 0.25, distance: 90 },
    { id: 6, emoji: '🐠', delay: 0.18, distance: 110 },
    { id: 7, emoji: '🐡', delay: 0.22, distance: 60 },
    { id: 8, emoji: '🦑', delay: 0.28, distance: 100 },
  ];

  const renderStars = (count) => {
    return Array(count).fill().map((_, i) => (
      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
    ));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 300
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const pulseVariants = {
    animate: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const OceanBackground = () => (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Ocean gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900 via-blue-800 to-blue-950"></div>
      
      {/* Animated waves */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-0 w-full h-full opacity-20"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%']
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg width='100' height='20' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='m0 20c5-5 10-10 20-10s15 5 20 10 10 10 20 10 15-5 20-10 10-10 20-10 15 5 20 10v0h-100z' fill='%23ffffff'/%3e%3c/svg%3e")`,
            backgroundRepeat: 'repeat-x',
            backgroundSize: '200px 40px'
          }}
        />
      </div>

      {/* Floating bubbles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-blue-300 rounded-full opacity-40"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0.4, 0.8, 0.4],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Sea creatures following cursor */}
      {oceanCreatures.map((creature) => (
        <motion.div
          key={creature.id}
          className="absolute text-2xl pointer-events-none"
          animate={{
            x: mousePosition.x - creature.distance + Math.sin(Date.now() * 0.001 + creature.id) * 20,
            y: mousePosition.y - creature.distance + Math.cos(Date.now() * 0.001 + creature.id) * 15,
            rotate: [0, 10, -10, 0]
          }}
          transition={{
            type: "spring",
            damping: 25,
            stiffness: 200,
            delay: creature.delay,
          }}
        >
          {creature.emoji}
        </motion.div>
      ))}
    </div>
  );

  return (
    <div className={`min-h-screen transition-all duration-500 ${darkMode ? 'dark' : ''}`}>
      {/* Ocean Background for Dark Mode */}
      <AnimatePresence>
        {darkMode && <OceanBackground />}
      </AnimatePresence>

      {/* Dark Mode Toggle */}
      <motion.div 
        className="fixed top-4 left-4 z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 ${
            darkMode 
              ? 'bg-yellow-400 text-gray-900 shadow-lg shadow-yellow-400/25' 
              : 'bg-gray-800 text-yellow-400 shadow-lg'
          }`}
        >
          <motion.div
            animate={{ rotate: darkMode ? 180 : 0 }}
            transition={{ duration: 0.5 }}
          >
            {darkMode ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
          </motion.div>
        </button>
      </motion.div>

      

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className={`relative overflow-hidden ${
          darkMode 
            ? 'bg-transparent text-white' 
            : 'bg-gray-900 text-white'
        }`}
      >
        {!darkMode && (
          <>
            <div className="absolute inset-0 bg-black opacity-60"></div>
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80')] bg-cover bg-center"></div>
          </>
        )}
        
        <div className={`relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 ${darkMode ? 'z-10' : ''}`}>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center space-y-8"
          >
            <motion.div 
              variants={itemVariants}
              {...floatingVariants}
              className={`inline-flex items-center justify-center w-24 h-24 rounded-full mb-6 ${
                darkMode 
                  ? 'bg-blue-500/30 backdrop-blur-sm border border-blue-400/30' 
                  : 'bg-blue-600'
              }`}
            >
              <Factory className="h-12 w-12 text-white" />
            </motion.div>
            
                         <motion.h1 
               variants={itemVariants}
               className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight leading-tight"
               style={{ fontFamily: "'Poppins', sans-serif" }}
             >
               Industrial{' '}
               <motion.span 
                 className={`${darkMode ? 'text-blue-300' : 'text-blue-400'} font-black`}
                 animate={{ 
                   textShadow: darkMode ? ['0 0 10px #93c5fd', '0 0 20px #3b82f6', '0 0 10px #93c5fd'] : 'none'
                 }}
                 transition={{ duration: 2, repeat: Infinity }}
               >
                 Visits
               </motion.span>
             </motion.h1>
            
                         <motion.p 
               variants={itemVariants}
               className={`text-lg sm:text-xl lg:text-2xl max-w-4xl mx-auto font-medium leading-relaxed ${
                 darkMode ? 'text-blue-100' : 'text-gray-300'
               }`}
               style={{ fontFamily: "'Inter', sans-serif" }}
             >
               Epic tech tours for college students to explore the IT world and kickstart their careers!
             </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap justify-center gap-6 mt-12"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`px-8 py-4 rounded-lg font-medium transition-all duration-300 ${
                  darkMode 
                    ? 'bg-blue-500/80 backdrop-blur-sm hover:bg-blue-600/80 text-white border border-blue-400/30 shadow-lg shadow-blue-500/25' 
                    : 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg'
                }`}
              >
                Explore Programs
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`px-8 py-4 rounded-lg font-medium transition-all duration-300 ${
                  darkMode 
                    ? 'border-2 border-blue-300/50 text-blue-100 hover:bg-blue-500/20 backdrop-blur-sm' 
                    : 'border-2 border-white text-white hover:bg-white hover:text-gray-900'
                }`}
              >
                Book a Visit
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className={`py-20 ${
          darkMode 
            ? 'bg-transparent text-white relative z-10' 
            : 'bg-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:justify-between">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:w-1/2 mb-12 lg:mb-0"
            >
                             <motion.h2 
                 variants={itemVariants}
                 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-8 tracking-tight leading-tight ${
                   darkMode ? 'text-white' : 'text-gray-900'
                 }`}
                 style={{ fontFamily: "'Poppins', sans-serif" }}
               >
                 Why Our{' '}
                 <motion.span 
                   className={`${darkMode ? 'text-blue-300' : 'text-blue-600'} font-black`}
                   animate={darkMode ? { 
                     textShadow: ['0 0 10px #93c5fd', '0 0 20px #3b82f6', '0 0 10px #93c5fd']
                   } : {}}
                   transition={{ duration: 2, repeat: Infinity }}
                 >
                   Industrial Visits
                 </motion.span>{' '}
                 Rock
               </motion.h2>
              
                             <motion.p 
                 variants={itemVariants}
                 className={`text-base sm:text-lg mb-8 leading-relaxed font-normal ${
                   darkMode ? 'text-blue-100' : 'text-gray-600'
                 }`}
                 style={{ fontFamily: "'Inter', sans-serif" }}
               >
                 Yo, college students! Roriri IT Park's industrial visits are your ticket to the real tech world. From coding hubs to manufacturing floors, we've got the ultimate experiences to level up your skills and inspire your career.
               </motion.p>
              
              <motion.div variants={itemVariants} className="space-y-6">
                {[
                  { title: 'Real-World Vibes:', desc: 'See how your classroom knowledge comes to life' },
                  { title: 'Connect & Grow:', desc: 'Network with tech pros and future employers' },
                  { title: 'Career Hacks:', desc: 'Discover your dream job in the tech world' }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-start"
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.div 
                      className={`flex-shrink-0 mt-1 ${
                        darkMode ? 'bg-blue-500/30 text-blue-300 border border-blue-400/30' : 'bg-blue-100 text-blue-600'
                      } flex items-center justify-center h-8 w-8 rounded-full`}
                      whileHover={{ scale: 1.2, rotate: 90 }}
                    >
                      <ArrowRight className="h-4 w-4" />
                    </motion.div>
                                         <div className="ml-4">
                       <p className={`${darkMode ? 'text-blue-100' : 'text-gray-600'} leading-relaxed`} style={{ fontFamily: "'Inter', sans-serif" }}>
                         <span className={`font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                           {item.title}
                         </span>{' '}
                         {item.desc}
                       </p>
                     </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
            
            <motion.div
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:w-1/2 lg:pl-12"
            >
              <motion.div 
                className={`rounded-xl p-8 border ${
                  darkMode 
                    ? 'bg-blue-900/20 backdrop-blur-sm border-blue-400/30' 
                    : 'bg-gray-50 border-gray-200'
                }`}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                                 <h3 className={`text-xl font-bold mb-6 tracking-tight ${
                   darkMode ? 'text-white' : 'text-gray-900'
                 }`} style={{ fontFamily: "'Poppins', sans-serif" }}>
                   What's in Store
                 </h3>
                <div className="space-y-6">
                  {[
                    { icon: Users, title: 'Meet the Pros', desc: 'Live Q&A with tech gurus and industry insiders', color: 'blue' },
                    { icon: MapPin, title: 'Cool Locations', desc: 'Visit top IT hubs, startups, and factories', color: 'green' },
                    { icon: Calendar, title: 'Flexible Vibes', desc: 'Tours that fit your college schedule', color: 'purple' }
                  ].map((item, index) => (
                    <motion.div 
                      key={index}
                      className="flex items-start"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <motion.div 
                        className={`flex-shrink-0 mt-1 flex items-center justify-center h-10 w-10 rounded-full ${
                          darkMode 
                            ? `bg-${item.color}-500/30 text-${item.color}-300 border border-${item.color}-400/30` 
                            : `bg-${item.color}-100 text-${item.color}-600`
                        }`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <item.icon className="h-5 w-5" />
                      </motion.div>
                                             <div className="ml-4">
                         <h4 className={`text-lg font-bold tracking-tight ${
                           darkMode ? 'text-white' : 'text-gray-900'
                         }`} style={{ fontFamily: "'Poppins', sans-serif" }}>
                           {item.title}
                         </h4>
                         <p className={`mt-1 leading-relaxed ${
                           darkMode ? 'text-blue-100' : 'text-gray-600'
                         }`} style={{ fontFamily: "'Inter', sans-serif" }}>
                           {item.desc}
                         </p>
                       </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Programs Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className={`py-20 ${
          darkMode 
            ? 'bg-transparent relative z-10' 
            : 'bg-gray-50'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
                         <motion.h2 
               variants={itemVariants}
               className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 tracking-tight leading-tight ${
                 darkMode ? 'text-white' : 'text-gray-900'
               }`}
               style={{ fontFamily: "'Poppins', sans-serif" }}
             >
               Our{' '}
               <motion.span 
                 className={`${darkMode ? 'text-blue-300' : 'text-blue-600'} font-black`}
                 animate={darkMode ? { 
                   textShadow: ['0 0 10px #93c5fd', '0 0 20px #3b82f6', '0 0 10px #93c5fd']
                 } : {}}
                 transition={{ duration: 2, repeat: Infinity }}
               >
                 Epic Visit Programs
               </motion.span>
             </motion.h2>
                         <motion.p 
               variants={itemVariants}
               className={`text-lg sm:text-xl max-w-3xl mx-auto font-medium leading-relaxed ${
                 darkMode ? 'text-blue-100' : 'text-gray-600'
               }`}
               style={{ fontFamily: "'Inter', sans-serif" }}
             >
               Awesome tech tours designed just for college students to spark curiosity and ambition!
             </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {visitPrograms.map((program, index) => (
              <motion.div
                key={program.id}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  rotateY: 5,
                }}
                className={`rounded-xl overflow-hidden shadow-lg transition-all duration-300 ${
                  darkMode 
                    ? 'bg-blue-900/20 backdrop-blur-sm border border-blue-400/30' 
                    : 'bg-white'
                }`}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="relative overflow-hidden">
                  <motion.img 
                    src={program.image} 
                    alt={program.title} 
                    className="w-full h-48 object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="absolute inset-0 bg-black opacity-20"></div>
                </div>
                
                <div className="p-6">
                  <motion.div 
                    className={`flex items-center justify-center w-16 h-16 rounded-full mb-6 ${
                      darkMode ? 'bg-blue-500/30 border border-blue-400/30' : 'bg-blue-50'
                    }`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    {program.icon}
                  </motion.div>
                  
                                     <h3 className={`text-xl font-bold mb-3 tracking-tight ${
                     darkMode ? 'text-white' : 'text-gray-900'
                   }`} style={{ fontFamily: "'Poppins', sans-serif" }}>
                     {program.title}
                   </h3>
                  
                                     <p className={`mb-4 leading-relaxed ${
                     darkMode ? 'text-blue-100' : 'text-gray-600'
                   }`} style={{ fontFamily: "'Inter', sans-serif" }}>
                     {program.description}
                   </p>
                  
                  <div className={`flex items-center mb-4 ${
                    darkMode ? 'text-blue-200' : 'text-gray-500'
                  }`}>
                    <Clock className="h-5 w-5 mr-2" />
                    <span>{program.duration}</span>
                  </div>
                  
                  <div className={`border-t pt-4 ${
                    darkMode ? 'border-blue-400/30' : 'border-gray-200'
                  }`}>
                                         <h4 className={`text-sm font-bold uppercase tracking-wider mb-3 ${
                       darkMode ? 'text-blue-300' : 'text-gray-900'
                     }`} style={{ fontFamily: "'Poppins', sans-serif" }}>
                       Highlights
                     </h4>
                    <ul className="space-y-2">
                      {program.highlights.map((highlight, idx) => (
                        <motion.li 
                          key={idx} 
                          className="flex items-start"
                          whileHover={{ x: 5 }}
                        >
                          <div className="flex-shrink-0 mt-1">
                            <div className={`flex items-center justify-center h-4 w-4 rounded-full ${
                              darkMode ? 'bg-blue-500/30 text-blue-300' : 'bg-blue-100 text-blue-600'
                            }`}>
                              <svg className="h-2 w-2" fill="currentColor" viewBox="0 0 8 8">
                                <circle cx="4" cy="4" r="3" />
                              </svg>
                            </div>
                          </div>
                          <div className="ml-3">
                                                         <p className={`text-sm leading-relaxed ${
                               darkMode ? 'text-blue-100' : 'text-gray-600'
                             }`} style={{ fontFamily: "'Inter', sans-serif" }}>
                               {highlight}
                             </p>
                          </div>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className={`px-6 py-4 ${
                  darkMode ? 'bg-blue-900/30 backdrop-blur-sm' : 'bg-gray-50'
                }`}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md transition-colors duration-300 ${
                      darkMode 
                        ? 'text-white bg-blue-500/80 hover:bg-blue-600/80 backdrop-blur-sm border border-blue-400/30' 
                        : 'text-white bg-blue-600 hover:bg-blue-700'
                    }`}
                  >
                    Book This Program
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className={`py-20 ${
          darkMode 
            ? 'bg-transparent relative z-10' 
            : 'bg-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
                         <motion.h2 
               variants={itemVariants}
               className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 tracking-tight leading-tight ${
                 darkMode ? 'text-white' : 'text-gray-900'
               }`}
               style={{ fontFamily: "'Poppins', sans-serif" }}
             >
               What{' '}
               <motion.span 
                 className={`${darkMode ? 'text-blue-300' : 'text-blue-600'} font-black`}
                 animate={darkMode ? { 
                   textShadow: ['0 0 10px #93c5fd', '0 0 20px #3b82f6', '0 0 10px #93c5fd']
                 } : {}}
                 transition={{ duration: 2, repeat: Infinity }}
               >
                 Students & Profs Say
               </motion.span>
             </motion.h2>
                         <motion.p 
               variants={itemVariants}
               className={`text-lg sm:text-xl max-w-3xl mx-auto font-medium leading-relaxed ${
                 darkMode ? 'text-blue-100' : 'text-gray-600'
               }`}
               style={{ fontFamily: "'Inter', sans-serif" }}
             >
               Hear from students and educators who've had a blast on our tech tours!
             </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  y: -10,
                  rotateY: 5 
                }}
                className={`p-8 rounded-xl transition-all duration-300 ${
                  darkMode 
                    ? 'bg-blue-900/20 backdrop-blur-sm border border-blue-400/30' 
                    : 'bg-gray-50'
                }`}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <motion.div 
                  className="flex mb-4"
                  whileHover={{ scale: 1.1 }}
                >
                  {renderStars(testimonial.rating)}
                </motion.div>
                
                                 <blockquote className={`text-lg mb-6 leading-relaxed italic ${
                   darkMode ? 'text-blue-100' : 'text-gray-600'
                 }`} style={{ fontFamily: "'Inter', sans-serif" }}>
                   "{testimonial.quote}"
                 </blockquote>
                
                <div className="flex items-center">
                  <motion.img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full object-cover"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  />
                                     <div className="ml-4">
                     <div className={`font-bold tracking-tight ${
                       darkMode ? 'text-white' : 'text-gray-900'
                     }`} style={{ fontFamily: "'Poppins', sans-serif" }}>
                       {testimonial.name}
                     </div>
                     <div className={`${darkMode ? 'text-blue-300' : 'text-gray-500'} font-medium`} style={{ fontFamily: "'Inter', sans-serif" }}>
                       {testimonial.role}
                     </div>
                   </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Why Students Love Us Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className={`py-20 ${
          darkMode 
            ? 'bg-transparent relative z-10' 
            : 'bg-gray-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
                         <motion.h2 
               variants={itemVariants}
               className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 tracking-tight leading-tight ${
                 darkMode ? 'text-white' : 'text-gray-900'
               }`}
               style={{ fontFamily: "'Poppins', sans-serif" }}
             >
               Why Students{' '}
               <motion.span 
                 className={`${darkMode ? 'text-blue-300' : 'text-blue-600'} font-black`}
                 animate={darkMode ? { 
                   textShadow: ['0 0 10px #93c5fd', '0 0 20px #3b82f6', '0 0 10px #93c5fd']
                 } : {}}
                 transition={{ duration: 2, repeat: Infinity }}
               >
                 Love Our Tours
               </motion.span>
             </motion.h2>
                         <motion.p 
               variants={itemVariants}
               className={`text-lg sm:text-xl max-w-3xl mx-auto font-medium leading-relaxed ${
                 darkMode ? 'text-blue-100' : 'text-gray-600'
               }`}
               style={{ fontFamily: "'Inter', sans-serif" }}
             >
               From epic tech experiences to career-building moments, here's why our visits are a hit with college students!
             </motion.p>
          </motion.div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                title: 'Hands-On Learning',
                desc: 'Get up close with real tech in action and see how your studies apply in the industry.',
                image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80'
              },
              {
                title: 'Network Like a Pro',
                desc: 'Connect with industry experts and build relationships that can launch your career.',
                image: 'https://images.unsplash.com/photo-1516321310762-47d40e73e31b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80'
              },
              {
                title: 'Career Inspiration',
                desc: 'Explore diverse tech roles and find the perfect career path for you.',
                image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80'
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                variants={itemVariants} 
                whileHover={{ 
                  scale: 1.05,
                  y: -10,
                  rotateY: 5 
                }}
                className={`rounded-xl p-6 shadow-lg transition-all duration-300 ${
                  darkMode 
                    ? 'bg-blue-900/20 backdrop-blur-sm border border-blue-400/30' 
                    : 'bg-white'
                }`}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <motion.img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-48 object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="absolute inset-0 bg-black opacity-20"></div>
                </div>
                                 <h3 className={`text-xl font-bold mb-2 tracking-tight ${
                   darkMode ? 'text-white' : 'text-gray-900'
                 }`} style={{ fontFamily: "'Poppins', sans-serif" }}>
                   {item.title}
                 </h3>
                 <p className={`${darkMode ? 'text-blue-100' : 'text-gray-600'} leading-relaxed`} style={{ fontFamily: "'Inter', sans-serif" }}>
                   {item.desc}
                 </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className={`py-20 ${
          darkMode 
            ? 'bg-transparent relative z-10' 
            : 'bg-blue-600'
        } text-white`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                     <motion.h2
             variants={itemVariants}
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true }}
             className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-8 tracking-tight leading-tight"
             style={{ fontFamily: "'Poppins', sans-serif" }}
           >
             Ready for Your{' '}
             <motion.span 
               className={`${darkMode ? 'text-blue-300' : 'text-blue-200'} font-black`}
               animate={darkMode ? { 
                 textShadow: ['0 0 10px #93c5fd', '0 0 20px #3b82f6', '0 0 10px #93c5fd']
               } : {}}
               transition={{ duration: 2, repeat: Infinity }}
             >
               Tech Adventure
             </motion.span>
             ?
           </motion.h2>
          
                     <motion.p
             variants={itemVariants}
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true }}
             className={`text-lg sm:text-xl mb-12 max-w-2xl mx-auto font-medium leading-relaxed ${
               darkMode ? 'text-blue-100' : 'text-blue-100'
             }`}
             style={{ fontFamily: "'Inter', sans-serif" }}
           >
             Join Roriri IT Park's industrial visits and dive into the tech world! Contact us to plan your tour.
           </motion.p>
          
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`px-8 py-4 rounded-lg font-semibold transition-all duration-300 ${
                darkMode 
                  ? 'bg-white/90 text-blue-600 hover:bg-white backdrop-blur-sm shadow-lg shadow-white/25' 
                  : 'bg-white text-blue-600 hover:bg-gray-100'
              }`}
            >
              Get in Touch
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = `tel:${phoneNumber}`}
              className={`px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center ${
                darkMode 
                  ? 'border-2 border-white/50 text-white hover:bg-white/20 backdrop-blur-sm' 
                  : 'border-2 border-white text-white hover:bg-white hover:text-blue-600'
              }`}
            >
              <Phone className="h-5 w-5 mr-2" />
              Call Us Now
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
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

            {/* Company Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                {companyLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link.name}
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
              <p className="text-xs text-gray-500">
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 mt-4 sm:mt-0">
              {/* Back to Home Button */}
              <Link 
                to="/" 
                className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200 text-sm font-medium"
              >
                <Home className="h-4 w-4" />
                <span>	𝐇𝐨𝐦𝐞 </span>
              </Link>
              <div className="flex space-x-6">
                <Link to="/privacy-policy" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">
                  Privacy Policy
                </Link>
                <Link to="/terms-of-service" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">
                  Terms Of Service
                </Link>
                <Link to="/refund-policy" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">
                  Refund Policy
                </Link>
                <Link to="#" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">
                  Go To Top
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default IndustrialVisits;