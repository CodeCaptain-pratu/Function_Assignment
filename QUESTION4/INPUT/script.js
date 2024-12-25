// Function to create a tax calculator based on income ranges
function createTaxCalculator() {
    return function (income) {
        let taxRate;
        if (income <= 50000) {
            taxRate = 0.1; // 10% tax for income up to 50,000
        } else if (income <= 100000) {
            taxRate = 0.2; // 20% tax for income between 50,001 and 100,000
        } else {
            taxRate = 0.3; // 30% tax for income above 100,000
        }
        return income * taxRate; // Calculate tax
    };
}

// Create a tax calculator instance
const calculateTax = createTaxCalculator();

// Test the function with various incomes
console.log(`Tax for income 40000: $${calculateTax(40000)}`); // Output: Tax for income 40000: $4000
console.log(`Tax for income 75000: $${calculateTax(75000)}`); // Output: Tax for income 75000: $15000
console.log(`Tax for income 120000: $${calculateTax(120000)}`); // Output: Tax for income 120000: $36000
