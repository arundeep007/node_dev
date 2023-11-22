//entry point of app
const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const loadPages = path.join(__dirname, 'registration')
const port = process.env.port || 5000;
const users = [];
const { appLevelMiddleware, routerLevelMiddleware } = require('./middleware.js');



/*const mongo = require('mongodb');
const {MongoClient} = require('mongodb')

var db=mongo.connection;*/

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
app.use(appLevelMiddleware);

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



app.listen(port, () => {

    console.log(`Server is running on http://localhost:${port}`);
    console.log("thanks")
});