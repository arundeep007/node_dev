//entry point of app
const express = require('express')
const bodyParser =  require('body-parser')

const app = express();

const port = process.env.port||5000;

// middleware for parsing json requests 

app.use(bodyParser.json());

//db 
const users = [];

app.post('/register',(request,response)=>
{
    response.send("hellog");
    const { username, email, password } = request.body;
    console.log(username,email,password);

});
app.get('/users',(req,res)=>
{
    
    res.send(users);

});

console.log("hello");



app.listen(port,()=>{

    console.log('Server is running on http://localhost:${port}');
    console.log("thanks")
   

});