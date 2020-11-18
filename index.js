const initApp = require("./src/app");
const dbPool = require("./src/db-pool");
const { getDBOptions, APP_PORT } = require("./src/config");

dbPool
  .connect(getDBOptions())
  .then(() => {
    initApp().listen(APP_PORT, () => {
      console.log(`START ON PORT ${APP_PORT}`);
    });
  })
  .catch((err) => {
    console.error(err);
  });
