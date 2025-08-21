// Validation utilities for API endpoints

const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validatePhone = (phone) => {
  const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
  return phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''));
};

const validatePassword = (password) => {
  // At least 8 characters, 1 uppercase, 1 lowercase, 1 number
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/;
  return passwordRegex.test(password);
};

const validateRequired = (fields, data) => {
  const missing = [];
  fields.forEach(field => {
    if (!data[field] || (typeof data[field] === 'string' && data[field].trim() === '')) {
      missing.push(field);
    }
  });
  return missing;
};

const sanitizeInput = (input) => {
  if (typeof input !== 'string') return input;
  return input.trim().replace(/[<>]/g, '');
};

const validatePagination = (page, limit) => {
  const pageNum = parseInt(page) || 1;
  const limitNum = parseInt(limit) || 10;
  
  return {
    page: Math.max(1, pageNum),
    limit: Math.min(100, Math.max(1, limitNum)),
    skip: (Math.max(1, pageNum) - 1) * Math.min(100, Math.max(1, limitNum))
  };
};

export {
  validateEmail,
  validatePhone,
  validatePassword,
  validateRequired,
  sanitizeInput,
  validatePagination
};