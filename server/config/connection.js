const { connect, connection } = require('mongoose');
const dotenv = require("dotenv");
dotenv.config();

const connectionString =
  process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/connect4_db';

connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;