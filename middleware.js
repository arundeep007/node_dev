//defination
//middlewares are used to become middle in request and response
// types of middleware 
// Application level middleware-> this apply to all apllication eg. app.use(mymiddleware)

// Router-level Middleware:
//Similar to application-level middleware, but bound to a specific route.
//It is applied to a specific router using router.use(middlewareFunction).
//Useful for handling specific logic for a group of routes.

/*Built-in Middleware:

Middleware functions provided by Express itself.
Examples include express.json() for parsing JSON in the request body and express.urlencoded() for parsing URL-encoded data.
Applied using app.use(expressMiddlewareFunction).
Error Handling Middleware:

Special middleware to handle errors.
It takes four parameters (err, req, res, next) and is recognized as an error-handling middleware by the fact that it has four parameters.
Usage: app.use((err, req, res, next) => { /* error handling logic  })
Third-party Middleware:

Middleware functions provided by third-party packages.
Examples include morgan for logging HTTP requests and responses and helmet for setting various HTTP headers.
Installed and used via npm.
Custom Middleware:

Middleware functions created by developers for specific application needs.
These can be inserted into the middleware stack using app.use(customMiddlewareFunction).
Useful for tasks like authorization, session management, etc.*/

//database
const { connectToMongoDB, closeMongoDBConnection } = require('./database');
const User = require('./models/userModel'); // user model
const bcrypt = require('bcrypt');
const db = require('./database');

const jwt = require('jsonwebtoken'); // token
const appLevelMiddleware = (req, res, next) => {



  console.log("hello this is the middleware 1 checkin admin");

  const { username, password } = req.query

  if (!username) {
    
    res.send('<h1>username is required</h1>');
  } else if (!password) {

    res.send('<h1>password is required</h1>');
  } else {
    if (username == "admin" && password == "admin") {
      next();
    } else {
      res.send("<h1>credentioal provided doesn't match </h1>");
    }

  }
}
const routerLevelMiddleware = (req, res, next) => {
  console.log("this is a routerLevelMiddleware1");
  next();
}




async function authenticateUser(req, res, next) {

  // Connect to the database
  const { email, password } = req.body;
  console.log("email passwrd", email, password);

  try {
    // Check if the email exists in the database
    await db.connectToMongoDB();
    const user = await User.findOne({ email: email });
    const users = await User.find();
    console.log("all user data is:", user);

    if (!user) {
      return res.status(401).json({ message: 'Invalid  email or password' });
    }

    // Compare the provided password with the stored hash using bcrypt
    bcrypt.compare(password, user.password, (err, result) => {
      if (err || !result) {
        return res.status(401).json({ message: 'Invalid  email or password' });
      }
      // Attach the user object to the request
      req.user = user;

      // Proceed to the next middleware
      next();
    });
  } catch (erro) {
    console.error('Error authenticating user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}



const generateTokenMiddleware = (req, res, next) => {
  // Assuming you have a user object attached to the request after login
  const user = req.user;

  // Check if the user is authenticated
  if (!user) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  // Generate a JSON token
  const token = jwt.sign({ userId: user.id, username: user.username }, process.env.SECRETKEY, { expiresIn: '1h' });

  // Attach the token to the response or store it in a secure way
  res.locals.token = token;

  // Continue with the next middleware or route handler
  next();
}



//for token verification 

function verifyTokenMiddleware(req, res, next) {

  console.log("verifyuser initialized");

  const token = req.headers.authorization && req.headers.authorization.split(" ")[2];

  console.log("token is ", token);

  if (!token) {
    return res.status(401).json({ error: 'Unauthorized - No token provided' });
  }

  jwt.verify(token, process.env.SECRETKEY, (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: 'Unauthorized - Invalid token' });
    }

    // Attach the decoded user information to the request for further use
    req.user = decoded;

    // Continue with the next middleware or route handler
    next();
  });
}




module.exports = {
  appLevelMiddleware,
  routerLevelMiddleware,
  authenticateUser,
  generateTokenMiddleware,
  verifyTokenMiddleware
};



