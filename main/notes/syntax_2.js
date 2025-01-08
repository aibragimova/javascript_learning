const { addStrings, exampleArray } = require("./syntax_1");

// data manipulation
let exampleSentence = 'this is a string'
let strLenght = exampleSentence.length
// console.log('Value at the end of the string = ', exampleSentence[strLenght -1])

// let combined_string = 'the fifth letter in the string avove is: ' + exampleSentence[5]
// let combined_string = '3' + 5

// console.log(combined_string) выдаст число
// console.log(typeof combined_string) // says that it's string
// console.log(combined_string -6) // says that it's string

// indexOf method
// const containsTheLetterA = exampleSentence.indexOf('a')
// console.log('sentance containes the letter?', containsTheLetterA)

// split method
// const splitSentance = exampleSentence.split('i')
// console.log(splitSentance) //'th', 's ', 's a str', 'ng' removed i caracter

// includes method
// const includesSentance = exampleSentence.includes('i')
// console.log(includesSentance) // returns true/false

// replace/replayceAll method
// const replaysSentance = exampleSentence.replace(' ', '.')//replayce empty space to dot in one first place
const replaysSentance = exampleSentence.replaceAll(' ', '.')//replayced All empty spaces to dots 
// console.log(replaysSentance) // this.is.a.string

//regex  (usually for check password) better to 
// test() -проверяет, соответствует ли строка регулярному выражению. Возвращает true или false
// const regex = /hello/;
// const str = 'Hello, world!';
// console.log(regex.test(str)); // true
// const regex = /^.{6,}$/; // Минимум 6 символов

const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/;
// (?=.*[a-z]) - хотя бы одна строчная буква
// (?=.*[A-Z]) - хотя бы одна заглавная буква
// (?=.*\d) - хотя бы одна цифра
// (?=.*[!@#$%^&*(),.?":{}|<>]) - хотя бы один специальный символ
// .{8,} - минимум 8 символов

//array and lists
let simpleArray = ['aliia', 'max', 'manoo']

// crud metodology - create, read update and delete
// console.log(simpleAray[1])
//pop push shift unshift
simpleArray[1] = 'replace'
simpleArray.push('new_word') // добавится слово[ 'aliia', 'replace', 'manoo', 'new_word' ]
simpleArray.pop() //удалит последний массив
let check = simpleArray.includes('replace') //true or false
let check1 = simpleArray.join('_') //соединяет все _ aliia_replace_manoo
let check2 = simpleArray.reverse()//все в обратном [ 'manoo', 'replace', 'aliia' ]
let check3 = simpleArray.sort() // применяется соритировка [ 'aliia', 'manoo', 'replace' ]
// console.log(check3)
// 1 dimensional
let simpleArray1 = [[[3],[]],[[],[]],[[],[]]]
// console.log(simpleArray1[0][0][0])// так достучались до 3
simpleArray1[0][0][0] = 'replace 3 to one'
// console.log(simpleArray1) //[ [ [ 'replace 3 to one' ], [] ], [ [], [] ], [ [], [] ] ]

let simpleArray2 = [[1,2],[3,4]]

for (let i = 0; i<simpleArray2.length; i++){
    let subArray = simpleArray2[i]
    for (let j = 0; j <subArray.length; j++){
        // console.log( i, j, simpleArray2[i][j])
    }
}
let simpleArray3 = [1, 2, 3, 4, 5]
let startArray = simpleArray3.slice(0, 2)
let endArray = simpleArray3.slice(3)
let newFilteredArray = startArray.concat(endArray)
// console.log(newFilteredArray)

// dictionaries or object
const bio = {
    name: 'aliia',
    age: 38,
    hobbies: ['gym', 'reading','running'],
    friends: {
        'juan': {
            description: 'good at math'
        }
    }
}

// console.log(bio)// получаем всю библиотеку { name: 'aliia', age: 38, hobbies: [ 'gym', 'reading', 'running' ]
let name_key = 'name'
bio[name_key] = 'Max'
bio['number_of_friends'] = 0 //создат новую дерикт если до этого не было
bio.age = 39 // 
// console.log(bio.hobbies[2])//running
// console.log('numbeOfBananas' in bio) //false нет такой дерикт а био

delete bio.age
// console.log(bio) // вернет без age
bio['friends']['juan']['description'] = 'bad at math'
// console.log(bio['friends']['juan']['description'])
 
// const keysInObject = Object.keys(bio) // [ 'name', 'hobbies', 'friends', 'number_of_friends' ]
// const keysInObject = Object.values(bio)//вернет только валью в скобках
const keysInObject = Object.entries(bio)
// console.log(keysInObject) //вернет только валью 
// 
//scope
function scopeHello() {
    let sentance = 'hello scope'
    console.log(sentance)
}


function counter() {
    let count = 0

    return function() {
        count++
        console.log(count)
    }
}

let increment = counter()
increment()
increment()

addStrings('hello', 'word')
console.log(exampleArray)


//error handling and debugging

function problematicCodeBlock() {
    // const calculation = 100 / null // Infinity
    // const subObject = brokenObject.hello.word // brokenObject is not defined
    // console.log(calculation)
    try {
        console.log('Attempted the try block')// сообщение перед ошибкой
        const subObject = brokenObject.hello.word 
        console.log(subObject)

    } catch (err) {

        console.log(err.message)// показываем сообщение ошибки
    }


}

problematicCodeBlock()

console.log('code continued to execute')

function throwError() {
    try {
        
        throw new Error('custom error message')

    } catch (err) {
        console.log(err.message)
    }
    
}

throwError()
console.log('code continued to execute')



