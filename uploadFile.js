const fs = require('fs');
const dirPath = require('path');
const currentPath = dirPath.join(__dirname, 'files');
const uploadFile = (fileName, fileContent) => {
    fs.writeFile(`${currentPath}/ne5w.js`, 'hello it is path Module', (err) => {
        if (err) {
            console.error('Error writing file:', err);
            if (err.message.match("no such file or directory")) {
                //make dir

                fs.mkdir(`${currentPath}`, (error) => {
                    //if direc is not created then it make one
                    if (error) {
                        console.log("directory not exists making new one!!")
                        console.log("error code in making", error.code, error.message)

                        uploadFile(fileName,fileContent);

                        uploadFile
                    } else {
                        console.log("directory exists and file is created")
                        return;
                    }

                })

            }
        } else {
            console.log('File created successfully!');
        }
    });
}

module.exports = uploadFile
// Get the root folder path

///console.log("drive path is ",rootDirectoryPath)

