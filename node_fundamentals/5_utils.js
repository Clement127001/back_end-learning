//sepearating the fuction to the files

const sayThankYou = (name) => {
  console.log(`Thank you ${name}`);
};

//the two way of exporting

//1 -> using object like
//2 -> using default export used commonly in exporting the componets in react js

module.exports = sayThankYou;
