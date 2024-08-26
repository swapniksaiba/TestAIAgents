function calculateTotal(price, taxRate) {
    // Error 1: Missing 'var', 'let', or 'const' keyword for variable declaration
    total = price * (1 + taxRate);

    // Error 2: Incorrect usage of '==' instead of '===' for comparison
    if (taxRate == 0.08) {
        console.log("Additional tax rate applied.");
    }

    // Error 3: Potential security issue - unsanitized user input
    let userInput = document.getElementById('userInput').value;
    document.getElementById('output').innerHTML = "User input: " + userInput;

    return total;
}

// Error 4: Function call with missing argument
let result = calculateTotal(100);
console.log("Total amount: " + result);
