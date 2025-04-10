// para navegar ate a pasta da aplicacao :cd app_calculadora
// para criar o app npm: npm init
// intalar o express: npm install express@4.18.2 // mustache-express@1.3.2

const calc = require('./calculadora');
const express = require('express');
const app = express();

app.get('/',(req, res)=>{
    let html = '<h1>app_calculadora</h1>';
    html += '<h3>Rotas da aplicacao:</h3>'
    html += '<p>/somar/:a/:b</p>';
    html += '<p>/subtrair/:a/:b</p>';
    html += '<p>/multiplicar/:a/:b</p>';
    html += '<p>/dividir/:a/:b</p>';
    res.send(html);
});

// declara a rota /somar/:a/:b
// e especifica o seu compotamento
app.get('/somar/:a/:b', (req, res)=>{
    let a = Number(req.params.a);
    let b = Number(req.params.b);
    res.send(`${a} + ${b} = ${calc.somar(a, b)}`);
});

app.get('/subtrair/:a/:b', (req, res)=>{
    let a = Number(req.params.a);
    let b = Number(req.params.b);
    res.send(`${a} - ${b} = ${calc.subtrair(a, b)}`);
});

app.get('/multiplicar/:a/:b', (req, res)=>{
    let a = Number(req.params.a);
    let b = Number(req.params.b);
    res.send(`${a} * ${b} = ${calc.multiplicar(a, b)}`);
});

app.get('/dividir/:a/:b', (req, res)=>{
    let a = Number(req.params.a);
    let b = Number(req.params.b);
    res.send(`${a} / ${b} = ${calc.dividir(a, b)}`);
});

const PORT = 8080;
app.listen(PORT, ()=>{
    console.log('app rodando na porta ' + PORT);
});