const { readFileSync, writeFileSync } = require("fs");

//fs module provide the functionality to work with the file systems

//Here we are going with the sync approach but eventually we are going to use the database where writing and reading from the database is often time cosuming task , so use async functionality for not to break the system.

console.log("Started the work");
//reading from the file
const first = readFileSync("./Content/first.txt", "utf8");
const second = readFileSync("./Content/second.txt", "utf8");

//writing to the file
const result = `This is the result of the write async function : ${first}, ${second}`;
writeFileSync("./Content/result-sync.txt", result, { flag: "a" });

console.log("Done working");
console.log("Start the new task");
