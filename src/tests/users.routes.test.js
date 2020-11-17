const request = require("supertest");

const initApp = require("../app");
const UsersRepo = require("../repos/users.repo");
const dbPool = require("../db-pool");
const { getDBOptions } = require("../config");

beforeAll(() => {
  return dbPool.connect(getDBOptions(true));
});

afterAll(() => {
  return dbPool.close();
});

it("create a user", async () => {
  const startingCount = await UsersRepo.count();

  await request(initApp())
    .post("/users")
    .send({ username: "Sample Name", bio: "sammmmmmmpleeeeee" })
    .expect(200);

  const finishCount = await UsersRepo.count();
  expect(finishCount - startingCount).toEqual(1);
});
