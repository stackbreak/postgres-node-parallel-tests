const express = require("express");

const UsersRepo = require("../repos/users.repo");

const router = express.Router();

router.get("/users", async (req, res) => {
  const users = await UsersRepo.find();
  res.send(users);
});

router.get("/users/:id", async (req, res) => {
  const { id } = req.params;
  const user = await UsersRepo.findById(id);

  if (user) {
    res.send(user);
  } else {
    res.sendStatus(404);
  }
});

router.post("/users", async (req, res) => {
  const { username, bio } = req.body;
  const user = await UsersRepo.insert(username, bio);
  res.send(user);
});

router.put("/users/:id", async (req, res) => {
  const { id } = req.params;
  const { username, bio } = req.body;

  const user = await UsersRepo.update(id, username, bio);

  if (user) {
    res.send(user);
  } else {
    res.sendStatus(404);
  }
});

router.delete("/users/:id", async (req, res) => {
  const { id } = req.params;

  const user = await UsersRepo.delete(id);

  if (user) {
    res.send(user);
  } else {
    res.sendStatus(404);
  }
});

module.exports = router;
