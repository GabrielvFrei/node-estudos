//handlebar é um template de modelos basicamente

const express = require("express");
const { ExpressHandlebars } = require("express-handlebars");
const app = express();
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser') 
const Sequelize = require('sequelize')

//config
    //template engine
    var handle = handlebars.create({
        defaultLayout: 'main'
    })
    app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}))
    app.set('view engine', 'handlebars') //declara que quer usar o handlebars como template
    
    //bodyParser
    app.use(bodyParser.urlencoded({extends: false}))
    app.use(bodyParser.json())

    //conexão com o banco
    const sequelize = new Sequelize('teste','root','Cbjr1301$',{ //como se tivesse declarando um obj
    host: "localhost",
    dialect: 'mysql'
    })
//rota get
app.get("/cad", function(req, res){ //sempre recebem dois parametros
    res.render('formulario') //enviar o formulario
})

app.post("/add", function(req, res){ //só pode ser acessada com requisição com metodo post
    req.body.conteudo // pega o conteudo do body É uma propriedade criada pelo Express dentro do objeto req (request).
    res.send(req.body.titulo+req.body.conteudo) //o body é tudo que o cliente manda para o backend
})

app.listen(8055, function(){
    console.log("Server rodando")
})