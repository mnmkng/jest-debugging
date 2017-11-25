const cp = require("child_process");

module.exports = function (cb) {
    let child = cp.fork(__dirname + "/sub.js", {execArgv: ["--inspect-brk=0"]});
    child.on("message", cb)
};

