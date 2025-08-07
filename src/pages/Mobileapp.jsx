// MobileAppDevelopment.jsx
import { useState, useEffect } from 'react';

const Mobileapp = () => {
  const [currentTab, setCurrentTab] = useState('overview');
  const [loading, setLoading] = useState(true);

  // Mobile development data
  const mobileData = {
    overview: {
      title: "Mobile App Development",
      description: "Master cross-platform and native mobile app development using React Native, Flutter, iOS (Swift) and Android (Kotlin). Learn to build, test, and deploy professional mobile applications for both platforms.",
      duration: "6 months",
      level: "Beginner to Advanced",
      image: "https://source.unsplash.com/random/800x500?mobileapp"
    },
    frameworks: {
      title: "Development Frameworks",
      items: [
        { name: "React Native", image: "https://source.unsplash.com/random/300x200?reactnative" },
        { name: "Flutter", image: "https://source.unsplash.com/random/300x200?flutter" },
        { name: "Swift (iOS)", image: "https://source.unsplash.com/random/300x200?swift" },
        { name: "Kotlin (Android)", image: "https://source.unsplash.com/random/300x200?kotlin" }
      ]
    },
    tools: {
      title: "Development Tools",
      items: [
        { name: "Android Studio", image: "https://source.unsplash.com/random/300x200?androidstudio" },
        { name: "Xcode", image: "https://source.unsplash.com/random/300x200?xcode" },
        { name: "VS Code", image: "https://source.unsplash.com/random/300x200?vscode" },
        { name: "Firebase", image: "https://source.unsplash.com/random/300x200?firebase" }
      ]
    },
    concepts: {
      title: "Key Concepts",
      items: [
        { name: "UI/UX Design", image: "https://source.unsplash.com/random/300x200?mobileui" },
        { name: "State Management", image: "https://source.unsplash.com/random/300x200?statemanagement" },
        { name: "API Integration", image: "https://source.unsplash.com/random/300x200?api" },
        { name: "App Publishing", image: "https://source.unsplash.com/random/300x200?appstore" }
      ]
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const renderContent = () => {
    switch(currentTab) {
      case 'frameworks':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mobileData.frameworks.items.map((tech, index) => (
              <TechCard key={index} name={tech.name} image={tech.image} />
            ))}
          </div>
        );
      case 'tools':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mobileData.tools.items.map((tech, index) => (
              <TechCard key={index} name={tech.name} image={tech.image} />
            ))}
          </div>
        );
      case 'concepts':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mobileData.concepts.items.map((tech, index) => (
              <TechCard key={index} name={tech.name} image={tech.image} />
            ))}
          </div>
        );
      default:
        return (
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <img 
                src={mobileData.overview.image} 
                alt="Mobile App Development Overview" 
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold mb-4">{mobileData.overview.title}</h2>
              <p className="text-gray-700 mb-4">{mobileData.overview.description}</p>
              
              <div className="bg-purple-100 p-4 rounded-lg mb-4">
                <div className="flex items-center mb-2">
                  <svg className="w-6 h-6 text-purple-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="font-semibold">Duration:</span> {mobileData.overview.duration}
                </div>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-purple-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="font-semibold">Level:</span> {mobileData.overview.level}
                </div>
              </div>

              <button className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-6 rounded-md transition-colors">
                Enroll Now
              </button>
            </div>
          </div>
        );
    }
  };

  const TechCard = ({ name, image }) => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="h-40 bg-gray-200 overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.src = "https://source.unsplash.com/random/300x200?mobile";
          }}
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-center">{name}</h3>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Mobile App Development
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
            Build apps with React Native, Flutter, iOS and Android
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center mb-8 border-b border-gray-200">
          {['overview', 'frameworks', 'tools', 'concepts'].map((tab) => (
            <button
              key={tab}
              onClick={() => setCurrentTab(tab)}
              className={`px-6 py-3 font-medium text-sm rounded-t-lg mr-2 mb-2 ${currentTab === tab ? 'bg-purple-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Content Area */}
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
          </div>
        ) : (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">
              {mobileData[currentTab]?.title || mobileData.overview.title}
            </h2>
            {renderContent()}
          </div>
        )}

        {/* Development Process */}
        <div className="mt-12 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Mobile Development Process</h2>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {['Planning', 'Design', 'Development', 'Testing', 'Deployment', 'Maintenance'].map((step, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mb-2">
                  <span className="text-purple-600 font-bold">{index + 1}</span>
                </div>
                <span className="text-sm font-medium text-gray-700">{step}</span>
              </div>
            ))}
          </div>
        </div>

        {/* App Showcase */}
        <div className="mt-12 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Types of Mobile Apps You'll Build</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "E-commerce Apps", icon: "🛒", desc: "Build shopping experiences with payment integration" },
              { name: "Social Media Apps", icon: "📱", desc: "Create engaging social platforms with real-time features" },
              { name: "Productivity Apps", icon: "📊", desc: "Develop tools that help users organize their work" }
            ].map((app, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="text-4xl mb-3">{app.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{app.name}</h3>
                <p className="text-gray-600">{app.desc}</p>
              </div>
            ))}
          </div>
        </div>

       
      </div>
    </div>
  );
};

export default Mobileapp;