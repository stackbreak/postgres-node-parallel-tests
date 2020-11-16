const app = require("./src/app");
const dbPool = require("./src/db-pool");

const APP_PORT = 3005;

dbPool
  .connect({
    host: "localhost",
    port: 5432,
    database: "socnet",
    user: "dockerdev",
    password: "dockerdev",
  })
  .then(() => {
    app().listen(APP_PORT, () => {
      console.log(`START ON PORT ${APP_PORT}`);
    });
  })
  .catch((err) => {
    console.error(err);
  });
