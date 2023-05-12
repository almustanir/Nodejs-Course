const fs = require("fs");
const path = require("path");
//to create a directory

if (!fs.existsSync(path.join(__dirname, "files", "directory"))) {
  fs.mkdir(path.join(__dirname, "files", "directory"), (err) => {
    if (err) throw err;
    console.log("Directory successfully created");
  });
} else {
  console.log("Directory already exists");
}


//to delete a directory

if (fs.existsSync(path.join(__dirname, "files", "folder"))) {

fs.rmdir(path.join(__dirname, "files", "folder"), (err) => {
    if (err) throw err;
    console.log("Directory successfully created");
  });
}

//the if and else statements will prevent the creation of the folder if it had been created previously