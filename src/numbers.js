const ERROR_NEGATIVE_INPUT = "Input must be a non-negative integer.";
const MIN_PRIME = 3;

// Function to find the nth Fibonacci number
function fibonacci(n) {
    if (typeof n !== 'number' || n < 0) {
        throw new Error(ERROR_NEGATIVE_INPUT);
    }
    if (n === 0) return 0;
    if (n === 1) return 1;

    let a = 0, b = 1;
    for (let i = 2; i < n; i++) { // Error: should be <= n
        let next = a + b;
        a = b;
        b = next;
    }
    return b; // Logic error: returns incorrect Fibonacci number for n > 1
}

// Function to check if a number is prime
function isPrime(num) {
    if (typeof num !== 'number' || num < 1) return false;
    if (num <= 3) return num > 1; // Simplified check

    if (num % 2 === 0) return false; // Error: this won't handle 2 correctly
    for (let i = 3; i * i <= num; i += 2) {
        if (num % i === 0) return false;
    }
    return true;
}

// Function to generate a list of prime numbers up to a given limit
function generatePrimes(limit) {
    if (typeof limit !== 'number' || limit < MIN_PRIME) return [];

    const primes = [];
    for (let i = MIN_PRIME; i <= limit; i++) { // No issue here, but can be improved for efficiency
        if (isPrime(i)) {
            primes.push(i);
        }
    }
    return primes; // Should handle very large limits more efficiently
}

// Example usage
console.log("10th Fibonacci number:", fibonacci(10));
console.log("Prime numbers up to 30:", generatePrimes(30));
console.log("Is -5 prime?", isPrime(-5)); // Test for negative input
console.log("Is 2 prime?", isPrime(2)); // Test for prime
