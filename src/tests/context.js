const { randomBytes } = require("crypto");
const { default: migrate } = require("node-pg-migrate");
const format = require("pg-format");

const { getDBOptions } = require("../config");
const dbPool = require("../db-pool");

class Context {
  static async build() {
    const roleName = "a" + randomBytes(4).toString("hex");
    const TEST_DB_OPTIONS = getDBOptions(true);
    const SCHEMA_OPTIONS = {
      ...TEST_DB_OPTIONS,
      user: roleName,
      password: roleName,
    };

    await dbPool.connect(TEST_DB_OPTIONS);

    await dbPool.query(
      format(
        `
      create role %I
      with login password %L
      ;
    `,
        roleName,
        roleName
      )
    );

    await dbPool.query(
      format(
        `
      create schema %I
      authorization %I
      ;
    `,
        roleName,
        roleName
      )
    );

    await dbPool.close();

    await migrate({
      migrationsTable: "pgmigrations",
      schema: roleName,
      direction: "up",
      log: () => {},
      noLock: true,
      dir: "migrations",
      databaseUrl: SCHEMA_OPTIONS,
    });

    await dbPool.connect(SCHEMA_OPTIONS);

    return new Context(roleName);
  }

  constructor(roleName) {
    this.roleName = roleName;
  }

  async close() {
    const TEST_DB_OPTIONS = getDBOptions(true);

    await dbPool.close();

    await dbPool.connect(TEST_DB_OPTIONS);

    await dbPool.query(format("drop schema %I cascade;", this.roleName));
    await dbPool.query(format("drop role %I;", this.roleName));

    await dbPool.close();
  }

  async reset() {
    return dbPool.query(`
      delete from users;
    `);
  }
}

module.exports = Context;
