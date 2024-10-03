// remove.js

const fs = require('fs');
const path = require('path');

// Path to the Logs directory
const logsDir = path.join(__dirname, 'Logs');

// Remove all log files and the Logs directory
const removeLogFiles = () => {
    if (fs.existsSync(logsDir)) {
        // Read all the files in the Logs directory
        fs.readdir(logsDir, (err, files) => {
            if (err) throw err;

            // Loop through and delete each file
            files.forEach(file => {
                const filePath = path.join(logsDir, file);
                fs.unlink(filePath, (err) => {
                    if (err) throw err;
                    console.log(`delete files… ${file}`);
                });
            });

            // Remove the Logs directory after all files are deleted
            fs.rmdir(logsDir, (err) => {
                if (err) throw err;
                console.log('Logs directory removed.');
            });
        });
    } else {
        console.log('Logs directory does not exist.');
    }
};

// Call the function to remove logs
removeLogFiles();