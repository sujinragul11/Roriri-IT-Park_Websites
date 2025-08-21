// src/pages/PrivacyPolicy.js
import React from 'react';
import PolicyLayout from '../components/PolicyLayout';

const PrivacyPolicy = () => {
  return (
    <PolicyLayout title="Privacy Policy">
      <h2>1. Introduction</h2>
      <p>
        At Roriri IT Park, we are committed to protecting your privacy. This Privacy Policy explains how we collect, 
        use, disclose, and safeguard your information when you visit our website or use our services.
      </p>
      
      <h2>2. Information We Collect</h2>
      <p>We may collect personal information including but not limited to:</p>
      <ul>
        <li>Name and contact details (email, phone number, address)</li>
        <li>Demographic information</li>
        <li>Payment and transaction details</li>
        <li>Technical data (IP address, browser type, device information)</li>
      </ul>
      
      <h2>3. How We Use Your Information</h2>
      <p>We use the collected information for purposes such as:</p>
      <ul>
        <li>Providing and maintaining our services</li>
        <li>Improving user experience</li>
        <li>Processing transactions</li>
        <li>Sending periodic emails</li>
        <li>Analyzing website usage</li>
      </ul>
      
      <h2>4. Data Protection</h2>
      <p>
        We implement appropriate security measures to protect your personal information from unauthorized access, 
        alteration, disclosure, or destruction.
      </p>
      
      <h2>5. Third-Party Disclosure</h2>
      <p>
        We do not sell, trade, or transfer your personally identifiable information to outside parties unless we 
        provide users with advance notice.
      </p>
      
      <h2>6. Changes to This Policy</h2>
      <p>
        We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new 
        Privacy Policy on this page.
      </p>
      
      <h2>7. Contact Us</h2>
      <p>
        If you have any questions about this Privacy Policy, please contact us at admin@roririsoft.com.
      </p>
    </PolicyLayout>
  );
};

export default PrivacyPolicy;