const express = require('express');
const path = require('path');
const cors = require('cors');
const db = require('./db.js');
const {init,push,findLikeList, checkLike, findLikeListTest} = require('./dbQueries/query'); 

const app = express();

const server = require('http').createServer(app);

app.use(cors());
app.get('/', (req,res) => {

});
app.get('/like/:id/posts', async(req,res)=> { //유저ID로 좋아요포스팅 가져오기.
  
  try{
    const likePosts = await findLikeList(req.params.id);
    res.send({post_list:likePosts});
  }catch(e){

  }
  
});

app.get('/check/:userId/like/:postId',async(req,res)=> { // 좋아요클릭에대한 처리, t/f리턴
  
  const [userId,postId] = [req.params.userId,req.params.postId];
  const result = await checkLike(userId,postId);
  res.send({result:result}); 
});


app.get('/test', async(req,res)=>{ 
  console.log(await findLikeListTest("sae1013")) // 없으면 null 이 나옴.
  res.send({success:true});
})

app.get('/test2', (req,res) => {
  push();
  res.send({success:true})
});

db(); 
server.listen(8080, ()=>{
  console.log('server is running on 8080')
})

