// Function to create a curried version of a function
function curry(func) {
    return function curried(...args) {
        if (args.length >= func.length) {
            // If all arguments are provided, execute the original function
            return func(...args);
        } else {
            // Otherwise, return a new function to accept the remaining arguments
            return (...nextArgs) => curried(...args, ...nextArgs);
        }
    };
}

// Example function to add two numbers
function add(a, b) {
    return a + b;
}

// Create a curried version of the add function
const curriedAdd = curry(add);

// Test the curried function
console.log(curriedAdd(2)(3)); // Output: 5
console.log(curriedAdd(5, 10)); // Output: 15
