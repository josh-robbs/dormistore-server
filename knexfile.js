module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/dormistore'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
}