//entry point of app
require('dotenv').config();
const express = require('express');
const User = require('./models/userModel');
console.log("test str is ", process.env.testStr)
const { validateRegistration, handleValidationErrors } = require('./validators');
const { connectToMongoDB, closeMongoDBConnection } = require('./database');

const bodyParser = require('body-parser');
const path = require('path');
const loadPages = path.join(__dirname, 'registration');
const port = process.env.PORT || 4000;
const users = [];
const { appLevelMiddleware, routerLevelMiddleware } = require('./middleware.js');


//db 
//connectToMongoDB();

/*const mongo = require('mongodb');
const {MongoClient} = require('mongodb')

var db=mongo.connection;*/

//first of all connect to db and then perform other functions


connectToMongoDB();

console.log("hello next next ")
console.log("hello next next ")
console.log("hello next next ")
console.log("hello next next ")


const app = express();

//making route1 for routerLevelMiddleware



const route1 = express.Router();
route1.use(routerLevelMiddleware);

//Set ejs as templating engine
app.set('view engine', 'ejs');
// middleware for parsing json requests 
app.use(bodyParser.json());
//it is used for loading static pages eg about.html
app.use(express.static(loadPages));

//using middleware for all routes


//app.use(appLevelMiddleware);

//db
app.get('/about', (req, res) => {

    console.log("query parms are ", req.query.name);
    res.send('<h3>This is the about section</>')
});

app.get('/', (req, res) => {
    //create a object that pass to the html while rendering
    //if db is connect it comes from db ok 
    const user = {
        username: "arundeep singh g",
        email: "arun1@gmkail.com",
        skills: ["android", "node js", "kotlin", "mvvm"]
    }

    //also we learn and implement moddlewares to check whether the user is logged in or not or much more
    res.render('homepage', { user });
    //res.sendFile(path.join(loadPages,'signup.html'));

});
app.get('/home', (req, res) => {
    //create a object that pass to the html while rendering
    //if db is connect it comes from db ok 
    const user = {
        username: "arundeep singh g",
        email: "arun1@gmkail.com",
        skills: ["android dev", "node js", "kotlin", "mvvm"]

    }

    //also we learn and implement moddlewares to check whether the user is logged in or not or much more
    res.render('homepage', { user });
    //res.sendFile(path.join(loadPages,'signup.html'));

});

app.get('/admin', (req, res) => {
    console.log("admin loginc")
    res.sendFile(path.join(loadPages, 'simple.html'));

});


app.post('/register', (request, response) => {

    try {

        const errors = [];
        const { username, email, password } = request.body;
        console.log("new", username, email, password, "hellos");

        if (!username) {
            errors.push("username is required")
        } else if (!email) {
            errors.push("email is required")

        } else {

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!email.match(emailRegex)) {
                errors.push("Invalid email format");
            }

        }

        if (!password) {

            errors.push("password is required");
        }

        if (errors.length > 0) {
            return response.status(400).json({ "error": errors });
        }

        //now save users etc here

        const newUser = {
            "username": username,
            "email": email,
            "password": password
        }
        users.push(newUser)
        return response.status(201).json({
            "message": "user successfully created",
            userData: newUser
        });


    } catch (error) {
        console.log("internal server error is ", error)
        response.status(500).json({ "error": 'Internal Server error' });

    }

});
app.get('/users', (req, res) => {

    res.status(200).json({ users: users })

});

app.get('/signup', (req, res) => {

    //for static html pages 
    // res.sendFile(path.join(loadPages,'signup.html'));
    // res.send("hello");

    //for dynamic pages eg. ejs tempelates

    res.render('signup')
    console.log("render signup page");

});

app.get('/login', (req, res) => {

    //for static html pages 
    // res.sendFile(path.join(loadPages,'signup.html'));
    // res.send("hello");

    //for dynamic pages eg. ejs tempelates

    res.render('login')
    console.log("render Login page");

});

app.get('/new', routerLevelMiddleware, (req, res) => {

    //for removing all extensions 
    res.send("<h1>Hello this is latest features in your app</>")
});

route1.get('/route', routerLevelMiddleware, (req, res) => {

    //for removing all extensions 
    res.send("<h1>Hello this is routerLevelMiddleware1 in your app</>")
});
app.use('/', route1);
app.get('*', (req, res) => {

    //for removing all extensions 
    res.sendFile(path.join(loadPages, '404.html'));
});

app.post('/signupr', validateRegistration, handleValidationErrors, (req, res) => {
    try {
        // Process registration logic (add your database logic here)
        const { username, email, password } = req.body;
        // ... (save user to the database, for example)

        // Create a new user
        const newUser = new User({
            username: 'exampleUser',
            email: 'user@example.com',
            password: 'password123',
        });
        // Save the user to the database
newUser.save()
.then(user => {
  console.log('User saved:', user);
  res.status(200).json({ message: 'Registration successful',
        data:user
 
    });



})
.catch(error => {
  console.error('Error saving user:', error);

  console.log("error details are",error.name,"ss",error.code);


  res.status(400).json({
    message:"Error saving user",
    error: error });


});



        


    } catch (error) {
        console.error('Error processing registration:', error);
        res.status(500).json({ error: 'Internal Server Error' });

    }
});



app.listen(port, () => {

    console.log(`Server is running on http://localhost:${port}`);
    console.log("thanks")
});





/*

const { connectToMongoDB, closeMongoDBConnection } = require('./db');

async function main() {
  try {
    await connectToMongoDB();

    // Use Mongoose models and perform database operations
    // For example: const result = await YourModel.find({});
  } catch (error) {
    console.error("An error occurred:", error);
  } finally {
    // Close the connection when done
    await closeMongoDBConnection();
  }
}

main();

 */