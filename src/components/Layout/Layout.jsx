import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout = () => {
  const location = useLocation();
  
  // Define routes where footer should be shown
  const showFooterRoutes = ['/', '/home', '/nexgen'];
  
  // Check if current route should show footer
  const shouldShowFooter = showFooterRoutes.includes(location.pathname);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      {shouldShowFooter && <Footer />}
    </div>
  );
};

export default Layout;