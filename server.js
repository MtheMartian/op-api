const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 8000;
const path = require('path');

app.use(express.static('./js'));

const onePieceChar = {
  'luffy': {
    'name': 'Monkey D. Luffy',
    'age': 19,
    'type': 'Mythical Zoan',
    'img': '/luffy.webp'
  },

  'zoro': {
    'name': 'Roronoa Zoro',
    'age': 21,
    'type': 'None',
    'img': '/zoro.webp'
  },

  'sanji': {
    'name': 'Vinsmoke Sanji',
    'age': 21,
    'type': 'None',
    'img': '/sanji.webp'
  },
}

app.get('/', (request, response) =>{
  response.sendFile(__dirname + '/index.html');
});

app.get('/api/:opChar', (request, response) =>{
  const opChar = request.params.opChar.toLocaleLowerCase();
  if(onePieceChar[opChar]){
    response.json(onePieceChar[opChar]);
  } 
});

app.listen(process.env.PORT || PORT, () =>{
  console.log(`Server is running on port ${PORT}`)
});