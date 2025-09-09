//handlebar é um template de modelos basicamente

const express = require("express");
const { ExpressHandlebars } = require("express-handlebars");
const app = express();
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser') 
const Post = require('./models/Post')

//config
    //template engine
    var handle = handlebars.create({
        defaultLayout: 'main'
    })
    app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}))
    app.set('view engine', 'handlebars') //declara que quer usar o handlebars como template
    
    //bodyParser config padrão
    app.use(bodyParser.urlencoded({extends: false}))
    app.use(bodyParser.json())

//ROTAS
app.get("/cad", function(req, res){ //sempre recebem dois parametros
    res.render('formulario') //enviar o formulario
})

//Rota Exclusão
app.get("/deletar/:id", function(req, res){
    Post.destroy({where: {'id': req.params.id}}).then(function(){
        res.send('Deletado')
    }).catch(function(erro){
        res.send('Erro ao deletar'+ erro)
    }) //vai puxar o parametro que foi passado na rota, e excluir a linha 
})

//Redirecionamento
app.get('/', function(req, res){
    Post.findAll({order: [['id','DESC']] }).then(function(posts){ //essa linha serve para receber todos os posts da tabela post, pode ser qualquer nome
        console.log(posts)
        res.render('home', {posts: posts}) //serve para passar as variaveis entre as chaves
    })
})

app.post('/add', function(req, res){ //só pode ser acessada com requisição com metodo post
    Post.create({
        titulo: req.body.titulo,
        conteudo: req.body.conteudo
    }).then(function(){
        res.redirect('/') //serve pra redirecionar
    }).catch(function(erro){
        res.send('Não' + erro)
    })
    //req.body.conteudo // pega o conteudo do body É uma propriedade criada pelo Express dentro do objeto req (request).
    //res.send(req.body.titulo+req.body.conteudo) //o body é tudo que o cliente manda para o backend
})


app.listen(8055, function(){
    console.log("Server rodando")
})