const _ = require("lodash");

const arraydeep = [1, [2, [3, [4]]]];
const resultArray = _.flatMapDeep(arraydeep);

console.log(
  "Original array : " + arraydeep + "\nResultant array : " + resultArray
);

console.log("hello world");
