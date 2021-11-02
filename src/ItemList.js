import axios from "axios";
import React from "react";
import Item from "./Item";
import classes from "./ItemList.module.css";

function ItemList() {
  const [posts, setPosts] = React.useState([]);
  const [userLikeList,setUserLikeList] = React.useState({});
  const sendRequest = async () => {
    const response = await axios.all([
      axios.get("https://jsonplaceholder.typicode.com/posts"),
      axios.get("http://localhost:8080/like/1/posts"),
    ]);
    let [posts,userLikeList] = [response[0].data,response[1].data]  // 좋아요리스트까지 불러와줘야함.
    // 데이터 정제
    
    let formattedPost = posts.reduce((acc,post)=>{
      const idx = userLikeList.post_list.post_list.findIndex((id)=> id ===`${post.id}` );
      const formatPost =  (idx !== -1) ? {...post,isLike:true} : {...post,isLike:false}; 
      acc.push(formatPost); 
      return acc
    },[]);
    console.log(formattedPost)
    setPosts(formattedPost);
    setUserLikeList(userLikeList);
  };

  React.useEffect(() => {
    sendRequest();
  }, []);

  return posts.map((post) => (
    <div key={post.id} className="cardView">
      <Item post={post}></Item>
    </div>
  ));
}

export default ItemList;
