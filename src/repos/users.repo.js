const pool = require("../db-pool");
const { convertCase } = require("../utils/convert");

class UsersRepo {
  static async find() {
    const { rows } = await pool.query(`select * from users;`);

    return convertCase(rows);
  }

  static async findById(id) {
    const { rows } = await pool.query(
      `
      select *
      from users
      where id = $1
      ;
    `,
      [id]
    );

    return convertCase(rows)[0];
  }

  static async insert(username, bio) {
    const { rows } = await pool.query(
      `
      insert into users
        (username, bio)
      values
        ($1, $2)
      returning *;
    `,
      [username, bio]
    );

    return convertCase(rows)[0];
  }

  static async update(id, username, bio) {
    const { rows } = await pool.query(
      `
      update users
      set
        username = $2,
        bio = $3,
        updated_at = now()
      where
        id = $1
      returning *;
    `,
      [id, username, bio]
    );

    return convertCase(rows)[0];
  }

  static async delete(id) {
    const { rows } = await pool.query(
      `
      delete from users
      where
        id = $1
      returning *;
    `,
      [id]
    );

    return convertCase(rows)[0];
  }
}

module.exports = UsersRepo;
