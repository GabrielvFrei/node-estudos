var http = require('http');

http.createServer(function(req, res){
    res.end("Ola")
}).listen(8055)

console.log("Servidor pegando")