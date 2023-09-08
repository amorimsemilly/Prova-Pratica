const mysql = require('mysql2')

//Configuração e conexão com banco
const conn = mysql.createPool({
  connectionLimit: 10,
  host: 'root',
  port: '3333', // É opcional.
  user: 'Emilly',
  password: 'Sen@iDev77!.',
  database: 'livros',
})

// É necessário exportar esse modulo