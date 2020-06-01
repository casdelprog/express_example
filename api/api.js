const express = require('express');
const app = express();
const db = new Map();

app.use(express.json());
app.listen(3001, () => console.log('Servidor levantado en 3000'));
initDB();

app.get('/movies', function(req, res){
    res.send(Array.from(db.values()));
} );

app.get('/movie/:id', function(req,res){
    var id = parseInt(req.params.id);
    var response = db.get(id);
    res.send(response);
})


app.get('/movie', function(req, res){ 
    var query = req.query.query;
    var filteredDB = Array.from(db.values()).filter(movie => movie.indexOf(query) > 0);
    res.send(filteredDB);
});

function initDB(){
    db.set(1,'Soy Leyenda');
    db.set(2,'Rey Léon');
    db.set(3,'La marca del demonio');
    db.set(4,'A todo gas');
    db.set(5,'El risas');
    db.set(6,'El brujo');
    db.set(7,'Rey de la montaña');
    db.set(8,'Soy el rey del mundo');
}
