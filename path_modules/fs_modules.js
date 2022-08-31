// so basically this module is used to create, read, update, delete files amongs all other things
//so lets dive in

const fs = require('fs');
const path = require('path');

// now first of we will create a folder
// and inside the bracket we are going to define the path where are folder will be kept
// for me i want it in my current directory so i will use the method path.join and the name of the folder fs and then we have an empty object adn then a fall back for a possible error
// we will also be making use of our es6 arrow function which will be an asynchronous method for creating a folder

// fs.mkdir(path.join(__dirname, 'fs'), {}, err =>{
//   if (err) throw err
//   console.log('folder created successfully..')
// } )
// console.log('async')

// so that worked, now we will see how we can create and write into a file

// fs.writeFile(path.join(__dirname, 'fs', 'index.txt'), 'nodejs for backend developers', err =>{
//     if (err) throw err;
//     console.log("file written into...");
// });


// now lets see how we can append a data into an existing file that contains something
// for this we cant make use of the writefile method becos its going to continue overwritting the content of that file, we dont want to overwrite it
// we want to add to it
// fs.writeFile(path.join(__dirname, 'fs', 'index.txt'), 'nodejs for backend developers', err =>{
//     if (err) throw err;
//      // append into file
//      fs.appendFile(path.join(__dirname, "fs", "index.txt"), "on aptlearn", err =>{
//         if (err) throw err;
//         console.log('file edoted successfully...from')
// })
// })


// okay it worked, this make sense, so now lets see how we can read the content of a file
// for this we have to ensure we pass in the encoding 'utf8' becos without this we will get a raw buffer file
// we add our callback for error and data for the data we want to display

// fs.readFile(path.join(__dirname, 'fs', 'index.txt'), "utf8", (err, data)=>{
//     if (err) throw err;
//     console.log(data)
// })

// so now lets see how to rename a file

// fs.rename(path.join(__dirname, 'fs', "index.txt"), path.join(__dirname, "fs", "home.txt"), err =>{
//     if(err) throw err;
//     console.log('file renamed')
// })


// now lets see how to delete a folder, but before we do that we first check to see if that folder exist and if it doesnt exist then create it

// if(!fs.existsSync){
// fs.mkdir(path.join(__dirname, 'fs2'), {}, err =>{
//   if (err) throw err
//   console.log('folder created successfully..')
// } )
// }else{
//     fs.rmdir(path.join(__dirname, 'fs2'), {}, err =>{
//         if (err) throw err
//         console.log('folder deleted successfully..')
//       } )
// }

//now we know how to delete a folder, lets see how to delete a file

fs.unlinkSync(path.join(__dirname, "fs", "home.txt"), err =>{
    if(err) throw err;
    console.log('file deleted successfully')
})




