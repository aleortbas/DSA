var isEven = function (x) {
    // returns true if x is a multiple of 2.
    return (x % 2 == 0) ? true : false;
};
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// all elements are true
console.log("Every: ", numbers.every(isEven));

// at least one element is true
console.log("Some: ", numbers.some(isEven));

//loop through all elements
numbers.forEach(function (x) {
    console.log("ForEach loop: ", (x % 2 == 0));
})

//loop through all elements and break when condition is met as different from forEach 
/* for (let i = 0; i < numbers.length; i++) {
    console.log("for loop: ", (numbers[i] % 2 == 0));
    return (numbers[i] % 2 == 0) ? true : false;
} */

//map creates a new array base on other array
var myMap = numbers.map(isEven)

console.log("Map: ", myMap);

//filter creates a new array wirh elements that are true
var evenNumbers = numbers.filter(isEven)
console.log("Filter: ", evenNumbers);

//reduce reduces all elements to a single value
console.log("Reduce: ",numbers.reduce(function (previous, current, index) {
    return previous + current;
}));
