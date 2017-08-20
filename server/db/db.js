const Sequelize = require('sequelize')
if (process.env.NODE_ENV !== 'production') require('../../secrets')

const name = process.env.DATABASE_NAME
const username = (process.env.DATABASE_USERNAME ? process.env.DATABASE_USERNAME : '')
const password = (process.env.DATABASE_PASSWORD ? process.env.DATABASE_PASSWORD : '')
const url = process.env.DATABASE_URL || (name && username && password ?
    `postgres://${username}:${password}@localhost:5432/${name}` : `postgres://localhost:5432/boilermaker`)

const db = new Sequelize(url, { logging: false })
module.exports = db
