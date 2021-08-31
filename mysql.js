var mysql      = require('mysql');
const config = require('./config/default.json');

var connection = mysql.createConnection(config.dbSkklub);

module.exports = connection;