var mysql = require('mysql')
var connMySQL = function(){
   return mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '1234',
      database: 'portal_noticias'
   })
}

module.exports = function() {
   console.log("o autoload carregou o modulo de conexão do DB")
   return connMySQL
}
