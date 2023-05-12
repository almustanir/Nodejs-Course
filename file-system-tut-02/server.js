const fs = require("fs");
const path = require("path");

// fs.readFile('./files/stater.txt',"utf8", (err, data) => {
//     if(err) throw err;
//     // console.log(data.toString());
//     console.log(data);
// })

//READING FILES.....

process.on("uncaughtException", (err) => {
  console.log(`" There wad an error processing the data : " ${err} `);
  process.exit(1);
});

fs.readFile(
  path.join(__dirname, "files", "starter.txt"),
  "utf8",
  (err, data) => {
    if (err) throw err;
    //console.log(data.toString());
    console.log(data);
  }
);

//WRITING File and this mthod is also use to create a file by writing code for it

fs.writeFile(
  path.join(__dirname, "files", "new.txt"),
  "idan no lose guard",
  (err) => {
    if (err) throw err;
    console.log("write file completed ");

    //UPDATING File

    fs.appendFile(
      path.join(__dirname, "files", "new.txt"),
      "\n\n I have been updated",
      (err) => {
        if (err) throw err;
        console.log("write file completed ");

        //HOW TO RENAME A FILE WITH CODE
        fs.rename(
          path.join(__dirname, "files", "new.txt"),
          path.join(__dirname, "files", "final.txt"),
          (err) => {
            if (err) throw err;
            console.log("rename completed");
          }
        );
      }
    );
  }
);

//APPENDING

fs.appendFile(
  path.join(__dirname, "files", "index.js"),
  "console.log('Hello') ",
  (err) => {
    if (err) throw err;
    console.log("updating 2 completed");

    //RENAMING
    fs.rename(
      path.join(__dirname, "files", "index.js"),
      path.join(__dirname, "files", "main.js"),
      (err) => {
        if (err) throw err;
        console.log("rename 2 completed");

        //TO DELETE A FILE

        fs.unlink(path.join(__dirname, "files", "main.js"), (err) => {
          if (err) throw err;
          console.log("file deleted completed");
        });
      }
    );
  }
);


