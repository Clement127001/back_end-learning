const path = require("path");

//In normal js functions we cannot access the file system, with the help of node modules we can perform it using path module.
//path module helps to locate the resource in the environment
console.log(path.sep); // the seperator used in mac file system -> /

const filePath = path.join("/Content/", "SubFolder", "test.txt");

//noramlising the path so that we will always get the path that is right -> like normalising the url in http
const baseName = path.basename(filePath);
console.log(baseName);

//normalising the file path
console.log(path.normalize(filePath));

//resolving the absolute path (start from the root directory '/')
const resolvedPath = path.resolve(__dirname, "Content", "SubFolder");
console.log(resolvedPath);
