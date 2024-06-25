const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const port = 3000; // Corrigido para `port`

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}))


app.post('/caminho', (req, res) => { // Adicionado parêntese correto
    const formdados= req.body;
    console.log('dados',formdados)
  })

app.listen(port, () => {
    console.log(`Servidor Express rodando em http://localhost:${port}`); // Corrigido para `port`
});