const { validateEmail, validatePhone, validateRequired, sanitizeInput } = require('../utils/validation');

// Middleware for validating user registration/creation
const validateUser = (req, res, next) => {
  const { username, email, password } = req.body;
  
  // Sanitize inputs
  req.body.username = sanitizeInput(username);
  req.body.email = sanitizeInput(email);
  
  // Check required fields
  const missing = validateRequired(['username', 'email', 'password'], req.body);
  if (missing.length > 0) {
    return res.status(400).json({ 
      error: 'Missing required fields', 
      missing 
    });
  }
  
  // Validate email format
  if (!validateEmail(email)) {
    return res.status(400).json({ error: 'Invalid email format' });
  }
  
  // Validate username length
  if (username.length < 3 || username.length > 50) {
    return res.status(400).json({ error: 'Username must be between 3 and 50 characters' });
  }
  
  next();
};

// Middleware for validating course data
const validateCourse = (req, res, next) => {
  const { title, description, duration, price } = req.body;
  
  // Sanitize inputs
  req.body.title = sanitizeInput(title);
  req.body.description = sanitizeInput(description);
  req.body.duration = sanitizeInput(duration);
  
  // Check required fields
  const missing = validateRequired(['title', 'description', 'duration', 'price'], req.body);
  if (missing.length > 0) {
    return res.status(400).json({ 
      error: 'Missing required fields', 
      missing 
    });
  }
  
  // Validate price
  const priceNum = parseFloat(price);
  if (isNaN(priceNum) || priceNum < 0) {
    return res.status(400).json({ error: 'Price must be a valid positive number' });
  }
  
  next();
};

// Middleware for validating contact forms
const validateContact = (req, res, next) => {
  const { name, email, message } = req.body;
  
  // Sanitize inputs
  req.body.name = sanitizeInput(name);
  req.body.email = sanitizeInput(email);
  req.body.message = sanitizeInput(message);
  
  // Check required fields
  const missing = validateRequired(['name', 'email', 'message'], req.body);
  if (missing.length > 0) {
    return res.status(400).json({ 
      error: 'Missing required fields', 
      missing 
    });
  }
  
  // Validate email
  if (!validateEmail(email)) {
    return res.status(400).json({ error: 'Invalid email format' });
  }
  
  // Validate phone if provided
  if (req.body.phone && !validatePhone(req.body.phone)) {
    return res.status(400).json({ error: 'Invalid phone number format' });
  }
  
  next();
};

module.exports = {
  validateUser,
  validateCourse,
  validateContact
};