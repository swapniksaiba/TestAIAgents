// Function to find the nth Fibonacci number
function fibonacci(n) {
    if (n < 0) {
        throw new Error("Input must be a non-negative integer.");
    }
    if (n === 0) return 0;
    if (n === 1) return 1;

    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
        let next = a + b;
        a = b;
        b = next;
    }
    return b; // This works, but could be optimized.
}

// Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;

    // Only check for factors up to the square root of num
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

// Function to generate a list of prime numbers up to a given limit
function generatePrimes(limit) {
    if (limit < 2) return []; // Early return for invalid limit

    const primes = [];
    for (let i = 2; i <= limit; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }
    return primes; // Returning an array of primes, but no handling for very large limits.
}

// Example usage
console.log("10th Fibonacci number:", fibonacci(10));
console.log("Prime numbers up to 30:", generatePrimes(30));
