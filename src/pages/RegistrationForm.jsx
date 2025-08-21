import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const RegistrationForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    studentName: '',
    studentEmail: '',
    studentPhone: '',
    courseId: '',
    educationLevel: '',
    experienceLevel: '',
    hearAboutUs: '',
    agreeTerms: false
  });
  
  const [currentStep, setCurrentStep] = useState(0);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [courses, setCourses] = useState([]);

  // Fetch available courses from the database
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/courses');
        if (response.ok) {
          const result = await response.json();
          if (result.success) {
            setCourses(result.data);
          } else {
            console.error('Failed to fetch courses:', result.message);
            setError('Failed to load courses. Please refresh the page.');
          }
        } else {
          console.error('Failed to fetch courses:', response.status);
          setError('Failed to load courses. Please refresh the page.');
        }
      } catch (error) {
        console.error('Error fetching courses:', error);
        setError('Network error. Please check your connection and try again.');
      }
    };

    fetchCourses();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    // Validate required fields
    if (!formData.agreeTerms) {
      setError('You must agree to the terms and conditions');
      setIsSubmitting(false);
      return;
    }

    try {
      // Send form data to your API endpoint
      const response = await fetch('http://localhost:5000/api/enrollments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          studentName: formData.studentName,
          studentEmail: formData.studentEmail,
          studentPhone: formData.studentPhone,
          courseId: formData.courseId,
          status: 'pending'
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Failed to submit registration');
      }

      if (!result.success) {
        throw new Error(result.message || 'Registration failed');
      }

      console.log('Registration successful:', result);
      
      // Show success message
      setShowSuccess(true);
      
      // After 3 seconds, navigate back to ITAcademy page
      setTimeout(() => {
        navigate('/itacademy');
      }, 3000);
    } catch (err) {
      console.error('Registration error:', err);
      setError(err.message || 'Failed to submit registration. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBackToAcademy = () => {
    navigate('/itacademy');
  };

  const formSteps = [
    { label: 'Personal Info', fields: ['studentName', 'studentEmail', 'studentPhone'] },
    { label: 'Course Selection', fields: ['courseId', 'experienceLevel'] },
    { label: 'Background', fields: ['educationLevel', 'hearAboutUs'] },
    { label: 'Final Step', fields: ['agreeTerms'] }
  ];

  const nextStep = () => {
    // Validate current step before proceeding
    if (currentStep === 0) {
      if (!formData.studentName || !formData.studentEmail || !formData.studentPhone) {
        setError('Please fill in all required fields');
        return;
      }
      
      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.studentEmail)) {
        setError('Please enter a valid email address');
        return;
      }
    } else if (currentStep === 1) {
      if (!formData.courseId || !formData.experienceLevel) {
        setError('Please select a course and experience level');
        return;
      }
    } else if (currentStep === 2) {
      if (!formData.educationLevel) {
        setError('Please select your education level');
        return;
      }
    }
    
    setError('');
    if (currentStep < formSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    setError('');
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

      {/* Error Message */}
      {error && (
        <div className="fixed top-4 right-4 z-50 bg-red-500 text-white p-4 rounded-lg shadow-lg">
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{error}</span>
            <button onClick={() => setError('')} className="ml-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Success Popup */}
      {showSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-8 rounded-3xl shadow-2xl max-w-md w-full mx-4 text-center">
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

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center py-12 px-4">
        <div className="max-w-2xl w-full">
          {/* Progress Indicator */}
          <div className="mb-12">
            <div className="flex justify-center items-center space-x-4 mb-8">
              {formSteps.map((step, index) => (
                <div key={index} className="flex items-center">
                  <div
                    className={`w-12 h-12 rounded-full border-4 flex items-center justify-center font-bold text-lg transition-all duration-500 ${
                      index <= currentStep
                        ? 'bg-gradient-to-r from-purple-500 to-blue-500 border-purple-300 text-white shadow-lg scale-110'
                        : 'border-gray-400 text-gray-400 bg-gray-800/50 backdrop-blur-sm'
                    }`}
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
          <div className="bg-white/10 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-white/20">
            
            <div className="text-center mb-8">
              <h1 className="text-4xl font-extrabold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-4">
                IT Academy Registration
              </h1>
              <p className="text-gray-300 text-lg">
                Transform your future with cutting-edge technology
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="space-y-6">
                {/* Step 1: Personal Information */}
                {currentStep === 0 && (
                  <div className="space-y-6">
                    <div className="group">
                      <label className="block text-sm font-medium text-gray-200 mb-2">
                        Full Name*
                      </label>
                      <input
                        type="text"
                        name="studentName"
                        required
                        className="w-full px-4 py-3 bg-white/5 border-2 border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-purple-500 focus:bg-white/10 transition-all duration-300"
                        value={formData.studentName}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div className="group">
                      <label className="block text-sm font-medium text-gray-200 mb-2">
                        Email Address*
                      </label>
                      <input
                        type="email"
                        name="studentEmail"
                        required
                        className="w-full px-4 py-3 bg-white/5 border-2 border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-purple-500 focus:bg-white/10 transition-all duration-300"
                        value={formData.studentEmail}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div className="group">
                      <label className="block text-sm font-medium text-gray-200 mb-2">
                        Phone Number*
                      </label>
                      <input
                        type="tel"
                        name="studentPhone"
                        required
                        className="w-full px-4 py-3 bg-white/5 border-2 border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-purple-500 focus:bg-white/10 transition-all duration-300"
                        value={formData.studentPhone}
                        onChange={handleChange}
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>
                )}

                {/* Step 2: Course Selection */}
                {currentStep === 1 && (
                  <div className="space-y-6">
                    <div className="group">
                      <label className="block text-sm font-medium text-gray-200 mb-2">
                        Course of Interest*
                      </label>
                      <select
                        name="courseId"
                        required
                        className="w-full px-4 py-3 bg-white/5 border-2 border-gray-600 rounded-xl text-white focus:border-purple-500 focus:bg-white/10 transition-all duration-300"
                        value={formData.courseId}
                        onChange={handleChange}
                      >
                        <option value="" className="bg-gray-800">Select a course</option>
                        {courses.map(course => (
                          <option key={course.id} value={course.id} className="bg-gray-800">
                            {course.title}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="group">
                      <label className="block text-sm font-medium text-gray-200 mb-2">
                        IT Experience Level*
                      </label>
                      <select
                        name="experienceLevel"
                        required
                        className="w-full px-4 py-3 bg-white/5 border-2 border-gray-600 rounded-xl text-white focus:border-purple-500 focus:bg-white/10 transition-all duration-300"
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
                  <div className="space-y-6">
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
                              className={`block p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 text-center font-medium ${
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
                        className="w-full px-4 py-3 bg-white/5 border-2 border-gray-600 rounded-xl text-white focus:border-purple-500 focus:bg-white/10 transition-all duration-300"
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
                  <div className="space-y-6 text-center">
                    <div className="text-6xl mb-6">🎓</div>
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
                      className="px-6 py-3 bg-gray-600 text-white rounded-xl hover:bg-gray-500 transition-all duration-300"
                    >
                      ← Previous
                    </button>
                  )}
                  
                  {currentStep < formSteps.length - 1 ? (
                    <button
                      type="button"
                      onClick={nextStep}
                      className="ml-auto px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
                    >
                      Next →
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`ml-auto px-8 py-4 text-white rounded-xl font-bold text-lg transition-all duration-300 ${
                        isSubmitting 
                          ? 'bg-gray-600 cursor-not-allowed' 
                          : 'bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700'
                      }`}
                    >
                      {isSubmitting ? 'Processing...' : '🚀 Complete Registration'}
                    </button>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes progressBar {
          0% { width: 0%; }
          100% { width: 100%; }
        }
      `}</style>
    </div>
  );
};

export default RegistrationForm;