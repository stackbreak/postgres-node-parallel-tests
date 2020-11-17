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

module.exports = {
  getDBOptions,
};
