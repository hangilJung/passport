require('dotenv').config();

module.exports = {
  development: {
    username: process.env.SEQUELIZE_DEV_USERNAME,
    password: process.env.SEQUELIZE_DEV_PASSWORD,
    database: process.env.SEQUELIZE_DEV_DATABASE,
    host: process.env.SEQUELIZE_DEV_HOST,
    dialect: process.env.SEQUELIZE_DEV_DIALECT,
  },
  test: {
    username: process.env.SEQUELIZE_DEV_USERNAME,
    password: process.env.SEQUELIZE_DEV_PASSWORD,
    database: process.env.SEQUELIZE_DEV_DATABASE,
    host: process.env.SEQUELIZE_DEV_HOST,
    dialect: process.env.SEQUELIZE_DEV_DIALECT,
  },
  production: {
    username: process.env.SEQUELIZE_DEV_USERNAME,
    password: process.env.SEQUELIZE_DEV_PASSWORD,
    database: process.env.SEQUELIZE_DEV_DATABASE,
    host: process.env.SEQUELIZE_DEV_HOST,
    dialect: process.env.SEQUELIZE_DEV_DIALECT,
  },
};
