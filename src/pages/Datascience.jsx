import { useState, useEffect } from 'react';

// Import all your local images
import AutonomousVehicles from '../Assets/AI/AutonomousVehicles.jpg';
import Chatbots from '../Assets/AI/Chatbots.jpg';
import ComputerVision from '../Assets/AI/ComputerVision.jpg';
import DataScienceOverview from '../Assets/AI/DataScience&AIOverview.jpg';
import Deeplearning from '../Assets/AI/Deeplearning.jpg';
import MachineLearning from '../Assets/AI/MechineLearning.png';
import NaturalLanguageProcessing from '../Assets/AI/NaturalLanguageProcessing.jpg';
import PredictiveAnalytics from '../Assets/AI/PredictiveAnalytics.jpg';
import Python from '../Assets/AI/Python.png';
import PyTorch from '../Assets/AI/PyTorch.avif';
import R from '../Assets/AI/R.webp';
import RecommendationSystems from '../Assets/AI/RecommendationSystems.jpg';
import TensorFlow from '../Assets/AI/TensorFlow.png';

const Datascience = () => {
  const [currentTab, setCurrentTab] = useState('overview');
  const [loading, setLoading] = useState(true);

  // Data for Data Science and AI with local images
  const dataScienceData = {
    overview: {
      title: "Data Science & AI Overview",
      description: "Data science combines statistics, programming, and domain expertise to extract insights from data. Artificial Intelligence (AI) focuses on creating systems that can perform tasks requiring human intelligence, often powered by data science techniques.",
      image: DataScienceOverview
    },
    techniques: {
      title: "Core Data Science Techniques",
      items: [
        { name: "Machine Learning", image: MachineLearning },
        { name: "Deep Learning", image: Deeplearning },
        { name: "Natural Language Processing", image: NaturalLanguageProcessing },
        { name: "Computer Vision", image: ComputerVision }
      ]
    },
    tools: {
      title: "Popular Data Science Tools",
      items: [
        { name: "Python", image: Python },
        { name: "R", image: R },
        { name: "TensorFlow", image: TensorFlow },
        { name: "PyTorch", image: PyTorch }
      ]
    },
    applications: {
      title: "AI Applications",
      items: [
        { name: "Predictive Analytics", image: PredictiveAnalytics },
        { name: "Chatbots", image: Chatbots },
        { name: "Recommendation Systems", image: RecommendationSystems },
        { name: "Autonomous Vehicles", image: AutonomousVehicles }
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
      case 'techniques':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {dataScienceData.techniques.items.map((tech, index) => (
              <TechCard key={index} name={tech.name} image={tech.image} />
            ))}
          </div>
        );
      case 'tools':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {dataScienceData.tools.items.map((tech, index) => (
              <TechCard key={index} name={tech.name} image={tech.image} />
            ))}
          </div>
        );
      case 'applications':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {dataScienceData.applications.items.map((tech, index) => (
              <TechCard key={index} name={tech.name} image={tech.image} />
            ))}
          </div>
        );
      default:
        return (
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <img 
                src={dataScienceData.overview.image} 
                alt="Data Science Overview" 
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold mb-4">{dataScienceData.overview.title}</h2>
              <p className="text-gray-700 mb-4">{dataScienceData.overview.description}</p>
              <div className="bg-blue-100 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-2">Key Components:</h3>
                <ul className="list-disc list-inside text-blue-700">
                  <li>Data collection and preprocessing</li>
                  <li>Exploratory data analysis</li>
                  <li>Model building and training</li>
                  <li>Model evaluation and deployment</li>
                  <li>Continuous monitoring and improvement</li>
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
            Data Science & AI
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
            Transforming data into intelligent decisions
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center mb-8 border-b border-gray-200">
          {['overview', 'techniques', 'tools', 'applications'].map((tab) => (
            <button
              key={tab}
              onClick={() => setCurrentTab(tab)}
              className={`px-6 py-3 font-medium text-sm rounded-t-lg mr-2 mb-2 ${currentTab === tab ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1).replace(/([A-Z])/g, ' $1')}
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
              {dataScienceData[currentTab]?.title || dataScienceData.overview.title}
            </h2>
            {renderContent()}
          </div>
        )}

        {/* Data Science Workflow Diagram */}
        <div className="mt-12 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Data Science Workflow</h2>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {['Data Collection', 'Data Cleaning', 'Exploration', 'Modeling', 'Evaluation', 'Deployment'].map((step, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-2">
                  <span className="text-blue-600 font-bold">{index + 1}</span>
                </div>
                <span className="text-sm font-medium text-gray-700">{step}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-gray-500 text-sm">
          <p>Data is the new oil, but AI is the engine that makes it valuable</p>
          <p className="mt-2">© {new Date().getFullYear()} Data Science & AI</p>
        </div>
      </div>
    </div>
  );
};

export default Datascience;