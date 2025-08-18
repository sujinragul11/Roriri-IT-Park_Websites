import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Users, 
  BookOpen, 
  Package, 
  Calendar, 
  MessageSquare, 
  TrendingUp,
  Download,
  Eye
} from 'lucide-react';
import axios from 'axios';

const AdminDashboard = () => {
  const [stats, setStats] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const response = await axios.get('/api/admin/stats');
      setStats(response.data);
    } catch (error) {
      console.error('Failed to fetch stats:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleExport = async (type) => {
    try {
      const response = await axios.get(`/api/admin/export/${type}`, {
        responseType: 'blob'
      });
      
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `${type}.csv`);
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      alert('Export failed. Please try again.');
      console.error('Export error:', error);
    }
  };

  const dashboardCards = [
    {
      title: 'Total Courses',
      value: stats.totalCourses || 0,
      icon: BookOpen,
      color: 'from-blue-600 to-indigo-600',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-600'
    },
    {
      title: 'Total Products',
      value: stats.totalProducts || 0,
      icon: Package,
      color: 'from-orange-600 to-red-600',
      bgColor: 'bg-orange-50',
      textColor: 'text-orange-600'
    },
    {
      title: 'Total Packages',
      value: stats.totalPackages || 0,
      icon: Package,
      color: 'from-green-600 to-emerald-600',
      bgColor: 'bg-green-50',
      textColor: 'text-green-600'
    },
    {
      title: 'Total Bookings',
      value: stats.totalBookings || 0,
      icon: Calendar,
      color: 'from-purple-600 to-pink-600',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-600'
    },
    {
      title: 'Total Inquiries',
      value: stats.totalInquiries || 0,
      icon: MessageSquare,
      color: 'from-teal-600 to-cyan-600',
      bgColor: 'bg-teal-50',
      textColor: 'text-teal-600'
    }
  ];

  const exportOptions = [
    { type: 'bookings', label: 'Bookings', icon: Calendar },
    { type: 'inquiries', label: 'Inquiries', icon: MessageSquare },
    { type: 'enrollments', label: 'Course Enrollments', icon: BookOpen },
    { type: 'applications', label: 'Job Applications', icon: Users }
  ];

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
        <title>Admin Dashboard - RoririItPark</title>
        <meta name="description" content="Admin dashboard for managing RoririItPark businesses." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-2">
            Welcome back! Here's an overview of your Organizations performance.
          </p>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {dashboardCards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{card.title}</p>
                  <p className="text-3xl font-bold text-gray-900 mt-2">{card.value}</p>
                </div>
                <div className={`w-12 h-12 ${card.bgColor} rounded-lg flex items-center justify-center`}>
                  <card.icon className={`h-6 w-6 ${card.textColor}`} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Recent Activity and Export Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Enrollments */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900">Recent Enrollments</h2>
              <TrendingUp className="h-5 w-5 text-green-600" />
            </div>
            
            {stats.recentEnrollments && stats.recentEnrollments.length > 0 ? (
              <div className="space-y-4">
                {stats.recentEnrollments.map((enrollment, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium text-gray-900">{enrollment.student_name}</p>
                      <p className="text-sm text-gray-600">{enrollment.course_title}</p>
                      <p className="text-xs text-gray-500">
                        {new Date(enrollment.created_at).toLocaleDateString()}
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="inline-block w-2 h-2 bg-green-400 rounded-full"></span>
                      <span className="text-sm text-gray-600">New</span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center text-gray-500 py-8">
                <BookOpen className="h-12 w-12 mx-auto mb-4 text-gray-400" />
                <p>No recent enrollments</p>
              </div>
            )}
          </div>

          {/* Export Data */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900">Export Data</h2>
              <Download className="h-5 w-5 text-blue-600" />
            </div>
            
            <div className="space-y-3">
              {exportOptions.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleExport(option.type)}
                  className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                >
                  <div className="flex items-center space-x-3">
                    <option.icon className="h-5 w-5 text-gray-600" />
                    <span className="font-medium text-gray-900">{option.label}</span>
                  </div>
                  <Download className="h-4 w-4 text-gray-400" />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <a
              href="/admin/courses"
              className="flex items-center justify-center p-6 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors duration-200 group"
            >
              <div className="text-center">
                <BookOpen className="h-8 w-8 text-blue-600 mx-auto mb-2 group-hover:scale-110 transition-transform duration-200" />
                <p className="font-medium text-blue-900">Manage Courses</p>
              </div>
            </a>
            
            <a
              href="/admin/products"
              className="flex items-center justify-center p-6 bg-orange-50 hover:bg-orange-100 rounded-lg transition-colors duration-200 group"
            >
              <div className="text-center">
                <Package className="h-8 w-8 text-orange-600 mx-auto mb-2 group-hover:scale-110 transition-transform duration-200" />
                <p className="font-medium text-orange-900">Manage Products</p>
              </div>
            </a>
            
            <a
              href="/admin/packages"
              className="flex items-center justify-center p-6 bg-green-50 hover:bg-green-100 rounded-lg transition-colors duration-200 group"
            >
              <div className="text-center">
                <Package className="h-8 w-8 text-green-600 mx-auto mb-2 group-hover:scale-110 transition-transform duration-200" />
                <p className="font-medium text-green-900">Manage Packages</p>
              </div>
            </a>
            
            <a
              href="/admin/bookings"
              className="flex items-center justify-center p-6 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors duration-200 group"
            >
              <div className="text-center">
                <Calendar className="h-8 w-8 text-purple-600 mx-auto mb-2 group-hover:scale-110 transition-transform duration-200" />
                <p className="font-medium text-purple-900">View Bookings</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;