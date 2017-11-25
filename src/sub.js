console.log("FIRST");
console.log("SECOND");
debugger;
console.log("THIRD");
debugger;
process.send({message: "done"});
console.log("SUBPROCESS DONE");