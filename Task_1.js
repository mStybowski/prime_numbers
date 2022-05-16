const UPPER_BOUND = 10000;
const arr = Array(UPPER_BOUND).fill().map((_, index) => index); //Creating the array
const ROOT_UPPER_BOUND = Math.floor(Math.sqrt(UPPER_BOUND));
const sieveArray = [];

for(let i = 2; i <= ROOT_UPPER_BOUND ; i++){
    sieveArray.push(i)
}

const sieveArrayByArray = (array, sieveValues) => {

    const setOfNonPrimeNumbers = new Set([0,1]);

    const filterPredicate = (sieveValue, num) => {
        if(num === sieveValue || num % sieveValue !== 0){
            return true
        }
        return num % sieveValue
    };

    sieveValues.forEach((value) => {
        array.forEach((number) => {
            if(!filterPredicate(value, number)){
                setOfNonPrimeNumbers.add(number);
            }
        })
    })

    const arrayOfNonPrimeNumbers = Array.from(setOfNonPrimeNumbers)

    return array.filter(x => !arrayOfNonPrimeNumbers.includes(x));
}

const result = sieveArrayByArray(arr, sieveArray)

console.log(result)


