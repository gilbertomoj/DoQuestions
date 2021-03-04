const express = require("express");
const app = express();
const bodyParser = require("body-parser");//Responsável por traduzir os dados recebidos do front(formulario) num modelo utilizavel no backend(server)
const connection = require('./database/database');
const Pergunta = require('./database/Pergunta')
const Resposta = require('./database/Resposta')

//Database
connection.authenticate().then(()=>{
    console.log('Conexão realizada com sucesso')
}).catch((err)=>{
    console.log('Um erro ocorreu '+err)
})
//Configuração do EJS
app.set('view engine','ejs');
app.use(express.static('public'));
//Configuração do Body Parser
app.use(bodyParser.urlencoded({extended:false}));//Comando necessário para a tradução do body-parser
app.use(bodyParser.json());//Ler dados enviados como JSON

//Rotas
app.get("/",(req, res)=>{
   
    //SELECT * FROM  perguntas
    Pergunta.findAll({raw: true, order: [
        ['id','DESC']//Comando para organizar a View >> ASC - Crescente || DESC - Decrescente 
    ]}).then(
        perguntas=>{
            res.render("index",{
                perguntas
            });
        }
    )

});
app.get("/perguntar",(req, res)=>{
    res.render("perguntar");
})
app.post("/salvarpergunta", (req, res)=>{
    var titulo = req.body.titulo;
    var descricao = req.body.descricao;
    Pergunta.create({
        titulo,
        descricao
    }).then(()=>{
        res.redirect("/");
    });
})

app.get('/pergunta/:id', (req, res)=>{
    var id = req.params.id;
    Pergunta.findOne({
        where: {id}
    }).then(pergunta =>{
        if (pergunta != undefined) {
            res.render("pergunta",{pergunta})
        }else{
            res.redirect("/")
        }
    })
})

app.listen(8080,()=>{
    console.log("Aplicativo está rodando")
})