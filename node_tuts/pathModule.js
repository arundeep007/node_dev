const fs = require('fs');
const dirPath = require('path');



//const rootDirectoryPath = dirPath.parse(process.cwd()).root;
const currentPath = dirPath.join(__dirname,'files');
console.log(currentPath);

// Get the root folder path

///console.log("drive path is ",rootDirectoryPath)

fs.writeFile(`${currentPath}/ne5w.js`,'hello it is path Module',(err) => {
    if (err) {
      console.error('Error writing file:', err);
      if(err.message.match("no such file or directory"))
      {
        //make dir

        fs.mkdir(`${currentPath}`,(error)=>
        {
            //if direc is not created then it make one
            if(error)
            {
                console.log("error code in making",error.code,error.message)
            }else{
                console.log("new files created")
            }

        })
       
      }
    } else {
      console.log('File created successfully!');
    }});

console.log(currentPath)



/* for getting current path
const dirPath = require('path')
const currentPath = dirPath.join(__dirname);
const rootDirectoryPath = dirPath.parse(process.cwd()).root;

console.log('Root directory path:', rootDirectoryPath);
console.log(currentPath);

*/