// fullstack.jsx
import { useState, useEffect } from 'react';

const Fullstack = () => {
  const [currentTab, setCurrentTab] = useState('overview');
  const [loading, setLoading] = useState(true);
  const [techImages, setTechImages] = useState({});

  // Mock data for full-stack development
  const fullstackData = {
    overview: {
      title: "Full-Stack Development Overview",
      description: "Full-stack development involves working on both front-end (client-side) and back-end (server-side) portions of web applications. A full-stack developer can handle databases, servers, systems engineering, and clients.",
      image: "https://source.unsplash.com/random/800x500?webdevelopment"
    },
    frontend: {
      title: "Front-End Technologies",
      items: [
        { name: "React", image: "https://source.unsplash.com/random/300x200?react" },
        { name: "Vue", image: "https://source.unsplash.com/random/300x200?vue" },
        { name: "Angular", image: "https://source.unsplash.com/random/300x200?angular" },
        { name: "HTML/CSS", image: "https://source.unsplash.com/random/300x200?htmlcss" }
      ]
    },
    backend: {
      title: "Back-End Technologies",
      items: [
        { name: "Node.js", image: "https://source.unsplash.com/random/300x200?nodejs" },
        { name: "Express", image: "https://source.unsplash.com/random/300x200?expressjs" },
        { name: "Django", image: "https://source.unsplash.com/random/300x200?django" },
        { name: "Spring Boot", image: "https://source.unsplash.com/random/300x200?springboot" }
      ]
    },
    database: {
      title: "Database Technologies",
      items: [
        { name: "MongoDB", image: "https://source.unsplash.com/random/300x200?mongodb" },
        { name: "PostgreSQL", image: "https://source.unsplash.com/random/300x200?postgresql" },
        { name: "MySQL", image: "https://source.unsplash.com/random/300x200?mysql" },
        { name: "Firebase", image: "https://source.unsplash.com/random/300x200?firebase" }
      ]
    }
  };

  useEffect(() => {
    // Simulate loading images
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const renderContent = () => {
    switch(currentTab) {
      case 'frontend':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {fullstackData.frontend.items.map((tech, index) => (
              <TechCard key={index} name={tech.name} image={tech.image} />
            ))}
          </div>
        );
      case 'backend':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {fullstackData.backend.items.map((tech, index) => (
              <TechCard key={index} name={tech.name} image={tech.image} />
            ))}
          </div>
        );
      case 'database':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {fullstackData.database.items.map((tech, index) => (
              <TechCard key={index} name={tech.name} image={tech.image} />
            ))}
          </div>
        );
      default:
        return (
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <img 
                src={fullstackData.overview.image} 
                alt="Fullstack Development" 
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold mb-4">{fullstackData.overview.title}</h2>
              <p className="text-gray-700 mb-4">{fullstackData.overview.description}</p>
              <div className="bg-blue-100 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-2">Key Responsibilities:</h3>
                <ul className="list-disc list-inside text-blue-700">
                  <li>Developing front-end website architecture</li>
                  <li>Designing user interactions on web pages</li>
                  <li>Creating servers and databases for functionality</li>
                  <li>Ensuring cross-platform optimization for mobile</li>
                  <li>Ensuring responsiveness of applications</li>
                </ul>
              </div>
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
            e.target.src = "https://source.unsplash.com/random/300x200?code";
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
            Full-Stack Development
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
            Mastering both client and server side technologies
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center mb-8 border-b border-gray-200">
          {['overview', 'frontend', 'backend', 'database'].map((tab) => (
            <button
              key={tab}
              onClick={() => setCurrentTab(tab)}
              className={`px-6 py-3 font-medium text-sm rounded-t-lg mr-2 mb-2 ${currentTab === tab ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Content Area */}
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">
              {fullstackData[currentTab]?.title || fullstackData.overview.title}
            </h2>
            {renderContent()}
          </div>
        )}

        {/* Footer */}
        
      </div>
    </div>
  );
};

export default Fullstack;