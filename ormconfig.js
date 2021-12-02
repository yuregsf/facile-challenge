module.exports = {
  type: process.env.CONNECTION,
  host: process.env.HOST,
  port: process.env.PORT,
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  logging: process.env.LOGGING,
  entities: [process.env.ENTITIES],
  migrations: [process.env.MIGRATIONS],
  migrations_run: process.env.MIGRATIONS_RUN,
  ssl:
    process.env.SSL === 'true'
      ? {
        rejectUnauthorized: false,
      }
      : false,

}
