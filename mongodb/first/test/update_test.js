const asert = require("assert");
const User = require("../src/user");

describe("Updating records", () => {
  let max;

  beforeEach(done => {
    max = new User({ name: "max" });
    max.save().then(() => done());
  });

  function assertName(operation) {
    operation.then(() => User.find({})).then(users => {
      assert(users.length === 1);
      assert(users[0].name === "tommy");
      done();
    });
  }

  it("instance type using set & save", done => {
    max.set("name", "tommy");
    assertName(max.save(), done);
  });

  it("A model instance can update", done => {
    assertName(max.update({ name: "tommy" }), done);
  });

  it("A model class can update", done => {
    assertName(User.update({ name: "max" }, { name: "tommy" }), done);
  });

  it("A model class can update one record", done => {
    assertName(User.findOneAndUpdate({ name: "max" }, { name: "tommy" }), done);
  });

  it("A model class can find a record with an Id and update", () => {
    assertName(User.findByIdAndUpdate(max._id, { name: "tommy" }), done);
  });

  it("A user can have their postcount incremented by 1", () => {
    max.set("postCount", 1);
  });
});
