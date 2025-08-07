import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AuthProvider } from './contexts/AuthContext';

// Layout Components
import Layout from './components/Layout/Layout';
import AdminLayout from './components/Layout/AdminLayout';

// Main Pages
import HomePage from './pages/HomePage';
import ItAcademy from './pages/ITAcademy';
import RithishFarms from './pages/RithishFarms';
import RoshanTiles from './pages/RoshanTiles';
import IndustrialVisits from './pages/IndustrialVisits';

// Admin Pages
import AdminLogin from './pages/Admin/AdminLogin';
import AdminDashboard from './pages/Admin/AdminDashboard';
import ManageCourses from './pages/Admin/ManageCourses';
import ManageProducts from './pages/Admin/ManageProducts';
import ManagePackages from './pages/Admin/ManagePackages';
import ManageBookings from './pages/Admin/ManageBookings';

// Additional Components
import ITAcademy from './pages/ITAcademy';
import RegistrationForm from './pages/RegistrationForm';
import NotFound from './pages/NotFound';

function App() {
  return (
    <HelmetProvider>
      <AuthProvider>
        <Router>
          <div className="min-h-screen bg-gray-50">
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path="itacademy" element={<ItAcademy />} />
                <Route path="rithishfarms" element={<RithishFarms />} />
                <Route path="roshantiles" element={<RoshanTiles />} />
                <Route path="industrialvisits" element={<IndustrialVisits />} />
              </Route>
              
              {/* IT Academy Registration */}
              <Route path="/register" element={<RegistrationForm />} />
              
              {/* IT Academy Enhanced */}
              <Route path="/ITAcademy" element={<ITAcademy />} />
              
              {/* Admin Routes */}
              <Route path="/admin/login" element={<AdminLogin />} />
              <Route path="/admin" element={<AdminLayout />}>
                <Route index element={<AdminDashboard />} />
                <Route path="courses" element={<ManageCourses />} />
                <Route path="products" element={<ManageProducts />} />
                <Route path="packages" element={<ManagePackages />} />
                <Route path="bookings" element={<ManageBookings />} />
              </Route>

              {/* 404 Route */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </Router>
      </AuthProvider>
    </HelmetProvider>
  );
}

export default App;