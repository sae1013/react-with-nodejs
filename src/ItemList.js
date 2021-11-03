import axios from "axios";
import React from "react";
import Item from "./Item";
import classes from "./ItemList.module.css";

function ItemList() {
  const [posts, setPosts] = React.useState([]);
  const [userLikeList,setUserLikeList] = React.useState({});
  
  const updatePosts = (postId,isLike) => {
    const newPosts = [...posts]
    if(isLike){ // 좋아요 표시
      //포스트ID찾아서, 그위치에 새로운 오브젝트 삽입.
      const existIdx = newPosts.findIndex((post) => post.id == postId);
      newPosts[existIdx] = {...newPosts[existIdx],isLike:true}

    }else{ // 좋아요 해제
      const existIdx = newPosts.findIndex((post) => post.id == postId);
      newPosts[existIdx] = {...newPosts[existIdx],isLike:false}
    }
    setPosts(newPosts);
  };

  const sendRequest = async () => {
    const response = await axios.all([
      axios.get("https://jsonplaceholder.typicode.com/posts"),
      axios.get("http://localhost:8080/like/sae1013/posts"),
    ]);
    let [posts,LikeList] = [response[0].data,response[1].data.post_list]  // 좋아요리스트까지 불러와줘야함.
    // 데이터 정제
    
    let formattedPosts = posts.reduce((acc,post)=>{
      const idx = LikeList.findIndex((id)=> id ===`${post.id}` );
      
      const formatPost =  (idx !== -1) ? {...post,isLike:true} : {...post,isLike:false};
      formatPost.id = formatPost.id.toString();
      acc.push(formatPost); 
      return acc
    },[]);
    
    setPosts(formattedPosts);
    setUserLikeList(LikeList);
  };

  React.useEffect(() => {
    sendRequest();
  }, []);

  return posts.map((post) => (
    <div key={post.id} className="cardView">
      <Item post={post} updatePosts={updatePosts}></Item>
    </div>
  ));
}

export default ItemList;
