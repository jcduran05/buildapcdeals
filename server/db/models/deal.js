const Sequelize = require('sequelize')
const db = require('../db')

const Deal = db.define('deal', {
  title: {
    type: Sequelize.STRING,
    unique: false,
    allowNull: false
  },
  domain: {
    type: Sequelize.STRING,
    unique: false,
    allowNull: false
  },
  url: {
    type: Sequelize.STRING,
    unique: false,
    allowNull: false
  }
})

module.exports = Deal
