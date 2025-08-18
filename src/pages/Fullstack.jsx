// fullstack.jsx
import { useState, useEffect } from 'react';

// Import static images from your Assets folder
import overviewImage from '../Assets/FullStack.png';
import reactImage from '../Assets/React.png';
import vueImage from '../Assets/Vua.png'; // Note: File is named "Vua.png" in your folder
import angularImage from '../Assets/Angular.jpg';
import htmlcssImage from '../Assets/htmlcss.jpg'; // Note: This file doesn't exist in your list - you might need to add it
import nodejsImage from '../Assets/Nodejs.png';
import expressImage from '../Assets/express.jpg'; // Note: This file doesn't exist in your list
import djangoImage from '../Assets/django.jpg'; // Note: This file doesn't exist in your list
import springbootImage from '../Assets/spring-boot-logo.png';
import mongodbImage from '../Assets/mongodb.jpg'; // Note: This file doesn't exist in your list
import postgresqlImage from '../Assets/Postgresql.png';
import mysqlImage from '../Assets/Mysql.jpg';
import firebaseImage from '../Assets/Firebase.png';
import fallbackImage from '../Assets/Company.png'; // Using Company.png as fallback since no fallback.jpg exists

const Fullstack = () => {
  const [currentTab, setCurrentTab] = useState('overview');
  const [loading, setLoading] = useState(true);

  // Mock data for full-stack development with static images
  const fullstackData = {
    overview: {
      title: "Full-Stack Development Overview",
      description: "Full-stack development involves working on both front-end (client-side) and back-end (server-side) portions of web applications. A full-stack developer can handle databases, servers, systems engineering, and clients.",
      image: overviewImage
    },
    frontend: {
      title: "Front-End Technologies",
      items: [
        { name: "React", image: reactImage },
        { name: "Vue", image: vueImage },
        { name: "Angular", image: angularImage },
        { name: "HTML/CSS", image: htmlcssImage || fallbackImage } // Fallback if image doesn't exist
      ]
    },
    backend: {
      title: "Back-End Technologies",
      items: [
        { name: "Node.js", image: nodejsImage },
        { name: "Express", image: expressImage || fallbackImage },
        { name: "Django", image: djangoImage || fallbackImage },
        { name: "Spring Boot", image: springbootImage }
      ]
    },
    database: {
      title: "Database Technologies",
      items: [
        { name: "MongoDB", image: mongodbImage || fallbackImage },
        { name: "PostgreSQL", image: postgresqlImage },
        { name: "MySQL", image: mysqlImage },
        { name: "Firebase", image: firebaseImage }
      ]
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 300);

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
                loading="lazy"
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
          loading="lazy"
          onError={(e) => {
            e.target.src = fallbackImage;
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
      </div>
    </div>
  );
};

export default Fullstack;