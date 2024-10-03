const lowerCaseWords = require('./lowerCaseWords'); // Make sure the path is correct!

const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];

lowerCaseWords(mixedArray)
    .then(result => console.log(result))    // Should output: ['pizza', 'wings']
    .catch(error => console.error(error));