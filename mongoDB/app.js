//config do mongoose atualizado

const { text } = require('body-parser')
const mongoose = require('mongoose') //chave mongo

mongoose.connect("mongodb://localhost/loja", {
}).then(()=>{//modelo para se conectar com o mongo
    console.log("deu certo")
}).catch((err)=>{
    console.log("houve um erro"+ err)
})

//MOODELS PARA USUARIOS as coleções/tabelas
//define o model
const UsuarioSchema = mongoose.Schema({
    nome: {
        type: String,
        require: true //define se o campo é obrigatorio
    },
    sobrenome: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    idade: {
        type: Number,
        require: true
    },
    pais: {
        type: String,
    }
})

//Definindo a collection
mongoose.model('Usuarios', UsuarioSchema) //aqui define qual collection vai cada model

//isso é o construtor de documentos da collection usuarios
const Gabriel = mongoose.model('Usuarios') //armazena referencia do schema numa variavel

//usando construtor
new Gabriel({ //criando objeto
    nome: "Gabriel",
    sobrenome: "Alves",
    idade: 19,
    email: "asdkjflas@djasfn.com",
    pais: "Arabia"
}).save().then(()=>{
    console.log("deu bom")
}).catch((err)=>{
    console.log("deu ruim")
})