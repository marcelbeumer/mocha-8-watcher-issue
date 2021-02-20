const assert = require("assert").strict;

// EXPLICIT THROW
// - BAD: will crash mocha@8 watcher
// - GOOD: will not crash on mocha@7
// throw new Error("x");

describe("example", () => {
  it("tests", async () => {
    // REQUIRE ERROR
    // - BAD: will crash mocha@8 watcher
    // - GOOD: will not crash on mocha@7
    // thisIsNotValidCode((;

    // RUNTIME ERROR:
    // - GOOD: will not crash watcher
    // doesNotExist();

    assert.ok(true);
  });
});
