// UIUXDesign.jsx
import { useState, useEffect } from 'react';

const Uiux = () => {
  const [currentTab, setCurrentTab] = useState('overview');
  const [loading, setLoading] = useState(true);

  // UI/UX Design data
  const designData = {
    overview: {
      title: "UI/UX Design",
      description: "Master the principles of user interface and user experience design. Learn industry-standard tools like Figma and Adobe XD, conduct user research, and create comprehensive design systems for professional digital products.",
      duration: "4 months",
      level: "Beginner",
      image: "https://source.unsplash.com/random/800x500?uidesign"
    },
    tools: {
      title: "Design Tools",
      items: [
        { name: "Figma", image: "https://source.unsplash.com/random/300x200?figma" },
        { name: "Adobe XD", image: "https://source.unsplash.com/random/300x200?adobexd" },
        { name: "Sketch", image: "https://source.unsplash.com/random/300x200?sketchapp" },
        { name: "Photoshop", image: "https://source.unsplash.com/random/300x200?photoshop" }
      ]
    },
    techniques: {
      title: "Design Techniques",
      items: [
        { name: "User Research", image: "https://source.unsplash.com/random/300x200?userresearch" },
        { name: "Wireframing", image: "https://source.unsplash.com/random/300x200?wireframe" },
        { name: "Prototyping", image: "https://source.unsplash.com/random/300x200?prototype" },
        { name: "Usability Testing", image: "https://source.unsplash.com/random/300x200?usability" }
      ]
    },
    systems: {
      title: "Design Systems",
      items: [
        { name: "Color Theory", image: "https://source.unsplash.com/random/300x200?colortheory" },
        { name: "Typography", image: "https://source.unsplash.com/random/300x200?typography" },
        { name: "Component Library", image: "https://source.unsplash.com/random/300x200?components" },
        { name: "Design Tokens", image: "https://source.unsplash.com/random/300x200?designtokens" }
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
      case 'tools':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {designData.tools.items.map((tech, index) => (
              <TechCard key={index} name={tech.name} image={tech.image} />
            ))}
          </div>
        );
      case 'techniques':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {designData.techniques.items.map((tech, index) => (
              <TechCard key={index} name={tech.name} image={tech.image} />
            ))}
          </div>
        );
      case 'systems':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {designData.systems.items.map((tech, index) => (
              <TechCard key={index} name={tech.name} image={tech.image} />
            ))}
          </div>
        );
      default:
        return (
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <img 
                src={designData.overview.image} 
                alt="UI/UX Design Overview" 
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold mb-4">{designData.overview.title}</h2>
              <p className="text-gray-700 mb-4">{designData.overview.description}</p>
              
              <div className="bg-pink-100 p-4 rounded-lg mb-4">
                <div className="flex items-center mb-2">
                  <svg className="w-6 h-6 text-pink-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="font-semibold">Duration:</span> {designData.overview.duration}
                </div>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-pink-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="font-semibold">Level:</span> {designData.overview.level}
                </div>
              </div>

              <button className="bg-pink-600 hover:bg-pink-700 text-white font-medium py-2 px-6 rounded-md transition-colors">
                Start Learning
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
            e.target.src = "https://source.unsplash.com/random/300x200?design";
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
            UI/UX Design
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
            Master Figma, Adobe XD, User Research, and Design Systems
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center mb-8 border-b border-gray-200">
          {['overview', 'tools', 'techniques', 'systems'].map((tab) => (
            <button
              key={tab}
              onClick={() => setCurrentTab(tab)}
              className={`px-6 py-3 font-medium text-sm rounded-t-lg mr-2 mb-2 ${currentTab === tab ? 'bg-pink-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Content Area */}
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-pink-500"></div>
          </div>
        ) : (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">
              {designData[currentTab]?.title || designData.overview.title}
            </h2>
            {renderContent()}
          </div>
        )}

        {/* Design Process */}
        <div className="mt-12 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">UI/UX Design Process</h2>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {['Research', 'Ideation', 'Wireframing', 'Prototyping', 'Testing', 'Implementation'].map((step, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-pink-100 flex items-center justify-center mb-2">
                  <span className="text-pink-600 font-bold">{index + 1}</span>
                </div>
                <span className="text-sm font-medium text-gray-700">{step}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Design Principles */}
        <div className="mt-12 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Core Design Principles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Visual Hierarchy", icon: "👁️", desc: "Guide users through content with proper visual organization" },
              { name: "Consistency", icon: "🔄", desc: "Maintain uniform design patterns throughout the product" },
              { name: "Accessibility", icon: "♿", desc: "Ensure designs are usable by people with diverse abilities" }
            ].map((principle, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="text-4xl mb-3">{principle.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{principle.name}</h3>
                <p className="text-gray-600">{principle.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        
      </div>
    </div>
  );
};

export default Uiux;