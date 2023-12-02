// validators.js
const { body, validationResult } = require('express-validator');

const validateRegistration = [
  // Validate username
  body('username').isLength({ min: 6 }).withMessage('Username must be at least 6 characters long'),

  // Validate email
  body('email').isEmail().withMessage('Invalid email address'),

  // Validate password
  body('password')
    .isLength({ min: 8 })
    .withMessage('Password must be at least 8 characters long')
    .matches(/\d/)
    .withMessage('Password must contain at least one digit')
    .matches(/[A-Z]/)
    .withMessage('Password must contain at least one uppercase letter'),
];

//middleware

const handleValidationErrors = (req, res, next) => {
  // Check for validation errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  console.log("after sending errors")
  next();
};

module.exports = {
  validateRegistration,
  handleValidationErrors,
};
