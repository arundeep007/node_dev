//entry point of app
const express = require('express')
const bodyParser = require('body-parser')
/*const mongo = require('mongodb');
const {MongoClient} = require('mongodb')

var db=mongo.connection;*/
const users =[];


const app = express();

const port = process.env.port || 5000;

// middleware for parsing json requests 

app.use(bodyParser.json());

//db



app.post('/register', (request, response) => {


    try 
{

    
   
    const errors = [];
    const { username, email, password } = request.body;
    console.log("new",username, email, password,"hellos");

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
    
    if(errors.length>0)
    {
        return response.status(400).json({"error":errors});
    }

    //now save users etc here

    const newUser = {
        "username":username,
        "email":email,
        "password":password
    }
    users.push(newUser)

    return response.status(201).json({"message":"user successfully created",

    userData:newUser
});

   
}catch(error){
    console.log("internal server error is ",error)
    response.status(500).json({"error":'Internal Server error'});

}

});
app.get('/users', (req, res) => {

    res.status(200).json({users:users})

});





app.listen(port, () => {

    console.log('Server is running on http://localhost:${port}');
    console.log("thanks")


});