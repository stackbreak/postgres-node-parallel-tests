const express = require("express");

const usersRoutes = require("./routes/users.routes");

module.exports = () => {
  const app = express();

  app.use(express.json());
  app.use(usersRoutes);

  return app;
};
