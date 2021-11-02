import axios from "axios";
import React from "react";
import Item from "./Item";
import classes from "./ItemList.module.css";

function ItemList() {
  const [posts, setPosts] = React.useState([]);

  const sendRequest = async () => {
    const response = await axios.all([
      axios.get("https://jsonplaceholder.typicode.com/posts"),
      axios.get("https://jsonplaceholder.typicode.com/posts"),
    ]);
    let [post,userLikeList] = [response[0].data,response[1].data]  // 좋아요리스트까지 불러와줘야함.
    console.log(post,userLikeList)
    // if (response.status) {
    //   setPosts(response.data);
    // }
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
