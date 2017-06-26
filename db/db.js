const mongoose = require('mongoose')
const MONGO_DB_DATABASE = 'Cluster0'
const MONGO_DB_USER = 'aosorio'
const MONGO_DB_PASSWORD = 'password1234'
const URL = `mongodb://${MONGO_DB_USER}:${MONGO_DB_PASSWORD}@cluster0-shard-00-00-tffh6.mongodb.net:27017,cluster0-shard-00-01-tffh6.mongodb.net:27017,cluster0-shard-00-02-tffh6.mongodb.net:27017/${MONGO_DB_DATABASE}?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin`
const db = mongoose.connection

mongoose.connect(URL)

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.info('Successfully connected to database')
});

module.exports = mongoose