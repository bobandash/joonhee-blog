import { useState, useEffect } from "react";
import PostComponent from "./Post";
import { PostItems } from "./Post.interface";

const Posts = () => {
  const [posts, setPosts] = useState<PostItems[]>([]);

  useEffect(() => {
    async function getPosts(){
      const response = await fetch(import.meta.env.VITE_BACKEND_PORT + '/posts', {
        method: "GET",
        mode: "cors",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
      })
      const data = await response.json();
      setPosts(data);
      console.log(data);
    }
    getPosts();
  }, [])


  return (
    <div className = "container">
      {posts.map((post) => <PostComponent post = {post} key = {post.id}/>)};
    </div>
  )
}

export default Posts;