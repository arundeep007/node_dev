const dirPath = require('path')

const currentPath = dirPath.join(__dirname);

const rootDirectoryPath = dirPath.parse(process.cwd()).root;

console.log('Root directory path:', rootDirectoryPath);
console.log(currentPath);