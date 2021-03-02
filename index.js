const express = require("express");
const app = express();
const bodyParser = require("body-parser");//Responsável por traduzir os dados recebidos do front(formulario) num modelo utilizavel no backend(server)
const connection = require('./database/database');
//Database
connection.authenticate().then(()=>{
    console.log('Conexão realizada com sucesso')
}).catch((err)=>{
    console.log('Um erro ocorreu '+err)
})

app.set('view engine','ejs');

app.use(express.static('public'));

//Configuração do Body Parser
app.use(bodyParser.urlencoded({extended:false}));//Comando necessário para a tradução do body-parser
app.use(bodyParser.json());//Ler dados enviados como JSON

//Rotas
app.get("/",(req, res)=>{
   
    res.render("index");

});
app.get("/perguntar",(req, res)=>{
    res.render("perguntar");
})
app.post("/salvarpergunta", (req, res)=>{
    var titulo = req.body.titulo;
    var descricao = req.body.descricao;
    res.send('Formulario foi recebido! Titulo : '+titulo+" Descrição : "+descricao)
})

app.listen(8080,()=>{
    console.log("Aplicativo está rodando")
})