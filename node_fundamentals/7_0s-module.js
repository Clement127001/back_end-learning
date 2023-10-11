const os = require("os");

//There are many inbuit modules that helps us to have many features.
//some of the modules like {os,path,fs,error,http} and a lot

//getting user details
const user = os.userInfo();

//getting uptime
const uptime = os.uptime();

//object about the details like freemem, occupiedmem, type

const userInfo = {
  name: os.type(),
  freemem: os.freemem(),
  occupiedmen: os.totalmem(),
  release: os.release(),
};

console.log(
  "User Details : " +
    user +
    "\nuptime info: " +
    uptime +
    "\nOther details : " +
    userInfo
);
