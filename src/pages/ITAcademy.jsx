import React, { useState, useEffect, useRef } from 'react';
import { Sun, Moon, Star, Code, Database, Cloud, Smartphone, Globe, Shield, Menu, X, ChevronRight, Users, Award, BookOpen, Play, Home, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Fullstack from './Fullstack';
import CloudComputing from './Cloudcomputing';
import Cybersecurity from './Cybersecurity';
import MobileAppDevelopment from './Mobileapp';
import UIUXDesign from './Uiux';
import DataScience from './Datascience';
import NexGenLogo from '../Assets/NexGen.png';

const ITAcademy = () => {
  const navigate = useNavigate();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [stars, setStars] = useState([]);
  const [currentPage, setCurrentPage] = useState('home');
  const canvasRef = useRef(null);
  const contactRef = useRef(null);

  // Generate random stars for night sky
  useEffect(() => {
    const generateStars = () => {
      const newStars = [];
      for (let i = 0; i < 100; i++) {
        newStars.push({
          id: i,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 2 + 1,
          opacity: Math.random() * 0.8 + 0.2,
          twinkleSpeed: Math.random() * 0.02 + 0.01
        });
      }
      setStars(newStars);
    };

    generateStars();
    window.addEventListener('resize', generateStars);
    return () => window.removeEventListener('resize', generateStars);
  }, []);

  // Mouse tracking for star following effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    if (isDarkMode) {
      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }
  }, [isDarkMode]);

  // Animated stars canvas
  useEffect(() => {
    if (!isDarkMode || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let animationId;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      stars.forEach((star) => {
        const distance = Math.sqrt(
          Math.pow(mousePosition.x - star.x, 2) + Math.pow(mousePosition.y - star.y, 2)
        );
        
        // Stars follow cursor when close
        if (distance < 150) {
          const angle = Math.atan2(mousePosition.y - star.y, mousePosition.x - star.x);
          star.x += Math.cos(angle) * 0.5;
          star.y += Math.sin(angle) * 0.5;
        }

        // Twinkling effect
        star.opacity += Math.sin(Date.now() * star.twinkleSpeed) * 0.1;
        star.opacity = Math.max(0.2, Math.min(1, star.opacity));

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.fill();
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationId);
  }, [isDarkMode, stars, mousePosition]);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const navigateTo = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
    setIsMenuOpen(false); // Close mobile menu when navigating
  };

  const goBackToHome = () => {
    setCurrentPage('home');
  };

  const courses = [
    {
      title: "Full Stack Development",
      description: "Master MERN stack, Next.js, and modern web development practices",
      icon: <Code className="w-8 h-8" />,
      duration: "6 months",
      level: "Beginner to Advanced",
      color: "from-blue-500 to-indigo-600",
      component: <Fullstack />
    },
    {
      title: "Data Science & AI",
      description: "Python, Machine Learning, Deep Learning, and Data Analytics",
      icon: <Database className="w-8 h-8" />,
      duration: "8 months",
      level: "Intermediate",
      color: "from-purple-500 to-pink-600",
      component: <DataScience />
    },
    {
      title: "Cloud Computing",
      description: "AWS, Azure, Google Cloud, DevOps, and Kubernetes mastery",
      icon: <Cloud className="w-8 h-8" />,
      duration: "5 months",
      level: "Intermediate to Advanced",
      color: "from-green-500 to-teal-600",
      component: <CloudComputing />
    },
    {
      title: "Mobile App Development",
      description: "React Native, Flutter, iOS and Android development",
      icon: <Smartphone className="w-8 h-8" />,
      duration: "6 months",
      level: "Beginner to Advanced",
      color: "from-orange-500 to-red-600",
      component: <MobileAppDevelopment />
    },
    {
      title: "UI/UX Design",
      description: "Figma, Adobe XD, User Research, and Design Systems",
      icon: <Globe className="w-8 h-8" />,
      duration: "4 months",
      level: "Beginner",
      color: "from-pink-500 to-rose-600",
      component: <UIUXDesign />
    },
    {
      title: "Cybersecurity",
      description: "Ethical Hacking, Network Security, and Digital Forensics",
      icon: <Shield className="w-8 h-8" />,
      duration: "7 months",
      level: "Intermediate",
      color: "from-gray-600 to-gray-800",
      component: <Cybersecurity />
    }
  ];

  const features = [
    {
      icon: <Users className="w-12 h-12" />,
      title: "Expert Instructors",
      description: "Learn from industry professionals with 10+ years experience"
    },
    {
      icon: <Award className="w-12 h-12" />,
      title: "Industry Certifications",
      description: "Get certified by top tech companies and boost your career"
    },
    {
      icon: <BookOpen className="w-12 h-12" />,
      title: "Hands-on Projects",
      description: "Build real-world projects for your professional portfolio"
    },
    {
      icon: <Play className="w-12 h-12" />,
      title: "Live Sessions",
      description: "Interactive live classes with Q&A and peer collaboration"
    }
  ];

  const renderCurrentPage = () => {
    if (currentPage === 'home') {
      return (
        <>
          {/* Hero Section */}
          <section id="home" className={`relative min-h-screen flex items-center justify-center ${isDarkMode ? 'text-white' : 'text-gray-900'} pt-16 overflow-hidden`}>
            {/* Light Mode Background */}
            {!isDarkMode && (
              <>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"></div>
                <div 
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                  }}
                ></div>
                {/* Floating geometric shapes for light mode */}
                <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-30 animate-pulse"></div>
                <div className="absolute top-40 right-20 w-16 h-16 bg-purple-200 rounded-full opacity-40 animate-bounce"></div>
                <div className="absolute bottom-32 left-20 w-12 h-12 bg-indigo-200 rounded-full opacity-50"></div>
                <div className="absolute bottom-20 right-32 w-24 h-24 bg-pink-200 rounded-full opacity-30 animate-ping"></div>
              </>
            )}
            
            <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
              <div className="mb-8">
                <span className={`inline-block px-4 py-2 rounded-full text-sm font-medium ${isDarkMode ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30' : 'bg-blue-100 text-blue-700 border border-blue-200'} backdrop-blur-sm`}>
                  🚀 Transform Your Career Today
                </span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Master the <span className={`${isDarkMode ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400' : 'text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600'}`}>Future</span> of Technology
              </h1>
              
              <p className={`text-xl md:text-2xl mb-12 max-w-3xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>
                Join 10,000+ students who've launched successful tech careers with our industry-leading programs and expert mentorship
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                
                <a href="#courses" className={`px-8 py-4 border-2 ${isDarkMode ? 'border-white hover:bg-white hover:text-gray-900' : 'border-gray-800 hover:bg-gray-800 hover:text-white'} font-bold rounded-lg transition-all duration-300 backdrop-blur-sm text-center`}>
                  View Courses
                </a>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className={`py-20 ${isDarkMode ? 'bg-gray-900/50' : 'bg-gray-50'}`}>
            <div className="max-w-7xl mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {[
                  { number: "10,000+", label: "Students Trained", icon: "👥" },
                  { number: "95%", label: "Job Placement", icon: "💼" },
                  { number: "50+", label: "Industry Partners", icon: "🤝" },
                  { number: "24/7", label: "Learning Support", icon: "🎯" }
                ].map((stat, index) => (
                  <div
                    key={index}
                    className={`${isDarkMode ? 'bg-gray-800/50 backdrop-blur-md border-gray-700' : 'bg-white'} p-8 rounded-xl shadow-lg text-center hover:scale-105 transition-all duration-300 border`}
                  >
                    <div className="text-4xl mb-4">{stat.icon}</div>
                    <h3 className={`text-4xl font-bold mb-2 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                      {stat.number}
                    </h3>
                    <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} text-lg`}>
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Courses Section */}
          <section id="courses" className={`py-20 ${isDarkMode ? 'bg-transparent' : 'bg-white'}`}>
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className={`text-5xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Our <span className={`${isDarkMode ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400' : 'text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600'}`}>Premium Courses</span>
                </h2>
                <p className={`text-xl max-w-3xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Cutting-edge programs designed by industry experts to make you job-ready
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {courses.map((course, index) => (
                  <div
                    key={index}
                    className={`group ${isDarkMode ? 'bg-gray-800/50 backdrop-blur-md border-gray-700 hover:border-blue-500/50' : 'bg-white border-gray-200 hover:border-blue-300'} p-8 rounded-xl border transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl`}
                    onClick={() => navigateTo(course.title)}
                  >
                    <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${course.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`}>
                      {course.icon}
                    </div>
                    
                    <h3 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      {course.title}
                    </h3>
                    
                    <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-6 leading-relaxed`}>
                      {course.description}
                    </p>
                    
                    <div className="flex justify-between items-center mb-6">
                      <div>
                        <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Duration</p>
                        <p className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{course.duration}</p>
                      </div>
                      <div>
                        <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Level</p>
                        <p className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{course.level}</p>
                      </div>
                    </div>
                    
                    <button className={`w-full py-3 ${isDarkMode ? 'bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700' : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700'} text-white font-semibold rounded-lg transition-all duration-300 flex items-center justify-center group`}>
                      Learn More
                      <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* About Section */}
          <section id="about" className={`py-20 ${isDarkMode ? 'bg-gray-900/50' : 'bg-gray-50'}`}>
            <div className="max-w-7xl mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <h2 className={`text-4xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    About NEXGEN IT Academy
                  </h2>
                  <p className="text-lg mb-6">
                    Founded in 2015, NEXGEN IT Academy has been at the forefront of technology education, 
                    empowering thousands of students with cutting-edge skills and industry-relevant knowledge.
                  </p>
                  <p className="text-lg mb-6">
                    Our mission is to bridge the gap between academia and industry by providing hands-on training 
                    with real-world projects, guided by experienced professionals who are passionate about teaching.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className={`flex-shrink-0 mt-1 mr-4 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                        <ChevronRight className="w-5 h-5" />
                      </div>
                      <p>State-of-the-art curriculum updated every 6 months</p>
                    </div>
                    <div className="flex items-start">
                      <div className={`flex-shrink-0 mt-1 mr-4 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                        <ChevronRight className="w-5 h-5" />
                      </div>
                      <p>1:1 mentorship and career guidance</p>
                    </div>
                    <div className="flex items-start">
                      <div className={`flex-shrink-0 mt-1 mr-4 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                        <ChevronRight className="w-5 h-5" />
                      </div>
                      <p>Flexible learning options (online, hybrid, in-person)</p>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl overflow-hidden shadow-xl`}>
                    <img 
                      src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80" 
                      alt="Students learning at NEXGEN IT Academy"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <div className={`absolute -bottom-6 -right-6 w-32 h-32 rounded-full ${isDarkMode ? 'bg-blue-600' : 'bg-blue-500'} flex items-center justify-center shadow-lg`}>
                    <span className="text-white font-bold text-xl">5+ Years</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className={`py-20 ${isDarkMode ? 'bg-gray-900/50' : 'bg-gray-50'}`}>
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className={`text-4xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Why Choose NEXGEN?
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className={`${isDarkMode ? 'bg-gray-800/50 backdrop-blur-md' : 'bg-white'} p-6 rounded-xl text-center hover:scale-105 transition-all duration-300 shadow-lg`}
                  >
                    <div className={`${isDarkMode ? 'text-blue-400' : 'text-blue-600'} mb-4 flex justify-center`}>
                      {feature.icon}
                    </div>
                    <h3 className={`text-xl font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      {feature.title}
                    </h3>
                    <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className={`py-20 ${isDarkMode ? 'bg-gradient-to-r from-gray-900 to-blue-900' : 'bg-gradient-to-r from-blue-600 to-indigo-700'} text-white`}>
            <div className="max-w-4xl mx-auto text-center px-4">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Start Your Tech Journey?
              </h2>
              <p className="text-xl mb-8">
                Join thousands of successful graduates and transform your career today
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => navigate('/register')} 
                  className="px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105"
                >
                  Register Now
                </button>
                
              </div>
            </div>
          </section>
        </>
      );
    } else {
      const selectedCourse = courses.find(course => course.title === currentPage);
      return (
        <div className="pt-16 pb-20">
          {selectedCourse?.component || <Fullstack />}
        </div>
      );
    }
  };

  return (
    <div className={`min-h-screen transition-all duration-500 ${isDarkMode ? 'dark' : ''}`}>
      {/* Animated Night Sky Canvas */}
      {isDarkMode && (
        <canvas
          ref={canvasRef}
          className="fixed inset-0 pointer-events-none z-0"
          style={{ background: 'linear-gradient(to bottom, #0f0f23, #1a1a2e, #16213e)' }}
        />
      )}

      {/* Moon in dark mode */}
      {isDarkMode && (
        <div className="fixed top-20 right-20 w-20 h-20 rounded-full bg-gradient-to-br from-yellow-200 to-yellow-400 opacity-80 shadow-2xl shadow-yellow-400/30 z-10">
          <div className="absolute top-2 left-3 w-3 h-3 rounded-full bg-yellow-100 opacity-60"></div>
          <div className="absolute top-6 right-4 w-2 h-2 rounded-full bg-yellow-300 opacity-40"></div>
        </div>
      )}

      <div className={`relative z-20 ${isDarkMode ? 'bg-transparent' : 'bg-white'} transition-colors duration-500`}>
        {/* Navigation */}
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isDarkMode ? 'bg-gray-900/90 backdrop-blur-md' : 'bg-white/90 backdrop-blur-md'} border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center space-x-2">
                <img 
                  src={NexGenLogo} 
                  alt="NexGen Logo" 
                  className="w-30 h-10 object-contain"
                />
                <span className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                </span>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                {currentPage === 'home' ? (
                  <>
                    <button 
                      onClick={() => navigate('/')} 
                      className={`
                        flex items-center space-x-1 px-4 py-2 rounded-lg transition-all
                        ${isDarkMode 
                          ? 'bg-blue-700 text-white hover:bg-blue-800' 
                          : 'bg-blue-500 text-white hover:bg-blue-600'
                        }
                        font-medium shadow-sm hover:shadow-md
                      `}
                    >
                      <Home className="h-5 w-5" />
                      <span>𝐇𝐨𝐦𝐞</span>
                    </button>

                    <button onClick={() => document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' })} className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'} transition-colors font-medium`}>Courses</button>
                    <button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'} transition-colors font-medium`}>About</button>
                    <button onClick={scrollToContact} className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'} transition-colors font-medium`}>
                      Contact
                    </button>
                  </>
                ) : (
                  <button 
                    onClick={goBackToHome}
                    className={`
                      flex items-center space-x-1 px-4 py-2 rounded-lg transition-all
                      ${isDarkMode 
                        ? 'bg-blue-700 text-white hover:bg-blue-800' 
                        : 'bg-blue-500 text-white hover:bg-blue-600'
                      }
                      font-medium shadow-sm hover:shadow-md
                    `}
                  >
                    <ArrowLeft className="h-5 w-5" />
                    <span>Back to Courses</span>
                  </button>
                )}
                
                {/* Theme Toggle - Desktop - Only show on home page */}
                {currentPage === 'home' && (
                  <button
                    onClick={() => setIsDarkMode(!isDarkMode)}
                    className={`p-3 rounded-full ${isDarkMode ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'} hover:scale-110 transition-all duration-300 shadow-lg`}
                    title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
                  >
                    {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                  </button>
                )}
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden flex items-center space-x-3">
                {/* Theme Toggle - Mobile - Only show on home page */}
                {currentPage === 'home' && (
                  <button
                    onClick={() => setIsDarkMode(!isDarkMode)}
                    className={`p-2 rounded-full ${isDarkMode ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'} transition-all duration-300`}
                    title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
                  >
                    {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                  </button>
                )}
                
                {/* Show back button on course pages */}
                {currentPage !== 'home' && (
                  <button 
                    onClick={goBackToHome}
                    className={`p-2 rounded-full ${isDarkMode ? 'bg-gray-800 text-white hover:bg-gray-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'} transition-all duration-300`}
                  >
                    <ArrowLeft className="w-5 h-5" />
                  </button>
                )}
                
                {/* Menu button - Only show on home page */}
                {currentPage === 'home' && (
                  <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className={`p-2 rounded-lg ${isDarkMode ? 'text-white hover:bg-gray-800' : 'text-gray-900 hover:bg-gray-100'} transition-colors`}
                  >
                    {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                  </button>
                )}
              </div>
            </div>

            {/* Mobile Menu - Only show on home page */}
            {isMenuOpen && currentPage === 'home' && (
              <div className={`md:hidden py-4 ${isDarkMode ? 'bg-gray-900' : 'bg-white'} border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                <div className="flex flex-col space-y-4">
                  <button onClick={() => navigate('/')} className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} px-4 py-2 text-left flex items-center space-x-2`}>
                    <Home className="w-5 h-5" />
                    <span>Home</span>
                  </button>
                  <button onClick={() => {document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' }); setIsMenuOpen(false);}} className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} px-4 py-2 text-left`}>Courses</button>
                  <button onClick={() => {document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }); setIsMenuOpen(false);}} className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} px-4 py-2 text-left`}>About</button>
                  <button onClick={() => {scrollToContact(); setIsMenuOpen(false);}} className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} px-4 py-2 text-left`}>
                    Contact
                  </button>
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Main Content */}
        {renderCurrentPage()}

        {/* Footer - Only show on home page */}
        {currentPage === 'home' && (
          <footer ref={contactRef} className="py-12 bg-gray-900 text-white border-t border-gray-700">
            <div className="max-w-7xl mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4 text-white">RoririItPark</h3>
                  <p className="text-gray-300">
                    Where Intelligence meets Innovation. Your one-stop destination for IT training, organic farming experiences, premium tiles, industrial visits, and software solutions.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
                  <ul className="space-y-2">

                    <li><button onClick={() => {navigateTo('home'); document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' });}} className="text-gray-300 hover:text-white transition-colors">Courses</button></li>
                    <li><button onClick={() => {navigateTo('home'); document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });}} className="text-gray-300 hover:text-white transition-colors">About</button></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>RORIRI IT PARK,<br />NALLANATHAPURAM,<br />KALAKAD</li>
                    <li>admin@roririsoft.com</li>
                    <li>(+91) 7338941579</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-white">Follow Us</h3>
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
              </div>
              <div className="mt-12 pt-8 border-t border-gray-700 text-gray-400 text-sm text-center">
                &copy; {new Date().getFullYear()} Roriri. All rights reserved.
              </div>
            </div>
          </footer>
        )}
      </div>
    </div>
  );
}

export default ITAcademy;