// Example:1
function destructureExample(obj) {
    const { name, age } = obj;

    return {
        name,
        age
    };
}

const obj = { name: 'John', age: 30, city: 'New York' };
const result1 = destructureExample(obj);
console.log(result1);


// Example:2
function sumNumbers(...numbers) {
    return numbers.reduce((sum, number) => sum + number, 0);
}

const result2 = sumNumbers(1, 2, 3, 4, 5);
console.log(result2);


// Example:3
function createGreeting(name) {
    return `Hello, ${name}! Welcome to our website.`;
}
const result3 = createGreeting('Alice');
console.log(result3);

// Example:4
function isEven(number) {
    return number % 2 === 0 ? "Even" : "Odd";
}
const result4 = isEven(7);
console.log(result4);

// Example:5
const multiply = (a, b) => a * b;

const result5 = multiply(5, 7);
console.log(result5);

// Example:6
function getLargestNumber(a, b) {
    return a > b ? a : b;
}
const result6 = getLargestNumber(10, 5);
console.log(result6);

//Example:7
function getAddressCity(address) {
    return address.city ?? "Unknown";
}
const address = { street: '123 Main St', country: 'USA' };
const result7 = getAddressCity(address);
console.log(result7);

//Example:8
function doubleNumbers(numbers) {
    return numbers.map(number => number * 2);
}
const result8 = doubleNumbers([1, 2, 3, 4, 5]);
console.log(result8);

//Example:9
function filterEvenNumbers(numbers) {
    return numbers.filter(number => number % 2 === 0);
}
const result9 = filterEvenNumbers([1, 2, 3, 4, 5]);
console.log(result9);

//Example:10
function sumArray(numbers) {
    return numbers.reduce((sum, number) => sum + number, 0);
}
const result10 = sumArray([1, 2, 3, 4, 5]);
console.log(result10);

//Example:11
function sortNumbers(numbers) {
    return numbers.sort((a, b) => a - b);
}
const result11 = sortNumbers([5, 2, 8, 1, 4]);
console.log(result11);
