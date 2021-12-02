module.exports = {
  connection: process.env.CONNECTION,
  host: process.env.HOST,
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  port: process.env.PORT,
  logging: process.env.LOGGING,
  entities: process.env.ENTITIES,
  migrations: process.env.MIGRATIONS,
  migrations_run: process.env.MIGRATIONS_RUN,
  ssl:
      process.env.SSL === 'true'
        ? {
            rejectUnauthorized: false,
          }
        : false,

}
