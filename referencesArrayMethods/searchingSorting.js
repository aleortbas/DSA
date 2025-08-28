const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

//reverse the elements of an array but doesnt sort them 
console.log("Reverse: ", numbers.reverse());

//sort function by default it does compare values character by character using Unicode order (lexicographical order)
const numbersToSort = [1, 65, 7, 6, 2, 10, 20, 97, 3]
console.log("Sort: ", numbersToSort.sort());

// sort function with a comparision function will return an array in order
console.log("Sort comparison function: ", numbersToSort.sort((a, b) => a - b));

//sort function with objects properties
var friends = [
    { name: 'John', age: 30 },
    { name: 'Ana', age: 20 },
    { name: 'Chris', age: 25 }
];

console.log("Sort friends: ", friends.sort((a, b) => a.age - b.age))

//sort strings, will sort base on the ASCII values
var names = ['Ana', 'ana', 'john', 'John'];
console.log("Sort string: ", names.sort());

console.log("Sort function: ",
    names.sort((a, b) => {
        if (a.toLocaleLowerCase() < b.toLocaleLowerCase()) {
            return -1
        }
        if (a.toLocaleLowerCase() > b.toLocaleLowerCase()) {
            return 1
        }
        return 0
    })
)

//localecompare compare two strings base on locale language
var names2 = ['Maève', 'Maeve'];
console.log("localeCompare: ", names2.sort(function (a, b) {
    return a.localeCompare(b);
}));

//indexOf, searches through an array for the exact element you pass as an argument returns the index
console.log("indexOf: ",numbers.indexOf(10))
console.log("indexOf: ",numbers.indexOf(100))