const express = require("express")
const app = express()

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html") //retorna o index, a raiz da aplicação
});

app.get("/sobre", function(req, res){
    res.sendFile(__dirname + "/sobre.html") //dirname é a variavel global da raiz do arquivo
})
app.listen(8055, function(){
    console.log("Funcionando")
})