import React,{useEffect} from 'react'
import classes from './Item.module.css';
import $heart_fill from './images/heart_fill.png';
import axios from 'axios';
// isLike 유무에 따라 하트를 다르게 렌더링. 서버처리후 -> UI변경(isLiked를 반대로 해당 아이템만 업데이트)
function Item({post,updatePosts}) {
  const loginUser = 'sae1013';
  
  const likeHandler = async(postId) => { // 
    // 서버체크처리.상위 리스트로 던져주어야 리렌더링이 된다.
      const result = await axios.get(`http://localhost:8080/check/${loginUser}/like/${postId}`);
      if(result){ // 좋아요를 표시해야할때
        updatePosts(postId,true);          
      }else { //좋아요를 빼야할 때.
        updatePosts(postId,false);
      }

  }
  useEffect(()=>{
    console.log(1)
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
