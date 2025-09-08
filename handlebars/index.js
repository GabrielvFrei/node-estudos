//handlebar é um template de modelos basicamente

const express = require("express");
const app = express();
const handlebars = require('express-handlebars')
const Sequelize = require('sequelize')

//config
    //template engine
    app.engine('handlebars', handlebars({defaultLayout: 'main'}))
    app.set('view engine', 'handlebars') //declara que quer usar o handlebars como template
    //conexão com o banco
    const sequelize = new Sequelize('teste','root','Cbjr1301$',{ //como se tivesse declarando um obj
    host: "localhost",
    dialect: 'mysql'
    })
//rota get
app.get("/cad", function(req, res){
    res.send('rota pegando')
})

app.listen(8055, function(){
    console.log("Server rodando")
})