const pg = require("pg");

class Pool {
  pool = null;

  connect(options = {}) {
    this.pool = new pg.Pool(options);
  }
}

module.exports = new Pool();
