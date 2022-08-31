// so basically

const url = require('url');

// we will instantiates an object index url of the class url
// so we will pass in a demo url for the class url

const indexUrL = new URL('https://goal.com/en?id=1&status=active')

const myURL = new URL('https://example:123@gmail.com#foo')

// so first off we will see how we can get the full serialized url
// for this we will make use of our property href

// console.log(indexUrL.href)

// now lets say you are just interested in the domain name
// console.log(indexUrL.host)

// the difference between this two is that if the host link has a port number
// the host method will include it but the hostname wont include it

// host name
// console.log(indexUrL.hostname)

// lets say you want to get the serialized query
// this will involev your query string and you query params
// console.log(indexUrL.search)

// now what if we want to render this into an object, well we also hav a property for that

// console.log(indexUrL.searchParams)

// what if we want to go futher and append more key value pairs to the object
// we will append a key of city and a value of tokyo becos i love tokyo

// indexUrL.searchParams.append('city', 'tokyo')

// console.log(indexUrL.searchParams)

// now in other to get the password of the url

// console.log(myURL.password)


// okay we can get but what if we want to set the password ncor
// to do that we say

// myURL.password = "abc"

// console.log(myURL.href)

// now lets say we want to get and set a fragment portion of the url
// for this we will make use of the hash properties 
// console.log(myURL.hash)

// now we can also set the fragment portion of the link

// myURL.hash = "bar"

// console.log(myURL.href)

// now lets say we want to get the read only serializaation of the origin of the link

// console.log(myURL.origin)

// now lets say we want to get and set the path portion of a url

// first we get the path name of the url
// console.log(indexUrL.pathname)

// now lets set it 

// indexUrL.pathname = "es"
// console.log(indexUrL.href)

// now lets get and set the protocol portion of a url
// like is it https or http

// console.log(indexUrL.protocol)

// to set the url protocol

// indexUrL.protocol = "ftp"

// console.log(indexUrL.href)

// now lets see how we can get and set the username portion of the url

// console.log(myURL.username)

// lets set it

myURL.username = "kokocodes"

console.log(myURL.href)





