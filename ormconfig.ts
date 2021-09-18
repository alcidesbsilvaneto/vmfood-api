const dotenv = require("dotenv");

dotenv.config({
  path: process.env.PWD + "/.env",
});

module.exports = {
  type: "postgres",
  host: "127.0.0.1",
  port: 5432,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: "vmfood_dev",
  synchronize: false,
  logging: false,
  entities: [
    process.env.NODE_ENV === "production"
      ? "dist/src/modules/**/*.model.js"
      : "src/modules/**/*.model.ts",
  ],
  migrations: [
    process.env.NODE_ENV === "production"
      ? "src/db/migrations/*.js"
      : "src/db/migrations/*.ts",
  ],
  subscribers: [
    process.env.NODE_ENV === "production"
      ? "dist/src/modules/**/*.subscribers.js"
      : "src/modules/**/*.subscribers.ts",
  ],
  cli: {
    migrationsDir: "src/db/migrations",
  },
};
