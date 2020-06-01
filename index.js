const express = require('express');
const app = express();

app.use(express.json());
app.listen(3000, () => console.log('Servidor levantado en 3000'));

app.get('/',(req,res) => res.send('Hello, world!'));
app.get('/about', (req, res) => res.send('This is about page'));
app.get('/redir', (req, res) => res.redirect('https://geekshubs.com'));
app.get('/request/user/:name', (req, res) =>  printParam(req, res));
app.get('/request/country', function(req,res){
    res.send('The country is: ' + req.query.country)
});
app.post('/request/food', (req,res)=>{
    res.send('My fav food is ' + req.body.food);
});


function printParam(req, res){
    res.send('My name is: '+ req.params.name );
}
