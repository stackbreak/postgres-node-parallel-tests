const request = require("supertest");

const initApp = require("../app");
const UsersRepo = require("../repos/users.repo");

const Context = require("./context");

let ctx;

beforeAll(async () => {
  ctx = await Context.build();
});

beforeEach(async () => {
  await ctx.reset();
});

afterAll(() => {
  return ctx.close();
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
