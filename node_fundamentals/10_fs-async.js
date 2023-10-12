const { readFile, writeFile } = require("fs");

console.log("started creating");

//reading the first file
readFile("./Content/first.txt", "utf-8", (err, res) => {
  if (err) {
    console.log("Error");
    return;
  }
  const first = res;

  //reading the second file
  readFile("./Content/second.txt", "utf-8", (err, res) => {
    if (err) {
      console.log("Error");
      return;
    }
    const second = res;

    //writing the results onto the new file
    const content = `The result from the async-function: ${first},${second}`;
    writeFile(
      "./Content/result-async.txt",
      content,
      { flag: "a" },
      (err, res) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log("Done work");
      }
    );
  });
});
console.log("started new work");
