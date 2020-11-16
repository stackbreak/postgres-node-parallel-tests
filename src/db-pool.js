const pg = require("pg");

class Pool {
  pool = null;

  connect(options = {}) {
    this.pool = new pg.Pool(options);
    return this.pool.query(`select 1 + 1;`);
  }

  close() {
    return this.pool.end();
  }

  query(sql) {
    return this.pool.query(sql);
  }
}

module.exports = new Pool();
