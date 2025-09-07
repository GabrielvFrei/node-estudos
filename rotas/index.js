//Express é um framework orientado a ROTAS

const express = require("express")
const app = express() //Variavel principal do sistema || Constante

app.get("/", function(req, res){//res é literalmente a resposta que vai vir, pd ter qualquer nome
    res.send("Seja bem vindo") //Rota Principal
})
app.get("/sobre", function(req,res){
    res.send("Sobre")
})
app.get("/blog", function (req,res){  //REQ é responsavel por receber os dados de uma requisição, o software pega esses parametros
    res.send("Blog")
})

//////Rotas com Parametros (Rotas dinamicas)

app.get("/ola/:nome/:cargo", function(req, res){ //função callback com parametros
    res.send("<h1>Ola "+req.params.nome+"</h1>"+"<h2>Cargo "+req.params.cargo+"</h2>") //serve para obter os parametros da requisição
//    res.send("<h2>Cargo "+req.params.cargo+"</h2>") || //só pode mandar um SEND por rota
})
 

app.listen(8055, function(){
    console.log("Server ta rodando")
}) //precisa ser a ultima linha do codigo, essa linha que faz o servidor abrir
//Tambem da pra ver que quando o listen é executado, ele chama uma função que contem
//console.log, famosa função de callback

