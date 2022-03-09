const path = require('path');

module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'mysql',
        host: env('DATABASE_HOST', 'my-strapi-db-mo.mysql.database.azure.com'),
        port: env.int('DATABASE_PORT', 3306),
        database: env('DATABASE_NAME', 'strapi'),
        username: env('DATABASE_USERNAME', 'makhan'),
        password: env('DATABASE_PASSWORD', 'March2022'),
      },
      options: {},
    },
  },
})
