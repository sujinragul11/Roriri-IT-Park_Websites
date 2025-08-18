// src/pages/TermsOfService.js
import React from 'react';
import PolicyLayout from '../components/PolicyLayout';

const TermsOfService = () => {
  return (
    <PolicyLayout title="Terms of Service">
      <h2>1. Acceptance of Terms</h2>
      <p>
        By accessing or using any services provided by Roriri IT Park, you agree to be bound by these Terms of 
        Service. If you disagree with any part of the terms, you may not access the service.
      </p>
      
      <h2>2. Service Description</h2>
      <p>
        Roriri IT Park provides IT training, software solutions, and related services. We reserve the right to 
        modify or discontinue any service at any time without notice.
      </p>
      
      <h2>3. User Responsibilities</h2>
      <p>As a user, you agree to:</p>
      <ul>
        <li>Provide accurate and complete information</li>
        <li>Maintain the confidentiality of your account credentials</li>
        <li>Not use the services for any illegal purpose</li>
        <li>Not interfere with or disrupt the service</li>
      </ul>
      
      <h2>4. Intellectual Property</h2>
      <p>
        All content, trademarks, and data on our website and services are the property of Roriri IT Park and are 
        protected by intellectual property laws.
      </p>
      
      <h2>5. Limitation of Liability</h2>
      <p>
        Roriri IT Park shall not be liable for any indirect, incidental, special, consequential or punitive damages 
        resulting from your access to or use of our services.
      </p>
      
      <h2>6. Governing Law</h2>
      <p>
        These Terms shall be governed by and construed in accordance with the laws of India, without regard to its 
        conflict of law provisions.
      </p>
      
      <h2>7. Changes to Terms</h2>
      <p>
        We reserve the right to modify these terms at any time. Your continued use of the service after any such 
        changes constitutes your acceptance of the new Terms.
      </p>
    </PolicyLayout>
  );
};

export default TermsOfService;