const pool = require("../db-pool");

class UserRepo {
  static async find() {
    const { rows } = await pool.query(`select * from users;`);

    return rows;
  }

  static async findById() {}

  static async insert() {}

  static async update() {}

  static async delete() {}
}
