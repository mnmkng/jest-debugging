const parent = require("../src/parent.js");

test("test", (done) => {
    debugger;
    parent((m) => {
        console.log(m);
        done();
    });
});