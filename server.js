const express = require('express');
const bodyParser = require('body-parser');
const connection = require('./db.js');

const app = express();
const port = 3000;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.post('/submit-form', (req, res) => {
    const formData = req.body;
    console.log('Dados recebidos:', formData);

    const {nome , email} = formData;

    const query = 'INSERT INTO cadastro (nome, email) VALUES ( ?, ?)';

connection.query(query,[nome, email], (err, results)=>{
    if (err) {
        console.error('Erro ao inserir dados:', err);
        return res.status(500).send('Erro ao inserir dados');
    };

    res.send('Dados recebidos com sucesso!');});
});


app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});