const mysql = require('mysql2');
const createTableQuery = require('./createtable.js');

const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '586270',
  database : 'conexao',
});

connection.connect((err) => {
    if (err) {
      console.error('Erro ao conectar: ' + err.stack);
      return;
    }
    console.log('Conectado como id ' + connection.threadId);
  });
  
  module.exports = connection;
