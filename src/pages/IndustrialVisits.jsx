import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Factory, Users, Calendar, MapPin, Clock, ArrowRight, Phone, Mail, Globe, Star, Home, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

// Import images
import InternshipImage from '../Assets/Internship.jpeg';
import InternImage from '../Assets/Intern.jpeg';
import GiftImage from '../Assets/gift.jpeg';
import ClassImage from '../Assets/Class.jpg';
import IndustrialImage from '../Assets/Industrial.jpg';
import IndustrialVisitImage from '../Assets/IndustrialVisit.jpg';
import IVImage from '../Assets/IV.jpg';
import IVStudentsImage from '../Assets/IV students.jpg';
import IVGuysImage from '../Assets/IV guays.jpg';
import ScadImage from '../Assets/Scad.jpg';

const IndustrialVisits = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
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
    { name: 'Internship', href: '/digital-marketing' },
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/share/1AwRCwxgMT/', label: 'Facebook' },
    { icon: Youtube, href: 'http://www.youtube.com/@Roriri_soft', label: 'Youtube' },
    { icon: Instagram, href: 'https://www.instagram.com/roriri_it_park/', label: 'Instagram' },
    { icon: Linkedin, href: 'https://www.linkedin.com/company/roriri-software-solutions-pvt-ltd/', label: 'LinkedIn' },
  ];

  const visitPrograms = [
    {
      id: 1,
      title: 'IT Company Tour',
      description: 'Dive into the world of top IT companies, explore cutting-edge tech, and vibe with their dynamic work culture!',
      duration: '4 hours',
      icon: <Factory className="h-8 w-8 text-blue-600" />,
      highlights: ['Behind-the-scenes tech action', 'Chat with IT pros', 'Build your network'],
      image: IVImage
    },
    {
      id: 2,
      title: 'Startup Ecosystem Visit',
      description: 'Get inspired by innovative startups and learn how to launch your own tech venture!',
      duration: '5 hours',
      icon: <Users className="h-8 w-8 text-green-600" />,
      highlights: ['Meet startup founders', 'Discover growth hacks', 'Learn entrepreneurial skills'],
      image: ClassImage
    },
    {
      id: 3,
      title: 'Tech Manufacturing Unit',
      description: 'Witness how tech gadgets are born, from design to production, in state-of-the-art facilities.',
      duration: '6 hours',
      icon: <Factory className="h-8 w-8 text-purple-600" />,
      highlights: ['Tour production lines', 'Explore quality control', 'Peek into R&D labs'],
      image: IndustrialImage
    },
    {
      id: 4,
      title: 'Data Center Exploration',
      description: 'Step into the heart of the internet with exclusive access to massive data centers!',
      duration: '3 hours',
      icon: <Factory className="h-8 w-8 text-orange-600" />,
      highlights: ['See server rooms', 'Learn about cybersecurity', 'Understand cloud tech'],
      image: IndustrialVisitImage
    },
    {
      id: 5,
      title: 'Internship Program',
      description: 'Transition from classroom to career with our immersive internship opportunities',
      duration: '1-6 months',
      icon: <Users className="h-8 w-8 text-yellow-600" />,
      highlights: ['Real-world projects', 'Mentorship', 'Career preparation'],
      image: InternshipImage
    },
    {
      id: 6,
      title: 'Intern Experience',
      description: 'See what our interns have accomplished during their time with us',
      duration: 'Flexible',
      icon: <Users className="h-8 w-8 text-green-600" />,
      highlights: ['Project showcase', 'Testimonials', 'Career growth'],
      image: InternImage
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Nambirajan',
      role: 'Professor, Computer Science',
      quote: 'Roriri IT Park\'s visits are a game-changer for students, blending academics with real-world tech exposure!',
      rating: 5,
    },
    {
      id: 2,
      name: 'Pavithran',
      role: 'Student, MBA Tech',
      quote: 'The data center tour was mind-blowing! Seeing enterprise tech up close was unreal.',
      rating: 4,
    },
    {
      id: 3,
      name: 'Rahul',
      role: 'Head of Department, IT',
      quote: 'Super organized and inspiring! These visits spark curiosity and ambition in students.',
      rating: 5,
    }
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

  const buttonVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.05,
      y: -3,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    tap: { scale: 0.95 }
  };

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative overflow-hidden bg-gray-900 text-white"
      >
         {/* Background with shadow effect */}
  <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 opacity-95"></div>
  <motion.img 
    src={ScadImage} 
    alt="Background" 
    className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1.5 }}
    transition={{ duration: 2.5 }}
  />
        
        {/* Home Button */}
        <div className="absolute top-6 right-6 z-10">
          <Link to="/">
            <motion.button
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
              className="px-6 py-2 rounded-lg font-medium transition-all duration-300 bg-blue-600 text-white hover:bg-blue-700 flex items-center shadow-lg"
            >
              <Home className="h-5 w-5 mr-2" />
              Home
            </motion.button>
          </Link>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center space-y-8"
          >
            <motion.div 
              variants={itemVariants}
              {...floatingVariants}
              className="inline-flex items-center justify-center w-24 h-24 rounded-full mb-6 bg-blue-600"
            >
              <Factory className="h-12 w-12 text-white" />
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight leading-tight"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Industrial{' '}
              <span className="text-blue-400 font-black">
                Visits & Internships
              </span>
            </motion.h1>
            
            <motion.p 
  variants={itemVariants}
  className="text-lg sm:text-xl lg:text-2xl max-w-4xl mx-auto font-medium leading-relaxed text-gray-200 italic"
  style={{ fontFamily: "'Inter', sans-serif" }}
>
  Epic tech tours and internship programs for college students to explore the IT world and kickstart their careers!
</motion.p>

            {/* Internship Images */}
            <motion.div 
              variants={itemVariants}
              className="flex justify-center gap-4 my-8"
            >
              <motion.img
                src={IVStudentsImage}
                alt="Students on Industrial Visit"
                className="w-1/2 max-w-xs rounded-lg shadow-xl border-2 border-white/20"
                whileHover={{ scale: 1.05 }}
              />
              <motion.img
                src={IVGuysImage}
                alt="Group Industrial Visit"
                className="w-1/2 max-w-xs rounded-lg shadow-xl border-2 border-white/20"
                whileHover={{ scale: 1.05 }}
              />
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap justify-center gap-6 mt-12"
            >
<motion.button
  variants={buttonVariants}
  initial="initial"
  whileHover="hover"
  whileTap="tap"
  onClick={() => {
    const programsSection = document.getElementById('programs-section');
    programsSection.scrollIntoView({ behavior: 'smooth' });
  }}
  className="button appearance-none relative border-0 p-0 min-w-[10em] box-border bg-transparent font-inherit cursor-pointer"
>
  <motion.span 
    className="button-top flex items-center justify-center relative z-0 px-4 py-2 transform translate-y-0 text-center text-white"
    whileTap={{ translateY: 6 }}
  >
    <motion.span 
      className="absolute z-[-1] rounded-[4px] w-full h-full box-border bg-gradient-to-r from-blue-600 to-blue-700 text-center text-white"
      whileTap={{ borderRadius: "6px", padding: "0 2px" }}
      style={{
        boxShadow: "inset 0 0 0px 1px rgba(255, 255, 255, .2), 0 1px 2px 1px rgba(255, 255, 255, .2)"
      }}
    />
    <span className="flex items-center justify-center">
      <ArrowRight className="h-5 w-5 mr-2 transition-transform duration-300 group-hover:translate-x-1" />
      Explore more
    </span>
  </motion.span>
  
  <span className="button-bottom absolute z-[-1] bottom-1 left-1 rounded-[8px/16px_16px_8px_8px] pt-1.5 w-[calc(100%-8px)] h-[calc(100%-10px)] box-border bg-blue-800"></span>
  <span className="button-base absolute z-[-2] top-1 left-0 rounded-xl w-full h-[calc(100%-4px)] bg-[rgba(0,0,0,0.15)]"></span>
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
        className="py-20 bg-white"
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
                className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-8 tracking-tight leading-tight text-gray-900"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Why Our{' '}
                <span className="text-blue-600 font-black">
                  Programs
                </span>{' '}
                Rock
              </motion.h2>
              
              <motion.p 
                variants={itemVariants}
                className="text-base sm:text-lg mb-8 leading-relaxed font-normal text-gray-600"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Yo, college students! Roriri IT Park's industrial visits and internship programs are your ticket to the real tech world. From coding hubs to manufacturing floors, we've got the ultimate experiences to level up your skills and inspire your career.
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
                      className="flex-shrink-0 mt-1 bg-blue-100 text-blue-600 flex items-center justify-center h-8 w-8 rounded-full"
                      whileHover={{ scale: 1.2, rotate: 90 }}
                    >
                      <ArrowRight className="h-4 w-4" />
                    </motion.div>
                    <div className="ml-4">
                      <p className="text-gray-600 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                        <span className="font-bold text-gray-900">
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
                className="rounded-xl p-8 bg-gray-50 border-gray-200 border"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h3 className="text-xl font-bold mb-6 tracking-tight text-gray-900" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  What's in Store
                </h3>
                <div className="space-y-6">
                  {[
                    { icon: Users, title: 'Meet the Pros', desc: 'Live Q&A with tech gurus and industry insiders', color: 'blue' },
                    { icon: MapPin, title: 'Cool Locations', desc: 'Visit top IT hubs, startups, and factories', color: 'green' },
                    { icon: Calendar, title: 'Flexible Vibes', desc: 'Programs that fit your college schedule', color: 'purple' }
                  ].map((item, index) => (
                    <motion.div 
                      key={index}
                      className="flex items-start"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <motion.div 
                        className={`flex-shrink-0 mt-1 flex items-center justify-center h-10 w-10 rounded-full bg-${item.color}-100 text-${item.color}-600`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <item.icon className="h-5 w-5" />
                      </motion.div>
                      <div className="ml-4">
                        <h4 className="text-lg font-bold tracking-tight text-gray-900" style={{ fontFamily: "'Poppins', sans-serif" }}>
                          {item.title}
                        </h4>
                        <p className="mt-1 leading-relaxed text-gray-600" style={{ fontFamily: "'Inter', sans-serif" }}>
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
        id="programs-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-20 bg-gray-50"
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
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 tracking-tight leading-tight text-gray-900"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Our{' '}
              <span className="text-blue-600 font-black">
                Epic Programs
              </span>
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-lg sm:text-xl max-w-3xl mx-auto font-medium leading-relaxed text-gray-600"
              style={{ fontFamily: "'Inter', sans-serif" }}>
              Awesome tech tours and internship programs designed just for college students to spark curiosity and ambition!
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
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
                className="rounded-xl overflow-hidden shadow-lg transition-all duration-300 bg-white"
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
                    className="flex items-center justify-center w-16 h-16 rounded-full mb-6 bg-blue-50"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    {program.icon}
                  </motion.div>
                  
                  <h3 className="text-xl font-bold mb-3 tracking-tight text-gray-900" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    {program.title}
                  </h3>
                  
                  <p className="mb-4 leading-relaxed text-gray-600" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {program.description}
                  </p>
                  
                  <div className="flex items-center mb-4 text-gray-500">
                    <Clock className="h-5 w-5 mr-2" />
                    <span>{program.duration}</span>
                  </div>
                  
                  <div className="border-t pt-4 border-gray-200">
                    <h4 className="text-sm font-bold uppercase tracking-wider mb-3 text-gray-900" style={{ fontFamily: "'Poppins', sans-serif" }}>
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
                            <div className="flex items-center justify-center h-4 w-4 rounded-full bg-blue-100 text-blue-600">
                              <svg className="h-2 w-2" fill="currentColor" viewBox="0 0 8 8">
                                <circle cx="4" cy="4" r="3" />
                              </svg>
                            </div>
                          </div>
                          <div className="ml-3">
                            <p className="text-sm leading-relaxed text-gray-600" style={{ fontFamily: "'Inter', sans-serif" }}>
                              {highlight}
                            </p>
                          </div>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
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
        className="py-20 bg-white"
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
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 tracking-tight leading-tight text-gray-900"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              What{' '}
              <span className="text-blue-600 font-black">
                Participants Say
              </span>
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-lg sm:text-xl max-w-3xl mx-auto font-medium leading-relaxed text-gray-600"
              style={{ fontFamily: "'Inter', sans-serif" }}>
              Hear from students and educators who've had a blast on our tech tours and internship programs!
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
                className="p-8 rounded-xl transition-all duration-300 bg-gray-50"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <motion.div 
                  className="flex mb-4"
                  whileHover={{ scale: 1.1 }}
                >
                  {renderStars(testimonial.rating)}
                </motion.div>
                
                <blockquote className="text-lg mb-6 leading-relaxed italic text-gray-600" style={{ fontFamily: "'Inter', sans-serif" }}>
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="flex items-center">
                  <div className="ml-4">
                    <div className="font-bold tracking-tight text-gray-900" style={{ fontFamily: "'Poppins', sans-serif" }}>
                      {testimonial.name}
                    </div>
                    <div className="text-gray-500 font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
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
        className="py-20 bg-gray-100"
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
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 tracking-tight leading-tight text-gray-900"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Why Students{' '}
              <span className="text-blue-600 font-black">
                Love Our Programs
              </span>
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-lg sm:text-xl max-w-3xl mx-auto font-medium leading-relaxed text-gray-600"
              style={{ fontFamily: "'Inter', sans-serif" }}>
              From epic tech experiences to career-building moments, here's why our programs are a hit with college students!
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
                image: GiftImage
              },
              {
                title: 'Network Like a Pro',
                desc: 'Connect with industry experts and build relationships that can launch your career.',
                image: IVStudentsImage
              },
              {
                title: 'Career Inspiration',
                desc: 'Explore diverse tech roles and find the perfect career path for you.',
                image: IVGuysImage
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
                className="rounded-xl p-6 shadow-lg transition-all duration-300 bg-white"
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
                <h3 className="text-xl font-bold mb-2 tracking-tight text-gray-900" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
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
        className="py-20 bg-blue-600 text-white"
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
            <span className="text-blue-200 font-black">
              Tech Adventure
            </span>
            ?
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-lg sm:text-xl mb-12 max-w-2xl mx-auto font-medium leading-relaxed text-blue-100"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Join Roriri IT Park's industrial visits and internship programs to dive into the tech world! Contact us to get started.
          </motion.p>
          
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <motion.button
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
              onClick={() => window.location.href = `tel:${phoneNumber}`}
              className="px-8 py-4 rounded-lg font-semibold transition-all duration-300 border-2 border-white text-white hover:bg-white hover:text-blue-600 flex items-center justify-center shadow-lg"
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
            </div>

            {/* Our Businesses */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Our Organizations</h3>
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
          <div className="border-t border-gray-800 mt-8 pt-8">
            <div className="text-center">
              <p className="text-sm text-gray-400">
                © {currentYear} Roriri. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default IndustrialVisits;