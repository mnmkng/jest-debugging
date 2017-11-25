const parent = require("../src/parent.js");

jest.setTimeout(10000);

test("test", (done) => {
    debugger;
    parent((m) => {
        console.log(m);
        done();
    });
});