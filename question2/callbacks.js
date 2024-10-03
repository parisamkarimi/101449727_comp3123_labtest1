// callbacks.js

// Simulating a resolved promise after a timeout of 500ms
const resolvedPromise = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ message: 'delayed success!' });
        }, 500);
    });
};

// Simulating a rejected promise after a timeout of 500ms
const rejectedPromise = () => {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject(new Error('error: delayed exception!'));
        }, 500);
    });
};

// Handling resolvedPromise
resolvedPromise()
    .then((result) => {
        console.log(result); // Output: { message: 'delayed success!' }
    })
    .catch((error) => {
        console.error(error);
    });

// Handling rejectedPromise
rejectedPromise()
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.error(error); // Output: Error: error: delayed exception!
    });