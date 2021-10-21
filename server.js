const express = require('express');
const path = require('path');
const cors = require('cors');
const db = require('./db.js');
const Test = require('./Test.js'); // Model

const app = express();

const server = require('http').createServer(app);

app.use(cors());
app.get('/', (req,res) => {
  res.send({message:'hello'});
});

app.get('/test', (req,res)=>{
  const test =  new Test({
    data:'apple'
  });
  test.save();
  res.send({message:'ok'})
})
db(); // db 연결
server.listen(8080, ()=>{
  console.log('server is running on 8080')
})

