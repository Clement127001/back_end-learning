//sepearating the fuction to the files

const sayThankYou = (name) => {
  console.log(`Thank you ${name}`);
};

//just a check
const myDetail = () => {
  console.log("I am clement and I wanna be a best full stack developer");
};

//the two way of exporting

//1 -> using object like
//2 -> using default export used commonly in exporting the componets in react js

module.exports = { sayThankYou, myDetail };
