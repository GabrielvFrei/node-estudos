//esse arquivo é so para o banco de dados
const Sequelize = require('sequelize')

//conexão com o banco
const sequelize = new Sequelize('postapp','root','Cbjr1301$',{ //como se tivesse declarando um obj
host: "localhost",
dialect: 'mysql'
})


//por que isso?, cada model vai ficar em arquivos diferentes, é uma boa pratica que cada tabela fique em um documento diferente
module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}