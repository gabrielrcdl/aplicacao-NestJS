/* eslint-disable prettier/prettier */

module.exports = {
  type: 'postgres',
  host: 'db',
  port: 5432,
  username: 'postgres',
  password: 'root',
  database: 'cursonestjs',
  entities: ['dist/**/*.entity.js'],
  migrations: ['dist/migrations/*.js'],
  cli: {
    migrationsDir: 'src/migrations',
  },
};
