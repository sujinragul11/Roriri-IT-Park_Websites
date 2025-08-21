import React, { useState, useEffect } from 'react';
import { ArrowRight, Code, Leaf, Building, Users, Laptop, Star, Zap, Cpu, Brain, Globe, Database, Shield, X } from 'lucide-react';

const HomePage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentTech, setCurrentTech] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const techStack = ['AI/ML', 'Cloud Computing', 'Full Stack', 'Data Science', 'DevOps', 'Cybersecurity'];
  const floatingIcons = [Code, Cpu, Brain, Globe, Database, Shield, Zap];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentTech((prev) => (prev + 1) % techStack.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const businesses = [
    {
      id: 'it-academy',
      name: 'Nexgen IT Academy',
      description: 'Professional IT training with industry-expert instructors',
      icon: Code,
      href: '/ItAcademy',
      color: 'from-blue-600 to-indigo-600',
      features: ['Full Stack Development', 'Cloud Computing', 'Data Science', 'Cybersecurity']
    },
    {
      id: 'rithishfarms',
      name: 'Rithish Farms',
      description: 'Organic farm experiences and sustainable agriculture',
      icon: Leaf,
      href: '/rithishfarms',
      color: 'from-green-600 to-emerald-600',
      features: ['Organic Tours', 'Farm Stay', 'Fresh Produce', 'Educational Programs']
    },
    {
      id: 'roshantiles',
      name: 'Roshan Tiles',
      description: 'Premium tiles and ceramics for modern spaces',
      icon: Building,
      href: '/roshantiles',
      color: 'from-orange-600 to-red-600',
      features: ['Designer Tiles', 'Custom Solutions', 'Quality Materials', 'Professional Installation']
    },
    {
      id: 'industrial',
      name: 'Industrial Visits',
      description: 'Educational tours for students and professionals',
      icon: Users,
      href: '/IndustrialVisits',
      color: 'from-purple-600 to-pink-600',
      features: ['Educational Tours', 'Industry Exposure', 'Networking', 'Skill Development']
    },
    {
      id: 'roririsoft',
      name: 'Roririsoft',
      description: 'Custom software solutions for modern businesses',
      icon: Laptop,
      href: '/roririsoft',
      color: 'from-teal-600 to-cyan-600',
      features: ['Web Development', 'Mobile Apps', 'Cloud Solutions', 'Digital Transformation']
    }
  ];

  const stats = [
    { value: '500+', label: 'Students Trained', icon: Users },
    { value: '50+', label: 'Companies Served', icon: Building },
    { value: '10+', label: 'Years Experience', icon: Star },
    { value: '5', label: 'Business Verticals', icon: Code },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white overflow-hidden min-h-screen flex items-center">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {/* Floating Icons */}
          {floatingIcons.map((Icon, index) => (
            <div
              key={index}
              className="absolute animate-bounce opacity-10"
              style={{
                left: `${10 + (index * 15)}%`,
                top: `${20 + (index * 10)}%`,
                animationDelay: `${index * 0.5}s`,
                animationDuration: `${3 + (index * 0.3)}s`
              }}
            >
              <Icon className="w-8 h-8" />
            </div>
          ))}
          
          {/* Animated Grid */}
          <div className="absolute inset-0 opacity-5">
            <div className="grid grid-cols-12 grid-rows-12 h-full">
              {Array.from({ length: 144 }, (_, i) => (
                <div
                  key={i}
                  className="border border-white animate-pulse"
                  style={{
                    animationDelay: `${i * 0.02}s`,
                    animationDuration: '4s'
                  }}
                />
              ))}
            </div>
          </div>
          
          {/* Glowing Orbs */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-1/4 left-1/3 w-56 h-56 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className={`space-y-8 transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
              <div className="space-y-4">
                <div className="inline-flex items-center px-4 py-2 bg-blue-600/20 rounded-full border border-blue-400/30 backdrop-blur-sm">
                  <Zap className="w-4 h-4 mr-2 text-yellow-400 animate-pulse" />
                  <span className="text-sm font-medium">AI-Powered Solutions</span>
                </div>
                
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight tracking-tight">
                  Welcome to{' '}
                  <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse font-black">
                    RoririItPark
                  </span>
                </h1>
                
                <div className="text-lg sm:text-xl lg:text-2xl text-gray-300 h-8 font-medium">
                  Powering Future with{' '}
                  <span className="text-blue-400 font-bold transition-all duration-500 transform">
                    {techStack[currentTech]}
                  </span>
                </div>
              </div>

              <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-2xl font-normal">
                Experience the convergence of technology, innovation, and excellence across multiple business verticals. 
                From cutting-edge IT training to sustainable agriculture - we're building the future, today.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  <span>Our Organizations</span>
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                
                <a
                  href="#stats"
                  className="group inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white font-semibold rounded-xl border border-white/20 backdrop-blur-sm hover:bg-white/20 transform hover:scale-105 transition-all duration-300"
                >
                  <Brain className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                  <span>Our Impact</span>
                </a>
              </div>
            </div>

            {/* Right Visual */}
            <div className={`relative transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
              {/* Main IT Illustration */}
              <div className="relative w-full h-96 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-3xl border border-white/10 backdrop-blur-sm overflow-hidden">
                {/* Animated Code Window */}
                <div className="absolute top-4 left-4 right-4 bg-gray-900/80 rounded-lg border border-gray-700 p-4">
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                  <div className="space-y-2 text-xs font-mono">
                    <div className="text-blue-400 animate-pulse">const innovation = await nextGen();</div>
                    <div className="text-green-400 animate-pulse" style={{ animationDelay: '1s' }}>console.log('Building Future');</div>
                    <div className="text-purple-400 animate-pulse" style={{ animationDelay: '2s' }}>AI.learn(experience);</div>
                  </div>
                </div>

                {/* Floating Tech Icons */}
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="flex justify-center space-x-6">
                    {[Code, Cpu, Brain, Database].map((Icon, index) => (
                      <div
                        key={index}
                        className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center transform hover:scale-110 transition-all duration-300 animate-bounce"
                        style={{ animationDelay: `${index * 0.3}s` }}
                      >
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    ))}
                  </div>
                </div>

                {/* AI Brain Animation */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="relative">
                    <div className="w-20 h-20 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-full animate-spin" style={{ animationDuration: '8s' }}></div>
                    <div className="absolute inset-2 bg-gray-900 rounded-full flex items-center justify-center">
                      <Brain className="w-8 h-8 text-white animate-pulse" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Stats */}
              <div className="absolute -top-4 -right-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-3 animate-pulse">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
                  <span className="text-sm text-white">500+ Students Active</span>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-3 animate-pulse" style={{ animationDelay: '1s' }}>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full animate-ping"></div>
                  <span className="text-sm text-white">AI-Powered Learning</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="py-16 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`text-center transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="group relative">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 font-semibold text-sm sm:text-base">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Businesses Section */}
      <section id="businesses" className="py-20 bg-gray-50 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 animate-pulse"></div>
          {Array.from({ length: 20 }, (_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-20 animate-ping"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full mb-4">
              <Zap className="w-4 h-4 mr-2 text-blue-600 animate-pulse" />
              <span className="text-sm font-medium text-blue-800">Our Portfolio</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
              Our Organizations Portfolio
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto font-normal">
              Discover our diverse range of services across multiple industries, 
              each designed to deliver excellence and drive success.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {businesses.map((business, index) => (
              <div
                key={business.id}
                className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${business.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                {/* Animated Border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-20 transition-opacity duration-500" style={{ padding: '2px' }}>
                  <div className="w-full h-full bg-white rounded-2xl"></div>
                </div>
                
                <div className="relative p-8">
                  <div className="flex items-start space-x-4">
                    <div className={`flex-shrink-0 w-16 h-16 bg-gradient-to-br ${business.color} rounded-xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 relative`}>
                      <business.icon className="h-8 w-8 text-white relative z-10" />
                      <div className="absolute inset-0 bg-white opacity-20 rounded-xl animate-pulse"></div>
                    </div>
                    
                    <div className="flex-1 space-y-4">
                      <div>
                        <h3 className="text-xl sm:text-2xl font-extrabold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 tracking-tight">
                          {business.name}
                        </h3>
                        <p className="text-gray-600 mt-2 leading-relaxed font-normal text-sm sm:text-base">
                          {business.description}
                        </p>
                      </div>
                      
                      <div className="space-y-2">
                        <h4 className="font-bold text-gray-900 text-sm sm:text-base">Key Features:</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {business.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center space-x-2 group-hover:translate-x-1 transition-transform duration-300" style={{ transitionDelay: `${idx * 50}ms` }}>
                              <div className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-pulse"></div>
                              <span className="text-xs sm:text-sm text-gray-600 font-medium">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <a
                        href={business.href}
                        className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-semibold group-hover:translate-x-2 transition-all duration-300"
                      >
                        <span>Learn More</span>
                        <ArrowRight className="h-4 w-4 group-hover:animate-pulse" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          {floatingIcons.map((Icon, index) => (
            <div
              key={index}
              className="absolute opacity-10 animate-bounce"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${index * 0.7}s`,
                animationDuration: `${4 + Math.random() * 2}s`
              }}
            >
              <Icon className="w-6 h-6" />
            </div>
          ))}
        </div>

        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full backdrop-blur-sm mb-6">
            <Brain className="w-4 h-4 mr-2 animate-pulse" />
            <span className="text-sm font-medium">Ready to Transform?</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold mb-6 tracking-tight">
            Join the Future of{' '}
            <span className="bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent animate-pulse font-black">
              Innovation
            </span>
          </h2>
          
          <p className="text-base sm:text-lg lg:text-xl text-blue-100 mb-8 max-w-2xl mx-auto font-normal">
            Whether you're looking to upgrade your skills, grow your Organizations, or explore new opportunities - 
            we're here to power your journey with cutting-edge solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            
            
            
          </div>
        </div>
      </section>

      {/* Businesses Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 rounded-t-2xl">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
                  Our Organization Portfolio
                </h2>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="w-6 h-6 text-gray-600" />
                </button>
              </div>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {businesses.map((business, index) => (
                  <div
                    key={business.id}
                    className="group bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-all duration-300 border border-gray-200 hover:border-blue-300"
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-br ${business.color} rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300`}>
                        <business.icon className="h-6 w-6 text-white" />
                      </div>
                      
                      <div className="flex-1 space-y-3">
                        <div>
                          <h3 className="text-lg sm:text-xl font-extrabold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 tracking-tight">
                            {business.name}
                          </h3>
                          <p className="text-gray-600 mt-1 leading-relaxed font-normal text-sm">
                            {business.description}
                          </p>
                        </div>
                        
                        <div className="space-y-2">
                          <h4 className="font-bold text-gray-900 text-sm">Key Features:</h4>
                          <div className="space-y-1">
                            {business.features.map((feature, idx) => (
                              <div key={idx} className="flex items-center space-x-2">
                                <div className="w-1 h-1 bg-blue-600 rounded-full"></div>
                                <span className="text-xs text-gray-600 font-medium">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                      
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;