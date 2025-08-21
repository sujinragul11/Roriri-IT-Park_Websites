import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Plus, Edit, Trash2, Eye, Search } from 'lucide-react';
import axios from 'axios';

const ManagePackages = () => {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [editingPackage, setEditingPackage] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    duration: '',
    includes: '',
    maxPeople: '',
    imageUrls: ''
  });

  useEffect(() => {
    fetchPackages();
  }, []);

  const fetchPackages = async () => {
    try {
      const response = await axios.get('/api/packages');
      setPackages(response.data);
    } catch (error) {
      console.error('Failed to fetch packages:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const imageUrls = formData.imageUrls.split(',').map(url => url.trim()).filter(url => url);
      const packageData = {
        ...formData,
        imageUrls
      };

      if (editingPackage) {
        await axios.put(`/api/packages/${editingPackage.id}`, packageData);
      } else {
        await axios.post('/api/packages', packageData);
      }
      
      fetchPackages();
      setShowModal(false);
      resetForm();
    } catch (error) {
      alert('Failed to save package');
      console.error('Save error:', error);
    }
  };

  const handleEdit = (pkg) => {
    setEditingPackage(pkg);
    const imageUrls = pkg.image_urls ? JSON.parse(pkg.image_urls) : [];
    setFormData({
      name: pkg.name,
      description: pkg.description,
      price: pkg.price,
      duration: pkg.duration || '',
      includes: pkg.includes || '',
      maxPeople: pkg.max_people || '',
      imageUrls: imageUrls.join(', ')
    });
    setShowModal(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this package?')) {
      try {
        await axios.delete(`/api/packages/${id}`);
        fetchPackages();
      } catch (error) {
        alert('Failed to delete package');
        console.error('Delete error:', error);
      }
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      description: '',
      price: '',
      duration: '',
      includes: '',
      maxPeople: '',
      imageUrls: ''
    });
    setEditingPackage(null);
  };

  const filteredPackages = packages.filter(pkg =>
    pkg.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    pkg.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-96">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Manage Packages - Admin | RoririItPark</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Manage Packages</h1>
            <p className="text-gray-600 mt-2">Manage farm experience packages</p>
          </div>
          <button
            onClick={() => {
              resetForm();
              setShowModal(true);
            }}
            className="mt-4 sm:mt-0 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-colors duration-200 flex items-center space-x-2"
          >
            <Plus className="h-5 w-5" />
            <span>Add Package</span>
          </button>
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            placeholder="Search packages..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPackages.map((pkg) => {
            const imageUrls = pkg.image_urls ? JSON.parse(pkg.image_urls) : [];
            return (
              <div key={pkg.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300">
                {imageUrls.length > 0 && (
                  <img
                    src={imageUrls[0]}
                    alt={pkg.name}
                    className="w-full h-48 object-cover"
                  />
                )}
                
                <div className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">
                      {pkg.name}
                    </h3>
                    <span className="text-lg font-bold text-green-600">
                      ${pkg.price}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {pkg.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span>Duration: {pkg.duration || 'N/A'}</span>
                    <span>Max: {pkg.max_people || 'N/A'} people</span>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => window.open(`/rithishfarms/package/${pkg.id}`, '_blank')}
                      className="flex-1 bg-green-100 text-green-700 hover:bg-green-200 px-3 py-2 rounded-lg transition-colors duration-200 flex items-center justify-center"
                    >
                      <Eye className="h-4 w-4 mr-1" />
                      View
                    </button>
                    <button
                      onClick={() => handleEdit(pkg)}
                      className="flex-1 bg-blue-100 text-blue-700 hover:bg-blue-200 px-3 py-2 rounded-lg transition-colors duration-200 flex items-center justify-center"
                    >
                      <Edit className="h-4 w-4 mr-1" />
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(pkg.id)}
                      className="flex-1 bg-red-100 text-red-700 hover:bg-red-200 px-3 py-2 rounded-lg transition-colors duration-200 flex items-center justify-center"
                    >
                      <Trash2 className="h-4 w-4 mr-1" />
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredPackages.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No packages found.</p>
          </div>
        )}

        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
            <div className="relative top-20 mx-auto p-5 border w-full max-w-2xl bg-white rounded-lg shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold">
                  {editingPackage ? 'Edit Package' : 'Add New Package'}
                </h3>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ×
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Package Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Description *
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Price *
                    </label>
                    <input
                      type="number"
                      name="price"
                      value={formData.price}
                      onChange={handleInputChange}
                      required
                      step="0.01"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Duration
                    </label>
                    <input
                      type="text"
                      name="duration"
                      value={formData.duration}
                      onChange={handleInputChange}
                      placeholder="e.g., 2 days"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Max People
                    </label>
                    <input
                      type="number"
                      name="maxPeople"
                      value={formData.maxPeople}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    What's Included
                  </label>
                  <textarea
                    name="includes"
                    value={formData.includes}
                    onChange={handleInputChange}
                    placeholder="e.g., Farm tour, organic meals, activities"
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Image URLs (comma-separated)
                  </label>
                  <textarea
                    name="imageUrls"
                    value={formData.imageUrls}
                    onChange={handleInputChange}
                    placeholder="https://example.com/image1.jpg, https://example.com/image2.jpg"
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>

                <div className="flex justify-end space-x-3 pt-6">
                  <button
                    type="button"
                    onClick={() => setShowModal(false)}
                    className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors duration-200"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200"
                  >
                    {editingPackage ? 'Update' : 'Create'} Package
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ManagePackages;