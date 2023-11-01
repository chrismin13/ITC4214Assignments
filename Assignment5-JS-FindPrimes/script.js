function isPrime(num) {
    if (num <= 1) return false; // 0 and 1 are not primes
    if (num <= 3) return true; // 2 and 3 are primes

    // divisible by 2 and 3 are not prime
    if (num % 2 === 0 || num % 3 === 0) return false;

    let i = 5; // start with 5, since 4 is not prime
    while (i * i <= num) { // only need to check up to sqrt(num)
        // all prime numbers beyond 6 could be 6k +- 1, where k is an integer
        // so we check if num is divisible by 5 and 7, then 11 and 13, etc.
        if (num % i === 0 || num % (i + 2) === 0) return false;
        i += 6; // increment by 6 to get the next possible prime
    }

    return true;
}

function displayPrimes() {
    numberInput = document.getElementById('numberInput');
    outputDiv = document.getElementById('primeOutput');
    
    n = parseInt(numberInput.value);

    let primes = [];
    for (let i = 2; i <= n; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }

    outputDiv.innerHTML = primes.join(', ');
}
