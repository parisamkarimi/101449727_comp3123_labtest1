// add.js

const fs = require('fs');
const path = require('path');

// Path to the Logs directory
const logsDir = path.join(__dirname, 'Logs');

// Create 10 log files in the Logs directory
const createLogFiles = () => {
    if (!fs.existsSync(logsDir)) {
        // Create the Logs directory if it doesn't exist
        fs.mkdirSync(logsDir);
        console.log('Logs directory created.');
    }

    // Change the working directory to the Logs directory
    process.chdir(logsDir);

    // Create 10 log files
    for (let i = 0; i < 10; i++) {
        const fileName = `Log${i}.txt`;
        fs.writeFile(fileName, `This is log file number ${i}`, (err) => {
            if (err) throw err;
            console.log(fileName);
        });
    }
};

// Call the function to create logs
createLogFiles();