console.log("hello arun welcome to the era of node js hope you find home like here")


//for showing all databases 
//cmd- show dbs

//create and insert 
//for creating new db use command is used if db not created than it will automattically create the new one 
//cmd- use dbname  (but you have to create atleast one collection and one document inside to use that )   

//insert

//insertOne() is used to insert single document
//db.employes.insertOne({id:9,name:"singh",role:"super admin"})

//insertMany() is used to insert multiple documents
//insert documents in form of lists
//db.employes.insertMany([{id:5,name:"ruhul",role:"super admin"},{id:5,name:"pankaj",role:"undefined"}])












//R
//read (fetch documents by giving our conditions or as project needs)
//for fetching all the documents in a collection
//db.employes.find()

//for finding 
//pull all docs



//pull single doc 

//db.cllectionName.findOne()

//inserting elemts
/*db.inventory.insertMany( [
    { item: "journal", qty: 25, size: { h: 14, w: 21, uom: "cm" }, status: "A" },
    { item: "notebook", qty: 50, size: { h: 8.5, w: 11, uom: "in" }, status: "A" },
    { item: "paper", qty: 100, size: { h: 8.5, w: 11, uom: "in" }, status: "D" },
    { item: "planner", qty: 75, size: { h: 22.85, w: 30, uom: "cm" }, status: "D" },
    { item: "postcard", qty: 45, size: { h: 10, w: 15.25, uom: "cm" }, status: "A" }
 ]);*/

//for fetching all documents
 //db.collectionName.find()

 //db.inventory.find()
 /*db.inventory.find(

   {
    status:"A"
   },
   
    {
        qty:1,size:1,_id:0
    }

 );*/  //fetching qty,size from inventory by using conditions and _id:0 (id not fetched),_id:1 (id is fetched)

 //for fetching Single document , for this we have to give a query

 //db.inventory.findOne({item:"notebook"})  fetching docs where item=="notebook"


 //db.inventory.find( { "size.h": { $lt: 15 } } )  for nested queries here fetching all docs where size.h <15
 //db.inventory.find({"size.h":{$gt:8.5}})  fetching all docs where size.h>8.5
 //db.inventory.find({"size.h":{$lt:20},status:"A"})  for And Operater fetching all docs where size.h<20 amd status="A"
 //db.inventory.find({"size.h":{$lt:20},"status":"D"})
 //db.inventory.find({status:{$in:["A","D","C"]}}) for fetch all docs where status is either "A" or "D" or "C"



 /*db.inventory.find({
  $or: [
    { qty: { $lt: 50 } },
    { "size.h": { $gt: 20 } }
  ]
});*/  //for fetching all docs where either condition 1 or condition 2,3.. is true


//db.inventory.find({status:{$ne:"A"}}) //where all doc's status not equal to "A"

//db.inventory.find({status:{$nin:["B","D"]}}) fetch all where status neither B or not D and ..



//Query an array 

/*db.inventory.insertMany([
    { item: "journal", qty: 25, tags: ["blank", "red"], dim_cm: [ 14, 21 ] },
    { item: "notebook", qty: 50, tags: ["red", "blank"], dim_cm: [ 14, 21 ] },
    { item: "paper", qty: 100, tags: ["red", "blank", "plain"], dim_cm: [ 14, 21 ] },
    { item: "planner", qty: 75, tags: ["blank", "red"], dim_cm: [ 22.85, 30 ] },
    { item: "postcard", qty: 45, tags: ["blue"], dim_cm: [ 10, 15.25 ] }
 ]);*/









 //U

 //update

 /*db.inventory.insertMany( [
   { item: "canvas", qty: 100, size: { h: 28, w: 35.5, uom: "cm" }, status: "A" },
   { item: "journal", qty: 25, size: { h: 14, w: 21, uom: "cm" }, status: "A" },
   { item: "mat", qty: 85, size: { h: 27.9, w: 35.5, uom: "cm" }, status: "A" },
   { item: "mousepad", qty: 25, size: { h: 19, w: 22.85, uom: "cm" }, status: "P" },
   { item: "notebook", qty: 50, size: { h: 8.5, w: 11, uom: "in" }, status: "P" },
   { item: "paper", qty: 100, size: { h: 8.5, w: 11, uom: "in" }, status: "D" },
   { item: "planner", qty: 75, size: { h: 22.85, w: 30, uom: "cm" }, status: "D" },
   { item: "postcard", qty: 45, size: { h: 10, w: 15.25, uom: "cm" }, status: "A" },
   { item: "sketchbook", qty: 80, size: { h: 14, w: 21, uom: "cm" }, status: "A" },
   { item: "sketch pad", qty: 95, size: { h: 22.85, w: 30.5, uom: "cm" }, status: "A" }
] );*/

//now using update queries by this 


