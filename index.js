// we will be talking about http module and the http module provides useful functions and classes to build on http server

// this is the most important module

// we will be using our entry point
// common js
const http = require('http')
const  path = require('path')
const fs = require('fs')
// so now lets just create a basic server
// we will have a variable server
// in our http we have a method createServer and a createServer will get access to the request object
//and the response object
// so we creating a server and whenever we should run it, we want it to listen on a port so we will add that now
// and that port will take in a number so we will create a constants for that 

// lets understand better the (req) and (res)

// (req) whenever you need any recource from a server or data, you make use of this

//(res) so when you send a request on getting to the server you get a response and the response can be in any format
//it could be an html page or you could get a json response, for example lets say i want to access a webpage like lets say maybe facebook.com and am sending a request to the server and getting a response 
// in form of  facebook page

// so we have too many request, when you check your request object you see you have access to things like the request url, the request method and so on
//for the request object it just provides you the http request and has properties for like your request query sting, parameters, http headers and so on

const server = http.createServer((req, res) => {
   // lets see what we get 
   //now lets check the method, which is information abou 
   //the http method you are sending
    // console.log(req.url)

    // console.log(req.method)

    // res.write('welcome to aptlearn')
    // res.end()

    // how to load html page using http
    // we will be referencing back to the previous module which is the path and the file system module

    //lets set some conditions

    if(req.url === '/'){
        res.end("<h1>welcome to aptlearn</h1>")
    }
    
})

const PORT = 3004
server.listen(PORT, () => console.log(`server is running on port ${PORT}`))