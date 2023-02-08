# Day 2 - [Data-Types](https://30daysofjavascript.com/data-types/)


Declare a variable named challenge and assign it to an initial value ‘30 Days Of JavaScript’.
```Javascript
    let str = ‘30 Days Of JavaScript’
```

Print the string on the browser console using console.log()
```Javascript
    console.log(str)
```

Print the length of the string on the browser console using console.log()
```Javascript
    console.log(str.length)
```

Change all the string characters to capital letters using toUpperCase() method
```Javascript
    str = str.toUpperCase()
```


Change all the string characters to lowercase letters using toLowerCase() method
```Javascript
    str = str.toLowerCase()
```
Cut (slice) out the first word of the string using substr() or substring() method
```Javascript
    // will return 30, it's a little ambigous for the frenchy that i am ^^'
    str.substring(0,2)
```



Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
```Javascript
    // the first 2 letters will be ignored
    str.slice(2)
```

Check if the string contains a word Script using includes() method
```Javascript
    if(str.includes('Hello World')) return true
```

Split the string into an array using split() method
```Javascript
    // will be split by space
    str.split(' ')
```


Split the string 30 Days Of JavaScript at the space using split() method
```Javascript
    "30 days of JavaScript".split(' ')
```
‘Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon’ split the string at the comma and change it to an array.
```Javascript
    let compangnies = ‘Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon’.split(',')
```

Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.

```Javascript
    "30 days of JavaScript".replace('Javascript','Python')
```

What is character at index 15 in ‘30 Days Of JavaScript’ string? Use charAt() method.
```Javascript
    "30 days of JavaScript".charAt(15)
```


What is the character code of J in ‘30 Days Of JavaScript’ string using charCodeAt()
```Javascript
    "30 days of JavaScript".charCodeAt(15)
```

Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
```Javascript
    "30 days of JavaScript".indexOf("a")
```

Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
```Javascript
    "30 days of JavaScript".lastIndexOf('a')
```

Use indexOf to find the position of the first occurrence of the word because in the following sentence:‘You cannot end a sentence with because because because is a conjunction’

```Javascript
    "You cannot end a sentence with because because because is a conjunction".indexOf('because')
```

Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:‘You cannot end a sentence with because because because is a conjunction’
```Javascript
    "You cannot end a sentence with because because because is a conjunction".lastIndexOf('because')
```

Use search to find the position of the first occurrence of the word because in the following sentence:‘You cannot end a sentence with because because because is a conjunction’
```Javascript
   let pos =  "You cannot end a sentence with because because because is a conjunction".search('because')
```

Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ‘ 30 Days Of JavaScript ‘.

```Javascript
    let trimmed = "30 Days Of JavaScript".trim()
```

Use startsWith() method with the string 30 Days Of JavaScript and make the result true
```Javascript
    let endWith = "30 Days Of JavaScript".startsWith('30')
```

Use endsWith() method with the string 30 Days Of JavaScript and make the result true
```Javascript
    let endWith = "30 Days Of JavaScript".endsWith('pt')
```

Use match() method to find all the a’s in 30 Days Of JavaScript
```Javascript
    let count = "30 Days Of JavaScript".match('a')
```

Use concat() and merge ‘30 Days of’ and ‘JavaScript’ to a single string, ‘30 Days Of JavaScript’
```Javascript
    let merged = "30 Days Of".concat('Javascript')
```

Use repeat() method to print 30 Days Of JavaScript 2 times
```Javascript
    let merged = "30 Days Of JavaScript".repeat(2)
```
