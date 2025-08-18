import { useState, useEffect } from 'react';

const CloudComputing = () => {
  const [currentTab, setCurrentTab] = useState('overview');
  const [loading, setLoading] = useState(true);

  // Cloud computing data with local image paths
  const cloudData = {
    overview: {
      title: "Cloud Computing Mastery",
      description: "Cloud computing delivers computing services—servers, storage, databases, networking, software, analytics, and more—over the Internet ('the cloud'). This program covers AWS, Azure, Google Cloud, DevOps, and Kubernetes at an intermediate to advanced level.",
      duration: "5 months",
      level: "Intermediate to Advanced",
      image: "/src/Assets/CloudComputing/CloudComputingMastery.jpg"
    },
    platforms: {
      title: "Cloud Platforms",
      items: [
        { name: "AWS", image: "/src/Assets/CloudComputing/AWS.jpg" },
        { name: "Azure", image: "/src/Assets/CloudComputing/Azure.jpg" },
        { name: "Google Cloud", image: "/src/Assets/CloudComputing/GoogleCloud.jpg" }
      ]
    },
    technologies: {
      title: "Cloud Technologies",
      items: [
        { name: "DevOps", image: "/src/Assets/CloudComputing/DevOps.jpg" },
        { name: "Kubernetes", image: "/src/Assets/CloudComputing/Kubernetes.webp" },
        { name: "Docker", image: "/src/Assets/CloudComputing/Docker.jpg" },
        { name: "Terraform", image: "/src/Assets/CloudComputing/CloudComputingMastery.jpg" } // Placeholder - you might want to add a Terraform image
      ]
    },
    services: {
      title: "Cloud Services",
      items: [
        { name: "Compute", image: "/src/Assets/CloudComputing/Compute.jpg" },
        { name: "Storage", image: "/src/Assets/CloudComputing/Storage.avif" },
        { name: "Networking", image: "/src/Assets/CloudComputing/Networking.jpg" },
        { name: "Databases", image: "/src/Assets/CloudComputing/Databases.jpg" }
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
      case 'platforms':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cloudData.platforms.items.map((tech, index) => (
              <TechCard key={index} name={tech.name} image={tech.image} />
            ))}
          </div>
        );
      case 'technologies':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cloudData.technologies.items.map((tech, index) => (
              <TechCard key={index} name={tech.name} image={tech.image} />
            ))}
          </div>
        );
      case 'services':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cloudData.services.items.map((tech, index) => (
              <TechCard key={index} name={tech.name} image={tech.image} />
            ))}
          </div>
        );
      default:
        return (
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <img 
                src={cloudData.overview.image} 
                alt="Cloud Computing Overview" 
                className="rounded-lg shadow-xl w-full h-auto"
                onError={(e) => {
                  e.target.src = "/src/Assets/CloudComputing/CloudComputingMastery.jpg";
                }}
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold mb-4">{cloudData.overview.title}</h2>
              <p className="text-gray-700 mb-4">{cloudData.overview.description}</p>
              
              <div className="bg-blue-100 p-4 rounded-lg mb-4">
                <div className="flex items-center mb-2">
                  <svg className="w-6 h-6 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="font-semibold">Duration:</span> {cloudData.overview.duration}
                </div>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="font-semibold">Level:</span> {cloudData.overview.level}
                </div>
              </div>

              <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition-colors">
                Learn More
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
            e.target.src = "/src/Assets/CloudComputing/CloudComputingMastery.jpg";
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
            Cloud Computing
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
            Master AWS, Azure, Google Cloud, DevOps, and Kubernetes
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center mb-8 border-b border-gray-200">
          {['overview', 'platforms', 'technologies', 'services'].map((tab) => (
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
              {cloudData[currentTab]?.title || cloudData.overview.title}
            </h2>
            {renderContent()}
          </div>
        )}

        {/* Cloud Architecture Diagram */}
        <div className="mt-12 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Cloud Architecture Components</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "Virtual Machines", icon: "🖥️" },
              { name: "Containers", icon: "📦" },
              { name: "Serverless", icon: "⚡" },
              { name: "Storage", icon: "💾" },
              { name: "Networking", icon: "🌐" },
              { name: "Security", icon: "🔒" },
              { name: "Monitoring", icon: "👀" },
              { name: "CI/CD", icon: "🔄" }
            ].map((item, index) => (
              <div key={index} className="bg-gray-100 p-4 rounded-lg text-center">
                <div className="text-3xl mb-2">{item.icon}</div>
                <h3 className="font-medium">{item.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CloudComputing;