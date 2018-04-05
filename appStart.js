'use strict';
let express = require("express");
let app = express();
const PORT = 4859;

app.use( express.static(__dirname + '/public/') );

let server = app.listen(PORT, function(){
    console.log("Servidor Rodando na porta: " + PORT + "...");
});
