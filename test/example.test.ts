import { strict as assert } from "assert";

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
