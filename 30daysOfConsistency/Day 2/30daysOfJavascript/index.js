// # Day 2 - [Data-Types](https://30daysofjavascript.com/data-types/)


console.log("Declare a variable named challenge and assign it to an initial value ‘30 Days Of JavaScript’")

let str = "30 Days Of JavaScript"
console.log(str)
console.log('')

console.log("Print the string on the browser console using console.log()")
console.log(str)
console.log('')

console.log("Print the length of the string on the browser console using console.log()")
console.log(str.length)
console.log('')

console.log("Change all the string characters to capital letters using toUpperCase() method")
    str = str.toUpperCase()
console.log(str)
console.log("")

console.log("Change all the string characters to lowercase letters using toLowerCase() method")
str = str.toLowerCase()
console.log(str)

console.log("Cut (slice) out the first word of the string using substr() or substring() method")
    // will return 30, it's a little ambigous for the frenchy that i am ^^'
console.info("used 0, 2")
console.log(str.substring(0,2))
console.log('')


console.log("Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.")
// the first 2 letters will be ignored
console.info('Sliced 2 first letters')
console.log(str.slice(2))
console.log('')

console.log("Check if the string contains a word Script using includes() method")
let res;
if(str.includes('Hello World')) res = true;
console.log(res === true ? "We found Hello World " : "We di not found Hello World ")
console.log("")

console.log("Split the string into an array using split() method")
console.dir(str.split(' '))
    // will be split by space
console.log("")


console.log("Split the string 30 Days Of JavaScript at the space using split() method")
console.dir("30 days of JavaScript".split(' '))
console.log('"')


console.log("‘Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon’ split the string at the comma and change it to an array.")
    let compangnies = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon".split(',')
console.dir(compangnies)
console.log('')


console.log("Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.")
console.log("30 days of JavaScript".replace('Javascript','Python'))
console.log('')

console.log("What is character at index 15 in ‘30 Days Of JavaScript’ string? Use charAt() method.")
console.log("30 days of JavaScript".charAt(15))
console.log('')

console.log("What is the character code of J in ‘30 Days Of JavaScript’ string using charCodeAt()")
console.dir("30 days of JavaScript".charCodeAt(15))
console.log('')

console.log("Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript")
console.log("30 days of JavaScript".indexOf("a"))
console.log("")

console.log('Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.')
console.log("30 days of JavaScript".lastIndexOf('a'))
console.log("")

console.log("Use indexOf to find the position of the first occurrence of the word because in the following sentence:‘You cannot end a sentence with because because because is a conjunction’")
console.log("You cannot end a sentence with because because because is a conjunction".indexOf('because'))


console.log("Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:‘You cannot end a sentence with because because because is a conjunction’")
console.log("You cannot end a sentence with because because because is a conjunction".lastIndexOf('because'))
console.log("")

console.log("Use search to find the position of the first occurrence of the word because in the following sentence:‘You cannot end a sentence with because because because is a conjunction’'")
   let pos =  "You cannot end a sentence with because because because is a conjunction".search('because')
console.log(pos)

console.log("Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ‘ 30 Days Of JavaScript ‘.")
    let trimmed = "30 Days Of JavaScript".trim()
console.log(trimmed)
console.log("")


console.log("Use startsWith() method with the string 30 Days Of JavaScript and make the result true")
let startWith = "30 Days Of JavaScript".startsWith('30')
console.log(startWith)
console.log("")

console.log("Use endsWith() method with the string 30 Days Of JavaScript and make the result true")
    let endWith = "30 Days Of JavaScript".endsWith('pt')
console.log(endWith)
console.log('')

console.log("Use match() method to find all the a’s in 30 Days Of JavaScript")
let count = "30 Days Of JavaScript".match('a')
console.log(count)


console.log("Use concat() and merge ‘30 Days of’ and ‘JavaScript’ to a single string, ‘30 Days Of JavaScript’")
let merged = "30 Days Of".concat('Javascript')
console.log(merged)
console.log('')


console.log("Use repeat() method to print 30 Days Of JavaScript 2 times")
let repeated = "30 Days Of JavaScript".repeat(2)
console.log(repeated)
