//in this class we simply made feature of creating and deleting the file using command line arguments 
// node ./index.js arg1 arg2
const { error, log } = require('console');
const fs = require('fs');
const input = process.argv
const directions = input[2];
const file = input[3];
const data = input[4];

if (directions == 'add') {
    if (!data) {
        console.log("file data is missing")
    } else {
        fs.writeFile(file, data, (error) => {

            if (error) {
                console.error('Error writing to the file:', error);
            } else {
                console.log('Data has been written to the file');
            }

        });
    }

} else if (directions == 'remove') {

    fs.unlink(file, (err) => {
        if (err) {
            console.log(`Error deleting the file: ${err}`);
        } else {
            console.log('File deleted successfully ');
        }
    });
}else if(directions=='read')
{
    if(!file)
    {
        console.log('file path is missing')
        
    }else

    {
        fs.readFile(file, 'utf8', (err, data) => {
            if (err) {
                console.error('Error reading the file:', err);
            } else {
    
                console.log('File content:');
                console.log(data);
            }
        });
    }
   
}else if(directions=='append')
{
    if(!file)
    {
        console.log('file path is missing')
    }else if(!data)
    {
        console.log('data is missing')

    }else
    {
        fs.appendFile(file, data, 'utf8', (err) => {
            if (err) {
                console.error('Error appending data to the file:', err);
            } else {
                console.log('Data has been appended to the file.');
            }
        });
    }
   
}
else {
    
    console.log('invalid input');
}


console.log("flow continues since writeFile unlink is async nature ");






/*

Getting input from the command line in Node.js can be beneficial for various reasons, especially when building command-line applications or scripts. Here are some of the benefits:

    Interactive User Input: Command-line input allows your Node.js application to interact with the user in a text-based environment. This can be useful for creating interactive command-line tools, utilities, or configuration wizards.

    Customization: Command-line input allows users to customize the behavior of your application through arguments or options. Users can pass in various flags or values to control how the program operates.

    Automation: Command-line input is essential for automation and scripting. Users can create scripts that run your Node.js application with different parameters, making it versatile for various tasks.

    Configuration: Users can provide configuration details during runtime. This can be especially useful for specifying settings, file paths, or other parameters without modifying code or configuration files.

    Debugging and Testing: Developers can use command-line input to debug and test code more easily. It allows for quick experimentation and testing with different inputs without modifying the source code.

    Batch Processing: You can use command-line input to process multiple files or data sets in a batch, making it useful for tasks like data conversion, file manipulation, or data analysis.

    Integration with Other Tools: Command-line input makes it easy to integrate your Node.js application with other command-line tools and scripts. It can be used in pipeline operations, where the output of one tool serves as input to another.

    Standardization: Command-line arguments and options follow conventions and standards, making it easier for users to understand how to interact with your application. For example, -h or --help often provides information on usage.

    Cross-Platform Compatibility: Command-line input is a cross-platform feature, and Node.js provides a consistent way to handle it, which means your code can be executed on different operating systems without modification.

    Portability: Command-line input allows you to package your Node.js application as a standalone command-line tool, which can be distributed and used independently of the development environment or other dependencies.

    Security: It can be used to securely collect sensitive information like passwords or API keys from the user without exposing them in configuration files or source code.

    Versatility: Command-line input can be used in a wide range of applications, from simple utilities to complex command-line interfaces (CLIs), making your code versatile and useful in various scenarios.

Node.js provides built-in modules like process.argv and popular libraries like yargs and commander to handle command-line input effectively, making it relatively straightforward to work with command-line arguments and options in your Node.js applications.*/