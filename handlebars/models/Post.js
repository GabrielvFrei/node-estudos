const db = require('./db')//o ./ serve para falar que o arquivo esta na mesma pagina
const Post = db.sequelize.define('postagens', {
    titulo: {
        type: db.Sequelize.STRING //ATENTE-SE AS LETRAS MAIUSCULAS
    },
    conteudo: {
        type: db.Sequelize.TEXT //ATENTE-SE AS LETRAS MAIUSCULAS
    }
})

module.exports = Post //exportando

//Post.sync({force:true}) retirado sempre que faz a tabela 