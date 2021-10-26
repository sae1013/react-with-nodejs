const express = require('express');
const path = require('path');
const cors = require('cors');
const db = require('./db.js');
const {insertData} = require('./dbQueries/query'); 

const app = express();

const server = require('http').createServer(app);

app.use(cors());
app.get('/', (req,res) => {

});


app.get('/test', async(req,res)=>{
  try{
     const data = await insertData() 
  }catch(e){
    res.send({error:'error발생'})
    return
  }
  res.send({status:true})
})

app.get('/test2', (req,res) => {
  
});

db(); 
server.listen(8080, ()=>{
  console.log('server is running on 8080')
})

