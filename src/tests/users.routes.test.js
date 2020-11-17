const request = require("supertest");

const initApp = require("../app");
const UsersRepo = require("../repos/users.repo");

it("create a user", async () => {
  const startingCount = await UsersRepo.count();
  expect(startingCount).toEqual(0);

  await request(initApp())
    .post("/users")
    .send({ username: "Sample Name", bio: "sammmmmmmpleeeeee" })
    .expect(200);

  const finishCount = await UsersRepo.count();
  expect(finishCount).toEqual(1);
});
