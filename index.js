import express from 'express';
const app = express();

app.set('view engine','ejs');
app.use(express.static('public'));
const list = {
    id : '1',
    nome: 'Jose Silva',
    idade : 19,
    cep: 13231323,
    cpf : 12031203
}
app.get("/",(req, res)=>{
   
    res.render("index");

});

app.get('/perguntar',(req, res)=>{
    res.render("perguntar");
})

app.listen(8080,()=>{
    console.log("Aplicativo está rodando")
})