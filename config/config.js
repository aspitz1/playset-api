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
    "database": "playset_api",
    "host": process.env.DATABASE_HOST,
    "url": process.env.DATABASE_URL,
    "password": process.env.DATABASE_PASSWORD,  
    "dialect": "postgres"
  }
}
