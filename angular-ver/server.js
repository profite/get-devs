var http = require('http');
var app = require('./config/express')
    require('./config/database')('mongodb://localhost/geekiebooks');

http.createServer(app).listen(3001, function () {
    console.log("Servidor da aplicão Geekie Books versão angular iniciado!");
});
