const getDBOptions = (isTest = false) => {
  const common = {
    host: "localhost",
    port: 5432,
    user: "dockerdev",
    password: "dockerdev",
  };

  const dbName = isTest ? "socnet__test" : "socnet";
  return { ...common, database: dbName };
};

const APP_PORT = 3005;

module.exports = {
  getDBOptions,
  APP_PORT,
};
