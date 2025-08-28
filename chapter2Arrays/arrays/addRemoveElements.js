var numbers = [1,2,3,4,5,6,7,8,9]

//add elements to the right for and push elements to the right
for (let i = 0; i <= numbers.length; i++) {
    if (i == numbers.length) { // when we reach the end
        numbers[i++] = 10;
    }
}

console.log("For loop push: ",numbers);

numbers[numbers.length] = 11;

console.log("number.length push: ",numbers);

numbers.push(12); 

console.log("push: ",numbers);

//add elements to the left for and unshift elemnts to the right
for (let i = numbers.length; i > 0; i--) {    
    numbers[i] = numbers[i - 1];    
}

numbers[0] = 0
console.log("For loop unshift: ", numbers); 

numbers.unshift(-1,0)
console.log("unshift: ", numbers); 


//remove elements from the right and let
console.log("Before pop length: ", numbers.length);

numbers.pop()
console.log("pop: ", numbers);

console.log("Before Forloop pop length: ", numbers.length);


for (var i=0; i<numbers.length; i++){
 numbers[i] = numbers[i+1];
}

console.log("For loop pop: ", numbers);

console.log("Forloop pop length: ", numbers.length);

//remove elements from the left and shift elements to the left
console.log("Before shift length: ", numbers.length);
numbers.shift()
console.log("shift: ", numbers);
console.log("After shift length: ", numbers.length);

for (var i=0; i<numbers.length - 1; i++){
 numbers[i] = numbers[i+1];
}
numbers.length = numbers.length - 2;

console.log("For loop shift: ", numbers);

console.log("Forloop shift length: ", numbers.length);

//splice to remove or add elements
numbers.splice(4,2)
console.log("Splice: ", numbers);

//remove elements using for loop base on position
var position = 3;
var valuesToRemove = 2;

for (let i = 0; i < numbers.length; i++) {
    if (i >= position){
        numbers[i++] = numbers[i+valuesToRemove];
    }
}

numbers.length = numbers.length - valuesToRemove

console.log("Remove by position using for loop: ", numbers);

numbers.splice(3,0,4,5,6,7)

console.log("splice to add: ", numbers);

