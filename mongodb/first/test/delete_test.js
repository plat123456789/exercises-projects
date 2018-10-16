const assert = require("assert");
const User = require("../src/user");

describe("Deleting a user", () => {
  let max;

  beforeEach(done => {
    max = new User({ name: "max" });
    max.save().then(() => done());
  });

  it("model instance remove", done => {
    max
      .remove()
      .then(() => User.findOne({ name: "max" }))
      .then(user => {
        assert(user === null);
        done();
      });
  });

  it("class method remove", () => {
    User.remove({ name: "max" })
      .then(() => User.findOne({ name: "max" }))
      .then(user => {
        assert(user === null);
        done();
      });
  });

  it("class method findOneAndRemove", done => {
    User.findOneAndRemove({ name: "max" })
      .then(() => User.findOne({ name: "max" }))
      .then(user => {
        assert(user === null);
        done();
      });
  });

  it("class method findyIdAndRemove", done => {
    User.findOneAndRemove({ name: "max" })
      .then(() => User.findOne({ name: "max" }))
      .then(user => {
        assert(user === null);
        done();
      });
  });
});
