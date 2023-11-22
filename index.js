const {MongoClient} = require("mongodb");

//const uri = "mongodb://127.0.0.1/";
const uri ="mongodb://0.0.0.0:27017";
const client = new MongoClient(uri);

//{ useNewUrlParser: true, useUnifiedTopology: true }



async function connectToDb()
{

    try{

        await client.connect();
        console.log("Connected to the Db");
        

        //selecting the db and collections after connecting
        const database = client.db('e-commerce');
        const products = await database.collection('products');


        const response = products.find().toArray();
    
        console.log("response is ",response);

    }catch(error)
    {
        console.log("error connecting to Db ",error);
    }
        finally
    {
        await client.close();
        console.log("closing client")
    }

}

connectToDb().then((message)=>{
    console.log("Connected to database");
}).catch((err)=>{console.log(err)});