// now we will bring in our path through making use of our common js method

const path = require('path')

// lets say we want the entire path, the file name at the end

// console.log(__filename)

// but what if we only want to get the file name i.e without path
// we will have to wrap our file name within the path.basename() method
// console.log(path.basename(__filename))

// naw to get the directoryname we will make use of the dirname method

// console.log(path.dirname(__filename))

// lets say we now want to get to the file extension of this file ncor
// we will use the method extname

// console.log(path.extname(__filename))

// now what if we want to create an object, an object whose element represents significant element of a path
// properties such as maybe the dirname the extname and so on
// for this we will use the parse method

// console.log(path.parse(__filename))

//lastly we will be looking at the join method which is used to concatenate paths together

console.log(path.join(__dirname, 'text', 'index.html'))