const express = require("express");
const app = express();
const mysql = require("mysql");

const bodyparser = require("body-parser");
const path = require("path");
const { urlencoded } = require("body-parser");
app.listen("3000", ()=>{

});

// Body parser
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(bodyparser.json());
app.use(urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, "public")));

// criando conexão com o banco de dados

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "node_testes"
});

db.connect(function(err){
    if(err){
        console.log("Erro!!! não foi possivel conectar ao banco de dados");
    }
    /*var sql = "SELECT * FROM `clientes`";
    db.query(sql, function(err, results){
        console.log(results);
    });*/
})

// renderizar a pagina

app.get("/", (req, res)=>{
    // res.render("index", {'nome': 'deyvison', "profissao": 'programador'});
    // acima está como passar parametros isolados
    db.query("SELECT * FROM `clientes`", (err, results)=>{
        res.render("index", {lista:results});
    });
});

app.get("/cadastrar", (req, res)=>{
    // res.render("cadastrar", {lista:[{'telefone': '9 9999-9999'}, {"telefone": "9 8888-8888"}, {"telefone": "9 7777-7777"}]});
    // acima esta como passar um parametro com varios valores
    res.render("cadastrar", {});
});

app.post("/cadastrar", (req, res)=>{
    let nome = req.body.nome;
    let email = req.body.email;
    let telefone = req.body.telefone;
    res.render("cadastrar", {});
    db.query('INSERT INTO `clientes` (nome, email, telefone) VALUES (?, ?, ?)', [nome, email, telefone], (err, results)=>{});
});
