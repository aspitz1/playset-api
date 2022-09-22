require('dotenv').config();

module.exports = {
  "development": {
    "database": "playset-api",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "test": {
    "database": "sequelize_project_test",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "database": process.env.DATABASE_NAME,
    "host": process.env.DATABASE_HOST,
    "username": process.env.DATABASE_USERNAME,
    "password": process.env.DATABASE_PASSWORD,  
    "dialect": "postgres"
  }
}
