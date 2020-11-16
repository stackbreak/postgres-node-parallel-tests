/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.sql(`
    create table users (
      id serial primary key,
      created_at timestamptz default current_timestamp,
      updated_at timestamptz default current_timestamp,
      username varchar(50) not null,
      bio varchar(500)
    );
  `);
};

exports.down = (pgm) => {
  pgm.sql(`
    drop table users;
  `);
};
