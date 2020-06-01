const express = require('express');
const app = express();

app.listen(4201, () => console.log('La API está levantada en el puerto 4201.'));

app.get('/', (req, res)=> res.send('Bienvenidos a mi primer API REST'));