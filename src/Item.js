import React from 'react'
import classes from './Item.module.css';
import $heart_fill from './images/heart_fill.png';

// isLike 유무에 따라 하트를 다르게 렌더링. 서버처리후 -> UI변경(isLiked를 반대로 해당 아이템만 업데이트)
function item({post}) {
  
  const likeHandler = () => {
    // 서버체크처리.상위 리스트로 던져주어야 리렌더링이 된다.

  }

  return (
    <div className={classes.card}>
      <h3>{post.title}</h3>
      <a className={classes.likeButton} onClick= {likeHandler}>
        <img src={$heart_fill}></img>
      </a>
    </div>
  )
}

export default item
