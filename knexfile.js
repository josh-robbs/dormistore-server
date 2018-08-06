module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/name_of_database'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
}