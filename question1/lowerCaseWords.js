// lowerCaseWords.js

function lowerCaseWords(mixedArray) {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(mixedArray)) {
            reject("Input must be an array");
        }

        const filteredArray = mixedArray
            .filter(item => typeof item === 'string')   // Filter strings only
            .map(word => word.toLowerCase());           // Convert to lowercase

        resolve(filteredArray);
    });
}

module.exports = lowerCaseWords; // Ensure this is correct!