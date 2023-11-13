//defination
//middlewares are used to become middle in request an dresponse
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

module.exports = {appLevelMiddleware};


