// Write a function that only takes an array of objects and filter out users who are not active
function filterActiveUsers(users) {
    return users.filter(user => user.active);
}
const users = [
    { name: "Alice", active: true }, 
    { name: "Bob", active: false }, 
    { name: "Charlie", active: true }
     ];
const activeUsers = filterActiveUsers(users);
console.log(activeUsers);
    // Output: [
    // { name: "Alice", active: true }, 
    // { name: "Charlie", active: true }
    // ]

//      Reduce function:
// Write a function that only takes an array of numbers and calculate the sum of an array using reduce function
function sumArray (numbers) {
    return numbers.reduce(function(accumulator, currentValue) {
        return accumulator + currentValue;
    },0 )
}

const numbers = [1, 2, 3, 4, 5];
const sum = sumArray(numbers);
console.log(sum); //  15

// Write a function that takes an array of strings and count the occurrences of each word in an array.

function occurrencesWord(words) {
    const wordCount ={};// // Создаем пустой объект для хранения счетчиков слов

//     for (let word of words) {
//         if(wordCount[word]) {
//             wordCount[word] +=1
//         } else {
//             wordCount[word] = 1;

//         }
//         return wordCount;
//     }
    words.forEach(word => {
        wordCount[word] = (wordCount[word] || 0) + 1
    });
    return wordCount;
}


const inputWords = ["apple", "banana", "apple", "cherry", "banana", "apple"];
const result = occurrencesWord(inputWords);
console.log(result);

// Write a function that takes an array of objects and group items by category

function groupByCategory(items) {
    return items.reduce((acc, item) => {
        if (!acc[item.category]) {
            acc[item.category] = [];
        }
        acc[item.category].push({ name: item.name });
        return acc;
    }, {});
}
		
const input = [
{ name: "Shirt", category: "Clothing" }, 
{ name: "Pants", category: "Clothing" },
{ name: "Apple", category: "Food" }, 
{ name: "Banana", category: "Food" }, 
];
const result2 = groupByCategory(input);
console.log(result2);


//Write a program to reverse a string
function reverseString(str) {
    return str.split('').reverse().join('');
  }
  
  console.log(reverseString("hello"));  // "olleh"

//Write a sum function
function sumFunct(numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}
console.log(sumFunct([1, 2, 3, 4]));  //  10

// Write a function to capitalize first letter of each word
function capitalizeWords(str) {
    return str
    .split(' ')
    .map(word => {

        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(' ');
}

console.log(capitalizeWords("hello world, this is javascript!")); 

// Write a function to sort an array of numbers in ascending order
function softNumAscending(arr) {
    return arr.sort((a, b) => a - b);
}
const numb = [56, 2, 94, 15, 35, 690];
console.log(softNumAscending(numb));
// Write a function-calculator that supports four operations on two numbers: +, -, = and /
function calculator(num1, num2, operation) {
    switch (operation) {
        case '+':
            return num1 + num2;
        case '*':
            return num1 * num2;  
        case '-':
            return num1 - num2;
        case '/':
            if (num2 === 0){
                return 'Error, not allowded'
            }
            return num1 / num2;   
            default:
                return 'Error, invalid operation'  
    }
}
console.log(calculator(8, 5, '+')); //  13
console.log(calculator(143, 654, '-')); //  -511
console.log(calculator(16, 554, '*')); // 8864
console.log(calculator(1460, 7, '/')); //  208.57
console.log(calculator(10, 0, '/')); // Error, not allowded
console.log(calculator(4, 2, '=')); // Error, invalid operation

// Write a function to filter out even numbers from an array using .filter() array function

function filterNum2(arr){
    const result2 = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            result2.push(arr[i]);
        }
    }
    return result2;
 }  

const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const result2 = filterNum(numbers2);
console.log(result2);
