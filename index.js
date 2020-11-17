const app = require("./src/app");
const dbPool = require("./src/db-pool");
const { getDBOptions } = require("./src/config");

const APP_PORT = 3005;

dbPool
  .connect(getDBOptions())
  .then(() => {
    app().listen(APP_PORT, () => {
      console.log(`START ON PORT ${APP_PORT}`);
    });
  })
  .catch((err) => {
    console.error(err);
  });
