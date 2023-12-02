// db.js
require('dotenv').config();
const mongoose = require('mongoose')
const mongoUri = process.env.URI;
console.log("uri is ",mongoUri);
async function connectToMongoDB() {
  try {
    /*Connect to MongoDB using Mongoose*/
    await mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to MongoDB Using Mongoose');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    //throw error;
  }
}


async function closeMongoDBConnection() {
  try {
    await mongoose.connection.close();
    console.log("Closed MongoDB connection");
  } catch (error) {
    console.error("Error closing MongoDB connection:", error);
    //throw error; // Rethrow the error for the calling code to handle
  }
}


module.exports = {
  connectToMongoDB,
  closeMongoDBConnection,
};