module.exports = {
  type: "postgres",
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  logging: process.env.DB_LOGGING,
  entities: ["dist/**/*.entity.js"],
  migrations: ["dist/migrations/*.js"],
  migrations_run: process.env.DB_MIGRATIONS_RUN,
  ssl: process.env.DB_SSL === 'true'
      ? {
        rejectUnauthorized: false,
      }
      : false,

}
