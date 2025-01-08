// // 'hello word'
// // console.log('hello word');

// let sentance = 'hi mom'

// let numberOfEggs = 3

// let sentance1, numberOfEggs1
//  sentance1 = 'hi'
//  numberOfEggs1 = 3

//  let friends = {
//     max: 'is super cool',
//     bob: 'not my type',
//     numberOfEggs1: sentance1
//  }

//  let exampleArray = [1, 3, 6, 3, 7, 8, 33]

//  function myFirst(value, secondValue) {
//     // // output value of is_true
//     // console.log(value * secondValue)
//     // output the value of is_true
//     console.log(value != secondValue)
//  }

//  let mymultiplyNum = myFirst

//  mymultiplyNum(3, 5)
// //  mymultiplyNum('8', 8)
// //  mymultiplyNum(9, 10)
// //  console.log()
// // console.log(sentance + numberOfEggs);
// // console.log(sentance1 + numberOfEggs1);
// // console.log(friends);
// // console.log(exampleArray);

// // && || OR

// let conditional1 = true
// let conditional2 = false

// // console.log (typeof mymultiplyNum)
// if (conditional2 && conditional1) {
// console.log ('hi mom')
// } else if (conditional2 || conditional1) {
//     console.log('one condition was true')
// }
// else {
//     console.log('the value was false so here we are')
// }
let exampleArray = [1, 3, 6, 3, 7, 8, 33]


let j = 0
let lenght = exampleArray.length
// while(i < lenght) {
// console.log('value was true:', i, exampleArray[i])
// i++
// }

for (let j = 0; j < lenght; j++) {
    if (j % 2 === 3){
        break
    }

    // console.log('value was true:', j, exampleArray[j])
    }

    function addStrings(string1 = 'def1', string2  = 'def2'){
        let concatStr = string1 + ' ' + string2
        console.log(concatStr)
        return concatStr
    }
    let newSrt = addStrings('hello')
console.log ('The new string is:', newSrt)

module.exports = {
    addStrings,
    exampleArray
}
  