const express = require("express")
const app = express()

app.get("/", function(req, res){
    res.sendFile(__dirname + "/exibir-html/index.html") //retorna o index, a raiz da aplicação
});

app.listen(8055, function(){
    console.log("Funcionando")
})