// src/pages/CookiePolicy.js
import React from 'react';
import PolicyLayout from '../components/PolicyLayout';


const CookiePolicy = () => {
  return (
    <PolicyLayout title="Cookie Policy">
      <h2>1. What Are Cookies</h2>
      <p>
        Cookies are small text files stored on your device when you visit our website. They help the website 
        remember information about your visit, which can make it easier to visit the site again and make the site 
        more useful to you.
      </p>
      
      <h2>2. How We Use Cookies</h2>
      <p>We use cookies for various purposes including:</p>
      <ul>
        <li>Essential website functionality</li>
        <li>Performance and analytics</li>
        <li>Personalization</li>
        <li>Marketing and advertising</li>
      </ul>
      
      <h2>3. Types of Cookies We Use</h2>
      <p><strong>Strictly Necessary Cookies:</strong> Required for basic site functionality.</p>
      <p><strong>Performance Cookies:</strong> Help us understand how visitors interact with our website.</p>
      <p><strong>Functionality Cookies:</strong> Remember choices you make to improve your experience.</p>
      <p><strong>Targeting Cookies:</strong> Used to deliver relevant ads and track ad performance.</p>
      
      <h2>4. Third-Party Cookies</h2>
      <p>
        We may use third-party services that place cookies on your device. These include analytics services like 
        Google Analytics and advertising networks.
      </p>
      
      <h2>5. Managing Cookies</h2>
      <p>
        You can control or delete cookies through your browser settings. However, disabling cookies may affect your 
        ability to use certain features of our website.
      </p>
      
      <h2>6. Changes to This Policy</h2>
      <p>
        We may update this Cookie Policy from time to time. We will notify you of any changes by posting the new 
        Cookie Policy on this page.
      </p>
      
      <h2>7. Contact Us</h2>
      <p>
        If you have any questions about our use of cookies, please contact us at admin@roririsoft.com.
      </p>
    </PolicyLayout>
  );
};

export default CookiePolicy;