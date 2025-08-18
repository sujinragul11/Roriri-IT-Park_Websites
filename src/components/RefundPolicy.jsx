// src/pages/RefundPolicy.js
import React from 'react';
import PolicyLayout from '../components/PolicyLayout';

const RefundPolicy = () => {
  return (
    <PolicyLayout title="Refund Policy">
      <h2>1. General Refund Policy</h2>
      <p>
        Roriri IT Park offers refunds under specific circumstances as outlined in this policy. Please read this 
        policy carefully before making a purchase.
      </p>
      
      <h2>2. Digital Products and Services</h2>
      <p>
        Due to the nature of digital products, we generally do not offer refunds for software licenses, digital 
        downloads, or completed services. Exceptions may be made at our discretion.
      </p>
      
      <h2>3. Training Programs</h2>
      <p>
        For training programs and courses:
      </p>
      <ul>
        <li>100% refund if cancelled at least 7 days before the program start date</li>
        <li>50% refund if cancelled between 3-6 days before the program start date</li>
        <li>No refund for cancellations within 48 hours of the program start date</li>
      </ul>
      
      <h2>4. Processing Time</h2>
      <p>
        Approved refunds will be processed within 7-10 business days and credited to the original payment method.
      </p>
      
      <h2>5. Non-Refundable Items</h2>
      <p>The following are non-refundable:</p>
      <ul>
        <li>Custom development work that has already begun</li>
        <li>Consultation fees</li>
        <li>Downloaded software or digital products</li>
      </ul>
      
      <h2>6. How to Request a Refund</h2>
      <p>
        To request a refund, please contact our support team at admin@roririsoft.com with your order details and 
        reason for the refund request.
      </p>
    </PolicyLayout>
  );
};

export default RefundPolicy;