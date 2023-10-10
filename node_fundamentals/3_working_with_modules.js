//in node every file is module and it helps to maintain the code base simpler and cut out the complex functionalities to the seperate file
//modules also helps us to achieve encapsulation - we can configure what to share

//here the functionality is cut out to the other file(module,because every file is module by default)
const { jerry: j, isabella: i } = require("./4_name");
const { sayThankYou, myDetail } = require("./5_utils");
require("./6_unknow_thing");

sayThankYou(j);
sayThankYou(i);

myDetail();
