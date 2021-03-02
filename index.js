const express = require("express");
const app = express();
const bodyParser = require("body-parser");//Responsavel por traduzir os dados recebidos do front(formulario) num modelo utilizavel no backend(server)

app.set('view engine','ejs');

app.use(express.static('public'));

//Configuração do Body Parser
app.use(bodyParser.urlencoded({extended:false}));//Comando necessario para a tradução do body-parser
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