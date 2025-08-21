import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

const RegistrationForm = () => {
  const navigate = useNavigate(); // Initialize navigate function
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    courseInterest: '',
    educationLevel: '',
    experienceLevel: '',
    hearAboutUs: '',
    agreeTerms: false
  });
  
  const [currentStep, setCurrentStep] = useState(0);
  const [isVisible, setIsVisible] = useState({});
  const [particles, setParticles] = useState([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [showSuccess, setShowSuccess] = useState(false); // State for success popup

  // Generate floating particles
  useEffect(() => {
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 4 + 2,
      speedX: (Math.random() - 0.5) * 0.5,
      speedY: (Math.random() - 0.5) * 0.5,
      opacity: Math.random() * 0.5 + 0.1
    }));
    setParticles(newParticles);

    const animateParticles = () => {
      setParticles(prev => prev.map(particle => ({
        ...particle,
        x: (particle.x + particle.speedX + window.innerWidth) % window.innerWidth,
        y: (particle.y + particle.speedY + window.innerHeight) % window.innerHeight
      })));
    };

    const interval = setInterval(animateParticles, 50);
    return () => clearInterval(interval);
  }, []);

  // Track mouse movement
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Animate elements into view
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(prev => ({ ...prev, [currentStep]: true }));
    }, 100);
    return () => clearTimeout(timer);
  }, [currentStep]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    // Show success message
    setShowSuccess(true);
    
    // After 3 seconds, navigate back to ITAcademy page
    setTimeout(() => {
      navigate('/itacademy'); // Adjust the route as needed
    }, 3000);
  };

  const handleBackToAcademy = () => {
    navigate('/itacademy'); // Adjust the route as needed
  };

  const formSteps = [
    { label: 'Personal Info', fields: ['fullName', 'email', 'phone'] },
    { label: 'Course Selection', fields: ['courseInterest', 'experienceLevel'] },
    { label: 'Background', fields: ['educationLevel', 'hearAboutUs'] },
    { label: 'Final Step', fields: ['agreeTerms'] }
  ];

  const nextStep = () => {
    if (currentStep < formSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Back Button */}
      <button
        onClick={handleBackToAcademy}
        className="absolute top-6 left-6 z-50 px-4 py-2 bg-white/10 backdrop-blur-md text-white rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 flex items-center"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
        </svg>
        Back to Academy
      </button>

      {/* Success Popup */}
      {showSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-8 rounded-3xl shadow-2xl max-w-md w-full mx-4 text-center animate-bounce">
            <div className="text-6xl mb-4">🎉</div>
            <h2 className="text-3xl font-bold text-white mb-4">Registration Successful!</h2>
            <p className="text-white/90 mb-6">We've sent a confirmation to your email. Welcome to our academy!</p>
            <div className="w-full h-2 bg-white/30 rounded-full overflow-hidden">
              <div 
                className="h-full bg-white rounded-full" 
                style={{ animation: 'progressBar 3s linear forwards' }}
              />
            </div>
          </div>
        </div>
      )}

      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map(particle => (
          <div
            key={particle.id}
            className="absolute rounded-full bg-white pointer-events-none"
            style={{
              left: `${particle.x}px`,
              top: `${particle.y}px`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              opacity: particle.opacity,
              animation: `pulse ${2 + Math.random() * 3}s infinite alternate`
            }}
          />
        ))}
      </div>

      {/* Mouse Follower Glow */}
      <div
        className="absolute pointer-events-none rounded-full bg-gradient-radial from-purple-400/20 to-transparent blur-xl transition-all duration-300 ease-out"
        style={{
          left: `${mousePos.x - 100}px`,
          top: `${mousePos.y - 100}px`,
          width: '200px',
          height: '200px',
          transform: 'translate(-50%, -50%)'
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center py-12 px-4">
        <div className="max-w-2xl w-full">
          {/* Progress Indicator */}
          <div className="mb-12 transform transition-all duration-1000 ease-out" 
               style={{ transform: isVisible[currentStep] ? 'translateY(0)' : 'translateY(-50px)', opacity: isVisible[currentStep] ? 1 : 0 }}>
            <div className="flex justify-center items-center space-x-4 mb-8">
              {formSteps.map((step, index) => (
                <div key={index} className="flex items-center">
                  <div
                    className={`w-12 h-12 rounded-full border-4 flex items-center justify-center font-bold text-lg transition-all duration-500 ${
                      index <= currentStep
                        ? 'bg-gradient-to-r from-purple-500 to-blue-500 border-purple-300 text-white shadow-lg scale-110'
                        : 'border-gray-400 text-gray-400 bg-gray-800/50 backdrop-blur-sm'
                    }`}
                    style={{
                      animation: index === currentStep ? 'pulse 2s infinite' : 'none'
                    }}
                  >
                    {index + 1}
                  </div>
                  {index < formSteps.length - 1 && (
                    <div
                      className={`w-16 h-1 mx-2 transition-all duration-500 ${
                        index < currentStep ? 'bg-gradient-to-r from-purple-500 to-blue-500' : 'bg-gray-600'
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
            <h3 className="text-center text-xl font-semibold text-white mb-2">
              {formSteps[currentStep].label}
            </h3>
          </div>

          {/* Form Card */}
          <div className="bg-white/10 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-white/20 transform transition-all duration-1000 ease-out hover:scale-105 hover:shadow-purple-500/25"
               style={{ 
                 transform: isVisible[currentStep] ? 'translateY(0) scale(1)' : 'translateY(100px) scale(0.95)', 
                 opacity: isVisible[currentStep] ? 1 : 0 
               }}>
            
            <div className="text-center mb-8">
              <h1 className="text-4xl font-extrabold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-4 animate-pulse">
                IT Academy Registration
              </h1>
              <p className="text-gray-300 text-lg">
                Transform your future with cutting-edge technology
              </p>
            </div>

            <div className="space-y-6">
              {/* Step 1: Personal Information */}
              {currentStep === 0 && (
                <div className="space-y-6 animate-slide-in">
                  <div className="group">
                    <label className="block text-sm font-medium text-gray-200 mb-2 group-focus-within:text-purple-400 transition-colors duration-300">
                      Full Name*
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      className="w-full px-4 py-3 bg-white/5 border-2 border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-purple-500 focus:bg-white/10 transition-all duration-300 focus:scale-105 focus:shadow-lg focus:shadow-purple-500/25"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div className="group">
                    <label className="block text-sm font-medium text-gray-200 mb-2 group-focus-within:text-purple-400 transition-colors duration-300">
                      Email Address*
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 bg-white/5 border-2 border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-purple-500 focus:bg-white/10 transition-all duration-300 focus:scale-105 focus:shadow-lg focus:shadow-purple-500/25"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div className="group">
                    <label className="block text-sm font-medium text-gray-200 mb-2 group-focus-within:text-purple-400 transition-colors duration-300">
                      Phone Number*
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      className="w-full px-4 py-3 bg-white/5 border-2 border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-purple-500 focus:bg-white/10 transition-all duration-300 focus:scale-105 focus:shadow-lg focus:shadow-purple-500/25"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>
              )}

              {/* Step 2: Course Selection */}
              {currentStep === 1 && (
                <div className="space-y-6 animate-slide-in">
                  <div className="group">
                    <label className="block text-sm font-medium text-gray-200 mb-2">
                      Course of Interest*
                    </label>
                    <select
                      name="courseInterest"
                      required
                      className="w-full px-4 py-3 bg-white/5 border-2 border-gray-600 rounded-xl text-white focus:border-purple-500 focus:bg-white/10 transition-all duration-300 focus:scale-105 focus:shadow-lg focus:shadow-purple-500/25"
                      value={formData.courseInterest}
                      onChange={handleChange}
                    >
                      <option value="" className="bg-gray-800">Select a course</option>
                      <option value="web-development" className="bg-gray-800">🌐 Web Development</option>
                      <option value="data-science" className="bg-gray-800">📊 Data Science</option>
                      <option value="cybersecurity" className="bg-gray-800">🔒 Cybersecurity</option>
                      <option value="cloud-computing" className="bg-gray-800">☁️ Cloud Computing</option>
                      <option value="ai-ml" className="bg-gray-800">🤖 AI & Machine Learning</option>
                      <option value="mobile-development" className="bg-gray-800">📱 Mobile Development</option>
                    </select>
                  </div>

                  <div className="group">
                    <label className="block text-sm font-medium text-gray-200 mb-2">
                      IT Experience Level*
                    </label>
                    <select
                      name="experienceLevel"
                      required
                      className="w-full px-4 py-3 bg-white/5 border-2 border-gray-600 rounded-xl text-white focus:border-purple-500 focus:bg-white/10 transition-all duration-300 focus:scale-105 focus:shadow-lg focus:shadow-purple-500/25"
                      value={formData.experienceLevel}
                      onChange={handleChange}
                    >
                      <option value="" className="bg-gray-800">Select your level</option>
                      <option value="beginner" className="bg-gray-800">🌱 Beginner</option>
                      <option value="intermediate" className="bg-gray-800">🚀 Intermediate</option>
                      <option value="advanced" className="bg-gray-800">⚡ Advanced</option>
                    </select>
                  </div>
                </div>
              )}

              {/* Step 3: Background */}
              {currentStep === 2 && (
                <div className="space-y-6 animate-slide-in">
                  <div>
                    <label className="block text-sm font-medium text-gray-200 mb-4">
                      Education Level*
                    </label>
                    <div className="grid grid-cols-2 gap-4">
                      {['High School', 'Bachelor', 'Master', 'Other'].map((level) => (
                        <div key={level} className="group">
                          <input
                            id={`education-${level.toLowerCase()}`}
                            name="educationLevel"
                            type="radio"
                            required
                            className="sr-only"
                            value={level.toLowerCase()}
                            checked={formData.educationLevel === level.toLowerCase()}
                            onChange={handleChange}
                          />
                          <label
                            htmlFor={`education-${level.toLowerCase()}`}
                            className={`block p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 text-center font-medium hover:scale-105 hover:shadow-lg ${
                              formData.educationLevel === level.toLowerCase()
                                ? 'border-purple-500 bg-purple-500/20 text-purple-200 shadow-lg shadow-purple-500/25'
                                : 'border-gray-600 bg-white/5 text-gray-200 hover:border-gray-400'
                            }`}
                          >
                            {level}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="group">
                    <label className="block text-sm font-medium text-gray-200 mb-2">
                      How did you hear about us?
                    </label>
                    <select
                      name="hearAboutUs"
                      className="w-full px-4 py-3 bg-white/5 border-2 border-gray-600 rounded-xl text-white focus:border-purple-500 focus:bg-white/10 transition-all duration-300 focus:scale-105 focus:shadow-lg focus:shadow-purple-500/25"
                      value={formData.hearAboutUs}
                      onChange={handleChange}
                    >
                      <option value="" className="bg-gray-800">Select an option</option>
                      <option value="social-media" className="bg-gray-800">📱 Social Media</option>
                      <option value="friend" className="bg-gray-800">👥 Friend/Family</option>
                      <option value="search-engine" className="bg-gray-800">🔍 Search Engine</option>
                      <option value="advertisement" className="bg-gray-800">📺 Advertisement</option>
                      <option value="other" className="bg-gray-800">🤔 Other</option>
                    </select>
                  </div>
                </div>
              )}

              {/* Step 4: Final Step */}
              {currentStep === 3 && (
                <div className="space-y-6 animate-slide-in text-center">
                  <div className="text-6xl mb-6 animate-bounce">🎓</div>
                  <h2 className="text-2xl font-bold text-white mb-6">Almost There!</h2>
                  
                  <div className="flex items-center justify-center space-x-3 p-6 bg-white/5 rounded-xl border border-white/20">
                    <input
                      id="agreeTerms"
                      name="agreeTerms"
                      type="checkbox"
                      required
                      className="w-5 h-5 text-purple-600 rounded focus:ring-purple-500 focus:ring-2 border-gray-300"
                      checked={formData.agreeTerms}
                      onChange={handleChange}
                    />
                    <label htmlFor="agreeTerms" className="text-gray-200 font-medium">
                      I agree to the terms and conditions*
                    </label>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between items-center pt-6">
                {currentStep > 0 && (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="px-6 py-3 bg-gray-600 text-white rounded-xl hover:bg-gray-500 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  >
                    ← Previous
                  </button>
                )}
                
                {currentStep < formSteps.length - 1 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="ml-auto px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 animate-pulse"
                  >
                    Next →
                  </button>
                ) : (
                  <button
                    type="submit"
                    onClick={handleSubmit}
                    className="ml-auto px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl font-bold text-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-green-500/25 animate-pulse"
                  >
                    🚀 Complete Registration
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slide-in {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-slide-in {
          animation: slide-in 0.6s ease-out forwards;
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        
        @keyframes progressBar {
          0% { width: 0%; }
          100% { width: 100%; }
        }
      `}</style>
    </div>
  );
};

export default RegistrationForm;