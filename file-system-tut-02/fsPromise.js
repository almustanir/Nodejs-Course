//FsPROMISE TO READ FILES

//AANOTHER METHOD TO CREATE,READ UPDATE AND DELETE FILE.................BY USING Fs PROMISE

// const fsPromise = require('fs').promises;
const fsPromises = require("fs/promises");
const path = require("path");

const fsOperations = async () => {
  try {
    //read File
    const data = await fsPromises.readFile(
      path.join(__dirname, "files", "starter.txt"),
      {
        encoding: "utf8",
      }
    );
    console.log(data);

    //{starting}to create a new file
    await fsPromises.writeFile(
      path.join(__dirname, "new-files", "writer.txt"),
      data
    );
    //{ending}

    //update file {starting}
    await fsPromises.appendFile(
      path.join(__dirname, "new-files", "writer.txt"),
      "\n\n alaye we don update you oooooooooooo"
    );
    //update file {ending}

    //reanme files {starting}
    const newData = await fsPromises.rename(
      path.join(__dirname, "new-files", "writer.txt"),
      path.join(__dirname, "files", "new-write.txt")
    );
    //{ending}

    //unlink {starting}
    await fsPromises.unlink(path.join(__dirname, "files", "starter.txt"));

    console.log(newData);
  } catch (error) {
    console.error(error);
  }
};

fsOperations();
