import { useState, useEffect } from "react";
import PostComponent from "./Post";
import { PostItems } from "./Post.interface";
import DeleteModal from "./DeleteModal";

const Posts = () => {
  const [posts, setPosts] = useState<PostItems[]>([]);
  const [deleteModalActive, setDeleteModalActive] = useState(false);
  const [postToDelete, setPostToDelete] = useState<PostItems>({
    title: '',
    summary: '',
    content: '',
    dateFormatted: '',
    id: '',
    isVisible: true,
  });

  function toggleDeleteModal(){
    setDeleteModalActive(!deleteModalActive);
  }

  function setPostInterested(postToDelete : PostItems){
    setPostToDelete({...postToDelete});
  }

  // Function that needs to be called to update posts
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
  }

  useEffect(() => {
    getPosts();
  }, [])

  if(deleteModalActive){
    return (<DeleteModal 
      post = {postToDelete} 
      toggleModal = {toggleDeleteModal}
      updatePosts = {getPosts}
    />)
  }

  return (
    <div className = "container">
      {posts.map((post) => 
        <PostComponent 
          post = {post} 
          key = {post.id} 
          toggleModal = {toggleDeleteModal} 
          setPostToDelete = {setPostInterested} />
        )}
    </div>
  )
}

export default Posts;