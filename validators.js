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


const validateLogin = [

  // Validate email
  body('email').isEmail().withMessage('Invalid email address'),

  // Validate password
  body('password')
    .isLength({ min: 8 })
    .withMessage('Password must be at least 8 characters long')

];





//middleware

const handleValidationErrors = (req, res, next) => {
  // Check for validation errors
  console.log("handle validations request >", req.body.email);
  const errors = validationResult(req);
  if (!errors.isEmpty()) {


    //const data = errors[0].msg;
    //  console.log(data);
    const msg = errors.array()[0].msg;

    //console.log("error",errors[0].msg);
    return res.render('signup', {
      msg,
      username: req.body.username,
      email: req.body.email,
      password: req.body.password


    });

    return res.status(400).json({ errors: errors.array() });
  }
  console.log("after sending errors")
  next();
};

module.exports = {
  validateRegistration,
  handleValidationErrors,
  validateLogin
};
