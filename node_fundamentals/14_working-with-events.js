//when we are working with the node , we will be having events and node heavily use events under the hoood.
//so understanding the events will provide the insight of how node handle event

const EventEmitter = require("events");

const myEmitter = new EventEmitter();

//working with event 1)subscribe to the event 2)listen to the event 3)emitting actions (respond to the event)
//it require the string a tag then callback function
myEmitter.on("request", (name, id, role) => {
  console.log(
    `Get the data from ${name} with id : ${id} and he was working as ${role}`
  );
});

myEmitter.emit("request", "Clement", "03", "full stack developer");
