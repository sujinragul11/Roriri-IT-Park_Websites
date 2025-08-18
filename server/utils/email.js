const nodemailer = require('nodemailer');

let transporter = null;

// Initialize transporter only if SMTP credentials are provided
if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
  transporter = nodemailer.createTransporter({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT) || 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
} else {
  console.warn('⚠️ SMTP credentials not configured. Email functionality will be disabled.');
}

const sendEmail = async ({ to, subject, text, html }) => {
  if (!transporter) {
    console.log('📧 Email would be sent to:', to, 'Subject:', subject);
    return { messageId: 'mock-email-id' };
  }

  try {
    const info = await transporter.sendMail({
      from: process.env.SMTP_USER,
      to,
      subject,
      text,
      html,
    });
    console.log('📧 Email sent:', info.messageId);
    return info;
  } catch (error) {
    console.error('📧 Email error:', error);
    throw error;
  }
};

// Test email configuration
const testEmailConfig = async () => {
  if (!transporter) return false;
  
  try {
    await transporter.verify();
    console.log('✅ Email configuration is valid');
    return true;
  } catch (error) {
    console.error('❌ Email configuration error:', error.message);
    return false;
  }
};

module.exports = { sendEmail, testEmailConfig };