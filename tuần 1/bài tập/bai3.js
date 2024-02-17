function isPrime(number) {
    if (number < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}
var numberToCheck = 10;
if (isPrime(numberToCheck)) {
    console.log(numberToCheck + " là số nguyên tố.");
} else {
    console.log(numberToCheck + " không là số nguyên tố.");
}