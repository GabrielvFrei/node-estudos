const Sequelize = require('sequelize') //variavel generica
const sequelize = new Sequelize('teste', 'root', 'Cbjr1301$', { //conexão com banco de dados || parametro 1 banco parametro 2 usuario parametro 3 senha
    host: "localhost", //onde o banco ta rodando
    dialect: 'mysql'
})

//verificar que a conexão foi bem feita

sequelize.authenticate().then(function(){ //then é um callback, é executada quando um evento ocorre
    console.log("deu bom") //quando o sequelize tenta se conectar, ela so tera sucesso ou falha
}).catch(function(erro){ //Catch é a falha
    console.log("falha: "+erro)
}) //verificar se a conexão com o banco ocorreu 

//MODEL É BASICAMENTE A CRIAÇÃO DE TABELAS PELO PROPRIO SEQUELIZE || São tabelas

//MODEL PARA POSTAGENS

const Postagem = sequelize.define('postagens', {
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
})

//MODEL PARA USUARIOS

const Usuario = sequelize.define('usuarios', {
    nome:{
        type: Sequelize.STRING
    },
    sobrenome:{
        type: Sequelize.STRING
    },
    idade:{
        type: Sequelize.INTEGER
    },
    email:{
        type: Sequelize.STRING
    }
}) 

//INSERÇÃO DE DADOS

Postagem.create({
    titulo: "legal",
    conteudo: "ASKJDFKASFDA SKMFNAJKDVKAJHVNKAJSFNHS"
})

Usuario.create({
    nome: "Roberto",
    sobrenome: "Jonas",
    idade: 19,
    email:"KASDJFKASJF@!NDASKJHNJKS.com"
})

// Usuario.sync({force: true}) // faz gerar a tabela la no banco de dados 