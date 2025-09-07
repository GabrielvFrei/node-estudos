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