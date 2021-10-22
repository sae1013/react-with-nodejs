const express = require('express');
const path = require('path');
const cors = require('cors');
const db = require('./db.js');
const {findUserById} = require('./dbQueries/query'); 

const app = express();

const server = require('http').createServer(app);

app.use(cors());
app.get('/', (req,res) => {
  res.send({message:'hello'});
});


app.get('/test', async(req,res)=>{
  
})

app.get('/test2', (req,res) => {
  
});

db(); 
server.listen(8080, ()=>{
  console.log('server is running on 8080')
})

