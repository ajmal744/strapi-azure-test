module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
        host: 'my-strapi-db-mo.mysql.database.azure.com',       
        database: 'strapi',
        port: '3306',
        user: 'makhan@my-strapi-db-mo.mysql.database.azure.com',
        password: 'March2022'        
    },
    debug:true,
  },
});
