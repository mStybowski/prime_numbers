const isPrime = (n) => {
    if (n < 3) return n > 1;
    else if (n % 2 === 0 || n % 3 === 0) return false;
    else if (n < 25) return true;
    let i = 5;
    while (i * i <= n ) {
      if (n % i === 0 || n % (i + 2) === 0) return false;
      i += 6;
    }
    return true;
}

const getArrayOfNumbersInBounds = (lowerBound, upperBound) => Array(upperBound - lowerBound + 1).fill().map((_, index) => index);

const filterOutNonPrimeNumbers = (arr) => {
    return arr.filter(isPrime)
}

const getArrayOfTwins = (arr) => {
    const twinArray = [];
    arr.forEach((el) => {
        if (isPrime(el + 2) || isPrime(el - 2)){
            twinArray.push(el)
        }
    })
    return twinArray;
}

const arrayOfNumbers = getArrayOfNumbersInBounds(0, 90000);
const arrayOfPrimeNumbers = filterOutNonPrimeNumbers(arrayOfNumbers);
const arrayOfTwins = getArrayOfTwins(arrayOfPrimeNumbers)

console.log(arrayOfTwins);