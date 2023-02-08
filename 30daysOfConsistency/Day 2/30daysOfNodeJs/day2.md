## Day 2 of 30 days of NodeJs

### 1 - Reading a file in Nodejs

a) Reading the file asynchronous
```Javascript
const fs = require('fs');

const filemane = "index.txt"
fs.readFile(filename, (err, data) => {
    if(err) throw err

    console.dir(data)
})

```

b) Reading the file synchronously

```Javascript
const fs = require('fs')
const filename = 'index.txt'

try {
    const content = fs.readFileSync(filename)
    console.dir(content)
} catch(err) {
    console.log(err)
}


```


### 2 - Write a file in Nodejs

a) Write the file asynchronous
```Javascript
const fs = require('fs');

const filemane = "index.txt"
const content = "We are writing this file synchronously using node.js";


fs.writeFile(filename, content, (err) => {
    if(err) throw err

    console.log('File written successfully')
})

```

b) Writing the file synchronously

```Javascript
const fs = require('fs')
const filename = 'index.txt'
const content = "We are writing this file synchronously using node.js";

try {
    fs.writeFileSync(filename, content)
    console.log('File was saved')
} catch(error) {
    console.log(error)
}

```



### 3 - Append a file in Nodejs

a) Append the file asynchronous
```Javascript
const fs = require('fs');

const filemane = "index.txt"
const new_data = "This data will be appended at the end of the file"

fs.appendFile(filename, new_data, (err) => {
    if(err) throw err

    console.log('File appended successfully')
})

```

b) Append the file synchronously

```Javascript
const fs = require('fs')
const filename = 'index.txt'
const new_data = "This data will be appended at the end of the file"


try {
    fs.appendFileSync(filename, new_data)
    console.log('File was appended')
} catch(error) {
    console.log(error)
}

```


### 4 - Rename a file in Nodejs

a) Rename the file asynchronous
```Javascript
const fs = require('fs');

const filemane = "index.txt"
const new_name = "renamed.txt"

fs.rename(filename, new_name, (err) => {
    if(err) throw err

    console.log('File renamed successfully')
})

```

b) Rename the file synchronously

```Javascript
const fs = require('fs')
const filename = 'index.txt'
const new_name = "renamed.txt"


try {
    fs.renameSync(filename, new_name)
    console.log('File was successfully renamed')
} catch(error) {
    console.log(error)
}

```


### 5 - Delete a file in Nodejs

a) Delete the file asynchronous
```Javascript
const fs = require('fs');

const filemane = "index.txt"

fs.unlink(filename, (err) => {
    if(err) throw err

    console.log('File deleted successfully')
})

```

b) Rename the file synchronously

```Javascript
const fs = require('fs')
const filename = 'index.txt'
=

try {
    fs.unlinkSync(filename)
    console.log('File was successfully deleted')
} catch(error) {
    console.log(error)
}

```

##### What i learn from this and the mistake to be carefull
Learned how to handle file with nodejs with the fs module.

Need to be careful as :
    read, write, append have File in the named function
    delete and rename don't have it

but intelligent IDE will be able to control this behaviour ;)
