const assert = require("assert");
const User = require("../src/user");

describe("Reading users out of the database", () => {
  let max;

  beforeEach(done => {
    max = new User({ name: "max" });
    max.save().then(() => done());
  });

  it("finds all users with a name of joe", done => {
    User.find({ name: "max" }).then(users => {
      assert(users[0]._id.toString() === max._id.toString());
      done();
    });
  });

  it("find a user with a particular id", done => {
    User.findOne({ _id: max._id }).then(user => {
      assert(user.name === "max");
      done();
    });
  });
});
