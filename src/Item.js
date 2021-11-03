import React,{useEffect} from 'react'
import classes from './Item.module.css';
import $heart_fill from './images/heart_fill.png';
import axios from 'axios';

function Item({post,updatePosts}) {
  const loginUser = 'sae1013';
  
  const likeHandler = async(postId) => { // 
    
      const result = await axios.get(`http://localhost:8080/check/${loginUser}/like/${postId}`);
      if(result.data.result){ // 좋아요를 표시해야할때
        updatePosts(postId,true);          
      }else { //좋아요를 빼야할 때.
        updatePosts(postId,false);
      }

  }
  useEffect(()=>{
    console.log("아이템 렌더링")
  })
  const onClickHandler = () => {
    likeHandler(post.id.toString());
  }
  
  return (
    <div className={classes.card}>
      <h3>{post.title}</h3>
      <a className={classes.likeButton} onClick= {onClickHandler}>
        <img className={`${post.isLike ? classes.red :''}`}src={$heart_fill}></img>
      </a>
    </div>
  )
}

export default React.memo(Item);
