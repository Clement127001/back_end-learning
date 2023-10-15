const { readFile, writeFile } = require("fs").promises;
// const util = require("util");

//b -> using short hand approach
// const readFilePromise = util.promisify(readFile);
// const writeFilePromist = util.promisify(writeFile);

//file operation in node doesn't use promises so we need the

//so I am creating the wrapper function that can be used to be resolved
//but we are having some other approach for making non promise functions to promise function, by using the following functions
// a) -> using promisify function in util module
// b) -> using short hand operation while importing
// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     const res = readFile(path, "utf-8", (res, err) => {
//       if (err) reject(err);
//       else resolve(res);
//     });
//   });
// };

//promises can be handled in two ways
//1 -> using then and catch
//2 -> using async and await

//1 -> using the then and await method to resolve the callback
// const performAction = () => {
//   const first = getText("./Content/first.txt")
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));
// };

//2 -> using async and await to cleanly handle the promise

const performAction = async () => {
  try {
    const first = await readFile("./Content/first.txt", "utf-8");
    const second = await readFile("./Content/second.txt", "utf-8");

    const content = `This is the result from the async and await approach of reading and writing file : ${first}, ${second} `;
    writeFile("./Content/result-async-await.txt", content, { flag: "a" });
  } catch (err) {
    console.log(err);
  }
};

performAction();
